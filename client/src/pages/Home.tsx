import { useAuth } from "@/_core/hooks/useAuth";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Download, FileText, Star, Clock, Shield, MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceAreaGoogleMap from "@/components/ServiceAreaGoogleMap";
import { useState } from "react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    bestTime: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, bestTime: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mykdzpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        toast.success("Thank you for your enquiry. Hilary will contact you shortly.");
        setFormState({
          name: "",
          email: "",
          phone: "",
          bestTime: "",
          message: ""
        });
      } else {
        toast.error("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit enquiry. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section - Asymmetric Split */}
      <section id="home" className="relative bg-secondary overflow-hidden pb-2">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] py-12">
            <div className="space-y-8 animate-in slide-in-from-left-10 duration-700">
              <style>{`
                @keyframes pulse-glow {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(118, 184, 42, 0.7); }
                  50% { box-shadow: 0 0 0 8px rgba(118, 184, 42, 0); }
                }
                .pulse-dot {
                  animation: pulse-glow 2s infinite;
                }
              `}</style>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 text-white text-sm font-semibold border border-primary shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-chart-1"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-chart-1"></span>
                </span>
                Available for bookings in Hampshire
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                Professional <span className="text-chart-1">Energy Performance Certificate (EPC)</span> Services in Hampshire
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Fast, reliable, and fully accredited Energy Performance Certificates for homeowners, landlords, and estate agents.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-chart-1 hover:bg-chart-4 text-primary-foreground font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  REQUEST CALLBACK
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-muted-foreground">Trusted by local homeowners</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] lg:min-h-[600px] animate-in slide-in-from-right-10 duration-700 delay-200">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663287236462/EzpRoLIIRsOkQHpr.jpg" 
                alt="Modern Energy Efficient Home" 
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
              
              {/* Elmhurst Energy Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-2 rounded-xl shadow-xl border border-border animate-in fade-in zoom-in duration-1000 delay-500">
                <img 
                  src="/elmhurst-approved.webp" 
                  alt="Elmhurst Energy Approved Energy Assessor" 
                  className="w-40 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Meet Your Assessor Section - MOVED TO TOP */}
      <section id="about" className="py-12 bg-secondary/30 scroll-mt-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-chart-1 rounded-full blur-xl opacity-20 transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663287236462/OCfoIDvGEQmkIkTu.jpg" 
                  alt="Hilary Webb" 
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-xl"
                />
                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg">
                  <Check className="w-6 h-6 text-chart-1" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-3xl font-heading font-bold text-primary">Meet Your Hampshire EPC Assessor</h2>
              <h3 className="text-xl font-semibold text-chart-4">Hilary Webb - Qualified Energy Performance Certificate Provider</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a fully qualified and accredited Energy Assessor based in Southampton, covering the entire Hampshire area. With years of experience in the property industry, I provide a professional, friendly, and efficient service to help you get your Energy Performance Certificate quickly and hassle-free.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you are selling your home, renting out a property, or applying for government grants, I ensure your assessment is accurate and compliant with all current regulations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-border">
                  <Clock className="w-8 h-8 text-chart-1" />
                  <div>
                    <p className="font-bold text-primary">Fast Turnaround</p>
                    <p className="text-sm text-muted-foreground">EPC Issued Quickly</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-border">
                  <MapPin className="w-8 h-8 text-chart-1" />
                  <div>
                    <p className="font-bold text-primary">Local Expert</p>
                    <p className="text-sm text-muted-foreground">Southampton & Hampshire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - MOVED TO MIDDLE */}
      <section id="pricing" className="py-12 bg-background scroll-mt-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-3xl font-heading font-bold text-primary mb-4">Domestic EPC Assessment Property Pricing</h2>
            <p className="text-muted-foreground text-lg">
              Professional service with competitive rates.
              <br />
              Promptly receive your Energy Performance Certificate
              <br />
              Properties outside of the Southampton post code area may incur a travel and fuel cost fee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1 Bed Home Pricing */}
            <Card className="border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <CardHeader className="bg-secondary/50 border-b border-border pb-6">
                <CardTitle className="text-lg font-bold text-primary">1 Bed Home</CardTitle>
                <CardDescription className="text-sm">Studio Flats and 1 Bed Homes</CardDescription>
                <div className="mt-3">
                  <span className="text-3xl font-bold text-primary">£65</span>
                  <span className="text-muted-foreground text-sm">.00</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Full EPC Assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Fast Certificate Issue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Valid for 10 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Digital copy included</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>Request Callback</Button>
              </CardFooter>
            </Card>

            {/* 2-3 Bed Home Pricing */}
            <Card className="border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <CardHeader className="bg-secondary/50 border-b border-border pb-6">
                <CardTitle className="text-lg font-bold text-primary">2-3 Bed Home</CardTitle>
                <CardDescription className="text-sm">Ideal for Family Homes</CardDescription>
                <div className="mt-3">
                  <span className="text-3xl font-bold text-primary">£75</span>
                  <span className="text-muted-foreground text-sm">.00</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Full EPC Assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Fast Certificate Issue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Valid for 10 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Digital copy included</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>Request Callback</Button>
              </CardFooter>
            </Card>

            {/* 4-5 Bed Home Pricing */}
            <Card className="border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <CardHeader className="bg-secondary/50 border-b border-border pb-6">
                <CardTitle className="text-lg font-bold text-primary">4-5 Bed Home</CardTitle>
                <CardDescription className="text-sm">Ideal for Larger Properties</CardDescription>
                <div className="mt-3">
                  <span className="text-3xl font-bold text-primary">£85</span>
                  <span className="text-muted-foreground text-sm">.00</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Full EPC Assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Fast Certificate Issue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Valid for 10 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Digital copy included</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full bg-chart-1 hover:bg-chart-4 text-primary-foreground font-bold" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>Request Callback</Button>
              </CardFooter>
            </Card>

            {/* Larger Properties Pricing */}
            <Card className="border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <CardHeader className="bg-secondary/50 border-b border-border pb-6">
                <CardTitle className="text-lg font-bold text-primary">Larger Properties</CardTitle>
                <CardDescription className="text-sm">6+ Bedrooms or Complex</CardDescription>
                <div className="mt-3">
                  <span className="text-2xl font-bold text-primary">Request</span>
                  <span className="text-muted-foreground text-sm"> Quote</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Full EPC Assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Fast Certificate Issue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Valid for 10 Years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-chart-1 flex-shrink-0" />
                    <span>Digital copy included</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>Request Callback</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-chart-1 text-primary-foreground rounded-xl p-8 text-center shadow-lg">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Phone className="w-8 h-8" />
              <h3 className="text-2xl md:text-3xl font-bold">CALL OR TEXT : 07966 196459</h3>
            </div>
            <p className="text-primary-foreground/90">Get your EPC booked today</p>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <ServiceAreaGoogleMap />

      {/* EPC Guide & Resources Section - MOVED TO BOTTOM */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-3xl font-heading font-bold text-primary mb-4">Energy Performance Certificate Guide & Resources</h2>
            <p className="text-muted-foreground text-lg">
              Understanding your Energy Performance Certificate is important. View the official government guide below.
            </p>
          </div>
          
          <div className="bg-secondary rounded-xl p-8 shadow-inner max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <a 
                  href="/epc-guide.pdf" 
                  download 
                  className="block group cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <img 
                    src="/epc-sample.png" 
                    alt="EPC Sample Document" 
                    className="w-48 h-auto shadow-lg rounded-lg group-hover:shadow-2xl transition-shadow" 
                  />
                  <p className="text-center mt-3 text-sm font-medium text-primary group-hover:text-chart-1 transition-colors">Click to download PDF</p>
                </a>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-4">Official EPC Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Download the official UK government Energy Performance Certificate guide to understand how EPCs work, what they measure, and how to interpret your rating.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  The guide covers energy efficiency ratings (A-G scale), recommendations for improvements, and important information about your property's energy performance.
                </p>
                <Button size="lg" className="gap-2" asChild>
                  <a href="/epc-guide.pdf" download>
                    <Download className="w-5 h-5" />
                    Download PDF Guide
                  </a>
                </Button>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-primary text-primary-foreground relative overflow-hidden scroll-mt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-3xl font-heading font-bold mb-6">Book Your Hampshire EPC Assessment</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Ready to book your EPC assessment or have a question? Fill out the form or contact me directly using the details below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-chart-1/20 p-3 rounded-full border border-chart-1/30">
                    <Phone className="w-6 h-6 text-chart-1" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 uppercase tracking-wider font-bold">Call or Text</p>
                    <a href="tel:07966196459" className="text-3xl font-bold hover:text-chart-1 transition-colors">07966 196459</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-chart-1/20 p-3 rounded-full border border-chart-1/30">
                    <Mail className="w-6 h-6 text-chart-1" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 uppercase tracking-wider font-bold">Email</p>
                    <a href="mailto:hilary@book-epc-hampshire.co.uk" className="text-lg font-bold hover:text-chart-1 transition-colors">hilary@book-epc-hampshire.co.uk</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-chart-1/20 p-3 rounded-full border border-chart-1/30">
                    <MapPin className="w-6 h-6 text-chart-1" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 uppercase tracking-wider font-bold">Area Covered</p>
                    <p className="text-lg font-bold">Southampton & Hampshire</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 backdrop-blur-sm">
                <p className="italic text-primary-foreground/80">
                  "Hilary provided an excellent service. She was punctual, polite and the certificate was ready the next day. Highly recommended!"
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex text-chart-1">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-bold text-sm">- Sarah J., Southampton</span>
                </div>
              </div>
            </div>
            
            <div id="contact-form" className="bg-white text-foreground rounded-2xl p-8 shadow-2xl scroll-mt-20">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Request a Callback</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    value={formState.name}
                    onChange={handleInputChange}
                    className="bg-secondary/30"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      value={formState.email}
                      onChange={handleInputChange}
                      className="bg-secondary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="07700 900000" 
                      required 
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="bg-secondary/30"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bestTime">Best Time to Call</Label>
                  <Select onValueChange={handleSelectChange} value={formState.bestTime}>
                    <SelectTrigger className="bg-secondary/30">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                      <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                      <SelectItem value="anytime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell me about your property..." 
                    value={formState.message}
                    onChange={handleInputChange}
                    className="bg-secondary/30 min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-chart-1 hover:bg-chart-4 text-primary-foreground font-bold text-lg py-6 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Enquiry"}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting this form, you agree to be contacted regarding your EPC enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Location Content - Optimized for local search */}
      <section className="py-8 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">EPC Services Across Hampshire</h2>
            <p className="text-muted-foreground text-center mb-8">
              Professional Energy Performance Certificate assessments available throughout Hampshire and surrounding areas. 
              We provide fast, reliable EPC services to homeowners, landlords, and estate agents across the region.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm text-muted-foreground">
              <div className="text-center p-2">EPC Southampton</div>
              <div className="text-center p-2">EPC Totton</div>
              <div className="text-center p-2">EPC Lyndhurst</div>
              <div className="text-center p-2">EPC Romsey</div>
              <div className="text-center p-2">EPC Eastleigh</div>
              <div className="text-center p-2">EPC Hedge End</div>
              <div className="text-center p-2">EPC Locks Heath</div>
              <div className="text-center p-2">EPC Hythe</div>
              <div className="text-center p-2">EPC Beaulieu</div>
              <div className="text-center p-2">EPC Lymington</div>
              <div className="text-center p-2">EPC Chandlers Ford</div>
              <div className="text-center p-2">EPC Bishops Waltham</div>
              <div className="text-center p-2">EPC Winchester</div>
              <div className="text-center p-2">EPC Stockbridge</div>
              <div className="text-center p-2">EPC Shirley</div>
              <div className="text-center p-2">EPC Millbrook</div>
              <div className="text-center p-2">EPC New Forest</div>
              <div className="text-center p-2">EPC Ashurst</div>
              <div className="text-center p-2">EPC Brockenhurst</div>
              <div className="text-center p-2">EPC Bursledon</div>
              <div className="text-center p-2">EPC Cadnam</div>
              <div className="text-center p-2">EPC Chilworth</div>
              <div className="text-center p-2">EPC Holbury</div>
              <div className="text-center p-2">EPC Dibden Purlieu</div>
              <div className="text-center p-2">EPC Marchwood</div>
              <div className="text-center p-2">EPC Nursling</div>
              <div className="text-center p-2">EPC Rownhams</div>
              <div className="text-center p-2">EPC Shedfield</div>
              <div className="text-center p-2">EPC West End</div>
              <div className="text-center p-2">EPC West Wellow</div>
              <div className="text-center p-2">EPC Woodlands</div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6">
              Looking for Energy Performance Certificate services in your area? Contact us for fast, professional EPC assessments 
              in Southampton, Totton, Romsey, Eastleigh, Winchester, New Forest, and throughout Hampshire. Qualified assessor providing 
              domestic and commercial EPC certificates with same-day or next-day service available.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
