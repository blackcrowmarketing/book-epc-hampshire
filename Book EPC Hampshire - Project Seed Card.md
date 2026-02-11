# Book EPC Hampshire - Project Seed Card

**Project Name:** Book EPC Hampshire  
**Client:** Hilary Webb  
**Domain:** https://book-epc-hampshire.co.uk  
**Last Updated:** February 11, 2026  
**Project Type:** Local Service Business Website (EPC Assessor)

---

## Project Overview

Book EPC Hampshire is a professional website for Hilary Webb, a qualified Energy Performance Certificate (EPC) assessor serving Hampshire and surrounding areas. The site provides information about EPC services, pricing, service coverage, and includes an integrated booking/contact system.

### Business Focus

- **Primary Service:** Domestic Energy Performance Certificates
- **Service Area:** Hampshire (30+ specific locations)
- **Target Audience:** Homeowners, landlords, estate agents
- **Key Differentiator:** Local, personal service with fast turnaround

---

## Technical Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Maps:** Google Maps JavaScript API (direct integration)

### Backend
- **Server:** Node.js
- **Process Manager:** PM2
- **Web Server:** Nginx (reverse proxy)
- **Port:** 3001 (internal)

### Infrastructure
- **Hosting:** Custom VPS (shared with other Black Crow Media sites)
- **Version Control:** GitHub
- **Deployment:** GitHub Actions (Self-Hosted Runner)
- **SSL:** Let's Encrypt (managed via Certbot)

---

## Repository Information

### GitHub Repository
- **Organization:** blackcrowmarketing
- **Repository:** book-epc-hampshire
- **Branch:** main
- **URL:** https://github.com/blackcrowmarketing/book-epc-hampshire

### Master Controller
- **Repository:** black-crow-media
- **Workflow:** `.github/workflows/master_restore.yml`
- **Purpose:** Centralized deployment for all Black Crow Media sites

---

## Deployment Protocol

### "Trojan Horse" Deployment Strategy

This project uses the standardized Black Crow Marketing deployment protocol:

1. **NEVER** manually modify code on the live server
2. **ALWAYS** push code changes to the GitHub repository
3. **GitHub Repository is the ONLY Source of Truth**
4. Self-Hosted Runner automatically deploys on push to `main`
5. Check GitHub Actions logs for troubleshooting

### Deployment Workflow

1. Make code changes in local repository (`book-epc-hampshire`)
2. Commit and push changes to GitHub
3. Update `master_restore.yml` in `black-crow-media` repository
4. Commit and push to trigger deployment
5. GitHub Actions runner pulls latest code and deploys

### Deployment Steps (Automated)

```bash
# Executed by GitHub Actions runner
cd /var/www/book-epc-hampshire
git pull origin main
cd client
npm cache clean --force
npm install
# Create .env file with environment variables
npm run build
pm2 restart book-epc-hampshire
pm2 save
```

---

## Environment Variables

### Required Variables (Set in master_restore.yml)

```bash
VITE_GOOGLE_MAPS_API_KEY=AIzaSyCAmRq3cfk6pKtWdfZHnkUEJtKQNqfsAjo
```

### Environment File Location

- **Build-time:** Created during GitHub Actions workflow
- **Location:** `/var/www/book-epc-hampshire/client/.env`
- **Note:** Not committed to repository (gitignored)

---

## Google Maps Integration

### Configuration

- **API Key:** AIzaSyCAmRq3cfk6pKtWdfZHnkUEJtKQNqfsAjo
- **Integration Method:** Direct Google Maps JavaScript API
- **Component:** `client/src/components/Map.tsx`
- **Service Area Map:** `client/src/components/ServiceAreaGoogleMap.tsx`

### Map Features

- Interactive Google Map centered on Southampton
- Service area markers for key Hampshire locations
- Info windows with service details
- Zoom, satellite view, Street View controls

### Security Recommendation

