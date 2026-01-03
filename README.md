# BiODAVis Website

Professional bioinformatics consulting website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional aesthetic inspired by leading bioinformatics service companies
- **Responsive**: Fully responsive design that works on mobile, tablet, and desktop
- **Point-and-Click Focus**: Emphasizes the unique value proposition of accessible bioinformatics
- **Contact Form**: Integrated contact form with email notifications via Resend
- **Animations**: Smooth scroll-triggered animations using Framer Motion
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Email**: Resend
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

The dependencies are already installed. If you need to reinstall:

```bash
npm install --cache ./.npm-cache
```

### Environment Variables

1. Copy `.env.local` and update with your credentials:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=contact@biodavis.com
```

To get a Resend API key:
1. Sign up at https://resend.com
2. Verify your domain or use their test domain
3. Create an API key
4. Add it to `.env.local`

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
website_biodavis/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   └── api/contact/        # Contact form API
│   ├── components/
│   │   ├── layout/             # Header & Footer
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Reusable UI components
│   └── lib/                    # Utilities and constants
├── public/                     # Static assets
└── tailwind.config.ts          # Tailwind configuration
```

## Sections

### 1. Hero
- Compelling headline and subheadline
- Dual CTAs (Start Analysis / Explore Services)
- Trust indicators
- Gradient background with animations

### 2. About
- Company introduction
- Key statistics and credentials
- Professional credibility

### 3. Services
Five service cards covering:
- RNA-Sequencing Analysis
- Single Cell RNA-Sequencing
- Microbiome Analysis
- Nanopore Long-Read Processing
- Whole Genome Sequencing

### 4. Value Proposition ⭐
**CRITICAL DIFFERENTIATOR**
- Customizable Pipelines
- Point-and-Click Interface (highlighted)
- Comprehensive Support
- Visual workflow diagram

### 5. Pricing
Three tiers:
- Basic (Starting at $2,500)
- Professional (Starting at $5,000) - Featured
- Enterprise (Custom Pricing)

### 6. Contact
- Contact form with validation
- Email, response time, social links
- "What happens next" guide
- Free consultation callout

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    900: "#1a3a52", // Dark navy
    700: "#1a74ba", // Medium blue
    500: "#2099CC", // Bright blue
    // ...
  },
  accent: {
    700: "#0891b2", // Darker teal
    500: "#1CABE3", // Teal
  },
}
```

### Content

Update content in `src/lib/constants.ts`:
- Site name and tagline
- Contact email
- Services descriptions
- Navigation links

### Images

Add images to `public/images/`:
- Hero background
- Service icons (currently using Lucide icons)
- Logo (currently using a placeholder)
- Pipeline diagram for value proposition

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

Vercel will automatically:
- Build and deploy on push to main
- Provide preview deployments for PRs
- Handle SSL certificates
- Optimize performance

### Other Platforms

The site can also be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting provider

## Next Steps

### Immediate

1. **Add Resend API key** to `.env.local`
2. **Update contact email** in `.env.local` and `src/lib/constants.ts`
3. **Create logo** and add to `public/images/logo.svg`
4. **Add hero image** to `public/images/hero-background.jpg`

### Soon

1. **Create pipeline diagram** for ValueProposition section
2. **Add favicon** to `public/favicon.ico`
3. **Update social links** in Footer and Contact sections
4. **Customize content** to match your specific credentials and experience
5. **Set up analytics** (Google Analytics, Plausible, etc.)

### Future Enhancements

- Blog section for SEO and thought leadership
- Client testimonials and case studies
- Interactive pipeline demo
- Client portal for project management
- FAQ section
- Multi-language support

## SEO Checklist

- [x] Proper metadata in `layout.tsx`
- [x] Semantic HTML structure
- [x] Responsive design
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console
- [ ] Add OG images
- [ ] Schema.org structured data

## Performance Optimization

The site is already optimized with:
- Next.js Image component for optimized images
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Font optimization with next/font

Target metrics:
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

Copyright (c) 2025 BiODAVis. All rights reserved.

## Support

For questions or issues with the website code, please refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- Framer Motion documentation: https://www.framer.com/motion/

---

Built with ❤️ for BiODAVis
