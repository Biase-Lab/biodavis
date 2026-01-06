# Google Search Indexing Guide for BiODAVis

This guide will help you get your BiODAVis website indexed on Google and optimized for search engines.

## ✅ SEO Files Created

The following files have been created to optimize your site for search engines:

1. **`/public/robots.txt`** - Tells search engines which pages to crawl
2. **`/src/app/sitemap.ts`** - Generates a dynamic XML sitemap for search engines
3. **Updated `/src/app/layout.tsx`** - Enhanced metadata including Open Graph, Twitter cards, and structured data

## 🚀 Step-by-Step Google Search Console Setup

### Step 1: Deploy Your Website to Production

Before indexing, your website must be live at **https://biodavis.com**

Make sure:
- Your domain is properly configured
- SSL certificate is active (HTTPS)
- Website is accessible publicly

### Step 2: Set Up Google Search Console

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console/

2. **Sign in with your Google account**
   - Use a Google account you'll have long-term access to

3. **Add your property**
   - Click "Add Property"
   - Choose **"URL prefix"** option
   - Enter: `https://biodavis.com`
   - Click "Continue"

### Step 3: Verify Ownership

Google offers several verification methods. Choose one:

#### Option A: HTML Tag (Recommended - Easiest)

1. Google will provide an HTML meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```

2. Copy the verification code (the part after `content="`)

3. Update `/src/app/layout.tsx`:
   ```typescript
   verification: {
     google: 'YOUR_VERIFICATION_CODE',  // Paste your code here
   },
   ```

4. Deploy the updated website

5. Return to Google Search Console and click "Verify"

#### Option B: HTML File Upload

1. Download the HTML verification file from Google
2. Place it in `/Users/fbiase/biodavis/website_biodavis_01_03_2026/public/`
3. Deploy your website
4. Click "Verify" in Google Search Console

#### Option C: DNS Verification (If you manage DNS)

1. Google will provide a TXT record
2. Add it to your domain's DNS settings
3. Wait for DNS propagation (can take up to 48 hours)
4. Click "Verify"

### Step 4: Submit Your Sitemap

Once verified:

1. In Google Search Console, click **"Sitemaps"** in the left sidebar
2. Enter: `sitemap.xml`
3. Click **"Submit"**

Your sitemap URL will be: `https://biodavis.com/sitemap.xml`

### Step 5: Request Indexing

1. In Google Search Console, click **"URL Inspection"** in the left sidebar
2. Enter: `https://biodavis.com`
3. Click **"Request Indexing"**
4. Repeat for key pages:
   - `https://biodavis.com/#services`
   - `https://biodavis.com/#pricing`
   - `https://biodavis.com/#contact`

### Step 6: Monitor Indexing Progress

- **Coverage Report**: Shows which pages are indexed
- **Performance Report**: Shows search impressions and clicks
- **URL Inspection**: Check individual page status

**Note**: It can take **1-4 weeks** for Google to fully index your site.

## 📈 Additional SEO Optimization Tips

### 1. Submit to Other Search Engines

**Bing Webmaster Tools**:
- Visit: https://www.bing.com/webmasters
- Similar process to Google Search Console
- Also covers Yahoo and DuckDuckGo

### 2. Build Backlinks

Create profiles and links on:
- Virginia Tech faculty directory
- Research profiles (ResearchGate, Google Scholar, ORCID)
- LinkedIn company page
- Twitter/X account
- Academic and industry forums

### 3. Content Optimization

Your website already has:
- ✅ Descriptive page titles
- ✅ Meta descriptions
- ✅ Structured headings (H1, H2, H3)
- ✅ Alt text for images (add if missing)
- ✅ Fast loading times (Next.js optimization)
- ✅ Mobile-responsive design
- ✅ HTTPS security

### 4. Local SEO (Optional)

If targeting local Virginia Tech researchers:
- Create a Google Business Profile
- Add your location and contact information
- Encourage reviews from satisfied clients

### 5. Analytics Setup

**Google Analytics 4** (Recommended):

1. Create a GA4 property at https://analytics.google.com/
2. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Add to your Next.js app:

Create `/src/app/GoogleAnalytics.tsx`:
```tsx
import Script from 'next/script'

export default function GoogleAnalytics({ ga_id }: { ga_id: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga_id}');
        `}
      </Script>
    </>
  )
}
```

Then add to `/src/app/layout.tsx`:
```tsx
import GoogleAnalytics from './GoogleAnalytics'

// In the body:
<body>
  <GoogleAnalytics ga_id="G-XXXXXXXXXX" />
  {children}
</body>
```

## 🔍 Checking Your SEO Setup

### Test Your Sitemap
Visit: `https://biodavis.com/sitemap.xml`

You should see XML content with your page URLs.

### Test Your Robots.txt
Visit: `https://biodavis.com/robots.txt`

You should see:
```
User-agent: *
Allow: /
Sitemap: https://biodavis.com/sitemap.xml
```

### Test Your Meta Tags

1. Visit: https://www.opengraph.xyz/
2. Enter: `https://biodavis.com`
3. Review how your site appears on social media

### Test Mobile-Friendliness

Visit: https://search.google.com/test/mobile-friendly

### Test Page Speed

Visit: https://pagespeed.web.dev/

## 📊 Expected Timeline

- **Day 1**: Submit to Google Search Console
- **Day 1-3**: Google verifies and crawls your sitemap
- **Week 1-2**: First pages appear in Google search
- **Week 2-4**: Full site indexed
- **Month 2+**: Rankings improve as Google learns your site

## 🎯 Target Keywords for BiODAVis

Your site is optimized for:

**Primary Keywords**:
- animal science bioinformatics
- livestock genomics
- RNA-seq analysis services
- interactive omics visualization

**Secondary Keywords**:
- companion animal genomics
- veterinary bioinformatics
- agricultural genomics services
- multi-omics integration
- microbiome analysis
- metabolomics services
- proteomics analysis

**Long-tail Keywords**:
- "RNA-seq analysis for livestock"
- "interactive dashboard omics data"
- "animal science multi-omics"
- "dairy cattle genomics analysis"

## ✅ Post-Indexing Checklist

After Google indexes your site:

- [ ] Verify all pages are indexed
- [ ] Monitor search queries in Google Search Console
- [ ] Track click-through rates
- [ ] Monitor page load speeds
- [ ] Check for crawl errors
- [ ] Review mobile usability
- [ ] Set up Google Analytics
- [ ] Create content strategy for blog/news (optional)
- [ ] Build backlinks from academic institutions
- [ ] Share on social media and academic networks

## 🆘 Troubleshooting

**Site not indexed after 2 weeks?**
- Check Google Search Console for errors
- Ensure robots.txt allows crawling
- Verify sitemap is accessible
- Check for manual actions/penalties

**Pages showing "Discovered - currently not indexed"?**
- This is normal for new sites
- Keep content fresh and updated
- Build more backlinks
- Improve page quality and relevance

**Need help?**
- Google Search Console Help: https://support.google.com/webmasters
- Next.js SEO docs: https://nextjs.org/learn/seo/introduction-to-seo

## 📧 Contact

For questions about this setup:
- Email: fbiase@vt.edu
- Review the Next.js documentation for advanced SEO features

---

**Good luck with your SEO! Your BiODAVis website is now optimized for search engines.** 🚀