Consider adding domain restrictions in Google Cloud Console to limit API key usage to `book-epc-hampshire.co.uk` only.

---

## SEO Configuration

### Meta Tags (index.html)

- **Title:** Energy Performance Certificates Hampshire | EPC Assessor Hilary Webb
- **Description:** Professional Energy Performance Certificate (EPC) services across Hampshire...
- **Keywords:** EPC Hampshire, Energy Performance Certificate Hampshire, EPC Southampton, EPC Totton, etc.
- **Canonical URL:** https://book-epc-hampshire.co.uk
- **Open Graph Tags:** Configured for social media sharing
- **Twitter Card Tags:** Configured for Twitter/X sharing

### Schema.org Structured Data

- **Type:** LocalBusiness
- **Name:** Book EPC Hampshire
- **Service Areas:** 32 locations (Southampton, Winchester, Totton, Lyndhurst, Romsey, etc.)
- **Contact:** Phone, email, address
- **Price Range:** £65-£85

### Local SEO Strategy

The site is optimized for 30+ specific Hampshire locations:

- Southampton, Totton, Lyndhurst, Romsey, Eastleigh, Hedge End, Locks Heath, Hythe, Beaulieu, Lymington, Chandlers Ford, Bishops Waltham, Winchester, Stockbridge, Shirley, Millbrook, New Forest, Ashurst, Brockenhurst, Bursledon, Cadnam, Chilworth, Holbury, Dibden Purlieu, Marchwood, Nursling, Rownhams, Shedfield, West End, West Wellow, Woodlands

### SEO Features

- **XML Sitemap:** `/sitemap.xml` (40+ URLs including location anchors)
- **Robots.txt:** Configured to allow all crawlers and reference sitemap
- **Location Section:** "EPC Services Across Hampshire" with all 30 locations
- **Header Optimization:** H1 and H2 tags include target keywords

---

## Site Structure

### Main Sections

1. **Hero Section**
   - Headline with primary keywords
   - CTA button (Request Callback)
   - Hero image

2. **About Section**
   - Assessor profile (Hilary Webb)
   - Qualifications and experience
   - Trust indicators

3. **Pricing Section**
   - Domestic EPC Assessment Property Pricing
   - Four pricing tiers (1-4+ bed properties)
   - Travel fee notice for areas outside Southampton

4. **Service Area Section**
   - Interactive Google Map
   - Coverage details
   - Extended coverage information

5. **Resources Section**
   - EPC information
   - Links to government resources

6. **Contact Section**
   - Contact form
   - Phone and email details
   - Service area information

7. **Location SEO Section**
   - Grid of 30 Hampshire locations
   - Keyword-rich content for local search

### Navigation

- Fixed header with navigation links
- Smooth scroll to sections
- Mobile-responsive menu

---

## Contact Information

### Business Details

- **Name:** Hilary Webb
- **Business:** Book EPC Hampshire
- **Phone:** 07966 196459
- **Email:** hilary@book-epc-hampshire.co.uk
- **Base Location:** Southampton, Hampshire

### Service Coverage

- **Primary Area:** Southampton and surrounding areas
- **Extended Coverage:** All of Hampshire
- **Travel Charges:** May apply for areas outside Southampton postcode

---

## Branding & Design

### Color Scheme

- **Primary:** Professional blue/green tones
- **Accent:** Chart colors for highlights
- **Background:** Light neutral tones
- **Text:** Dark for readability

### Typography

- **Headings:** Font-heading (bold, professional)
- **Body:** System font stack for readability

### Logo

- Located in `/client/public/logo.png`
- Used in header and Open Graph tags

---

## Key Files & Directories

```
book-epc-hampshire/
├── client/
│   ├── public/
│   │   ├── logo.png
│   │   ├── sitemap.xml
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.tsx
│   │   │   ├── Map.tsx
│   │   │   └── ServiceAreaGoogleMap.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   └── const.ts
│   ├── index.html
│   └── package.json
└── PROJECT_SEED.md (this file)
```

