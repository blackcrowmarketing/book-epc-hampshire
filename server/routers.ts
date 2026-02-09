import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { sendEnquiryEmail } from "./_core/email";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submitEnquiry: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().min(1, "Phone is required"),
          bestTime: z.string().min(1, "Best time to call is required"),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Send email to Hilary via SMTP
        const emailSent = await sendEnquiryEmail({
          name: input.name,
          email: input.email,
          phone: input.phone,
          bestTime: input.bestTime,
          message: input.message,
        });

        // Also send notification to owner as backup
        const enquiryDetails = `
Name: ${input.name}
Email: ${input.email}
Phone: ${input.phone}
Best Time to Call: ${input.bestTime}
Message: ${input.message || "(No message provided)"}
        `.trim();

        await notifyOwner({
          title: "New EPC Enquiry from " + input.name,
          content: enquiryDetails,
        });

        return {
          success: true,
          message: "Thank you for your enquiry. Hilary will contact you shortly.",
          emailSent,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