---

## Recent Changes & Optimizations

### February 11, 2026

1. **Google Maps Reactivation**
   - Switched from proxy service to direct Google Maps API
   - Added `VITE_GOOGLE_MAPS_API_KEY` to deployment workflow
   - Map now fully functional

2. **SEO Optimization**
   - Updated title tag for congruence
   - Added comprehensive meta tags
   - Implemented Schema.org structured data
   - Optimized all H1 and H2 tags with target keywords

3. **Local SEO Implementation**
   - Added 30 Hampshire locations to schema `areaServed`
   - Created "EPC Services Across Hampshire" section
   - Updated meta keywords with location-specific terms
   - Generated XML sitemap with location anchor links

4. **Content Updates**
   - Updated pricing section headline
   - Revised pricing sub-header with travel fee notice
   - Updated extended coverage text
   - Removed commercial EPC reference from footer

5. **UI Improvements**
   - Removed "View Services" button from hero
   - Removed cartoon avatars from hero section
   - Left-aligned location items in grid
   - Added Black Crow Marketing attribution to footer

6. **Technical SEO**
   - Created XML sitemap (`sitemap.xml`)
   - Created robots.txt
   - Ready for Google Search Console submission

---

## Google Search Console

### Submission Status

- **Sitemap URL:** https://book-epc-hampshire.co.uk/sitemap.xml
- **Robots.txt:** https://book-epc-hampshire.co.uk/robots.txt
- **Verification:** Pending (HTML tag method recommended)

### Next Steps

1. Verify property ownership in Google Search Console
2. Submit sitemap
3. Request indexing for key pages
4. Monitor Coverage and Performance reports

---

## Future Enhancements

### Potential Improvements

- **Google Business Profile:** Create and optimize for local search
- **Customer Reviews:** Integrate review system or testimonials
- **Blog Section:** Add content marketing for SEO
- **Online Booking:** Implement calendar integration for appointments
- **Analytics:** Add Google Analytics for traffic monitoring
- **Live Chat:** Consider adding live chat for instant inquiries

### SEO Opportunities

- Create location-specific landing pages for major towns
- Add FAQ section with schema markup
- Implement breadcrumb navigation
- Add customer testimonials with schema markup
- Create blog content targeting long-tail keywords

---

## Maintenance & Monitoring

### Regular Tasks

**Weekly:**
- Monitor Google Search Console Coverage report
- Check for any deployment errors in GitHub Actions

**Monthly:**
- Review Google Search Console Performance report
- Update content if needed
- Check for broken links
- Review and respond to any customer inquiries

**Quarterly:**
- Conduct full SEO audit
- Review competitor rankings
- Update pricing if needed
- Refresh content and images

---

## Support & Contact

### Development Team

- **Agency:** Black Crow Marketing Ltd
- **Website:** https://blackcrowmarketing.co.uk
- **Attribution:** Footer credit on all pages

### GitHub Access

- **Organization:** blackcrowmarketing
- **Access Token:** (Stored securely, not in repository)
- **Runner:** Self-hosted on VPS

---

## Important Notes

### Do's

✅ Always push code changes to GitHub  
✅ Use the master controller workflow for deployment  
✅ Test changes locally before pushing  
✅ Keep environment variables secure  
✅ Monitor Google Search Console regularly  
✅ Maintain consistent NAP (Name, Address, Phone) across all platforms

### Don'ts

❌ Never edit code directly on the live server  
❌ Don't commit `.env` files to repository  
❌ Don't expose API keys in client-side code without restrictions  
❌ Don't skip the deployment workflow  
❌ Don't modify PM2 processes manually without updating workflow

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 11, 2026 | Initial project seed card created |

---

**Document Prepared By:** Manus AI  
**For:** Black Crow Marketing Ltd  
**Project:** Book EPC Hampshire
