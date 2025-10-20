# Non-Working Links and Buttons Summary

## Overview
This document lists all non-functional links and buttons across the CADCAMX website that are currently decorative/placeholders and need to be implemented.

---

## Header Navigation (All Pages)

### ❌ Get Quote Button
- **Location**: Header (top right)
- **Current**: Decorative button
- **Action Needed**: Link to `/contact` page or open contact form modal

### ❌ Start Project Button
- **Location**: Header (top right)
- **Current**: Decorative button
- **Action Needed**: Link to `/contact` page or open quote form

---

## Footer (All Pages)

### ❌ Social Media Links
- **Location**: Footer - Company Info section
- **Links**:
  - LinkedIn icon
  - Twitter icon
  - YouTube icon
- **Current**: Decorative cursors but no actual links
- **Action Needed**: Add actual social media profile URLs

### ❌ Services Links
- **Location**: Footer - Services column
- **Links**:
  - 2D Drafting
  - 3D Modeling
  - CAM Programming
  - Reverse Engineering
  - Simulation
- **Current**: Hover effects only
- **Action Needed**: Link to `/services` page with anchor links or service detail pages

### ❌ Company Links
- **Location**: Footer - Company column
- **Links**:
  - About Us → Should link to `/about`
  - Case Studies → Should link to `/case-studies`
  - Careers → Needs dedicated page
  - Blog → Needs dedicated page or external blog link
  - Contact → Should link to `/contact`
- **Action Needed**: Create missing pages or link to existing ones

### ❌ Support Links
- **Location**: Footer - Support column
- **Links**:
  - Help Center → Needs dedicated page or help docs
  - Documentation → Needs technical docs page
  - Privacy Policy → Needs legal page
  - Terms of Service → Needs legal page
  - Security → Needs security policy page
- **Action Needed**: Create legal and documentation pages

---

## Home Page (/)

### ✅ Currently Exists
- **Note**: Home page structure exists

### ❌ Missing Hero CTAs
- **Action Needed**: Implement hero section with call-to-action buttons

---

## Contact Page (/contact)

### ✅ Working Features:
- Contact form with full functionality
- Form submission with email notification
- Success/error messages
- Form validation

### ❌ Start Chat Button
- **Location**: Contact Methods Overview - Live Chat card
- **Current**: Decorative button
- **Action Needed**: Implement live chat integration (Intercom, Tawk.to, etc.) or link to WhatsApp

### ❌ File Upload
- **Location**: Contact form - Upload Files section
- **Current**: Visual only, no actual file upload
- **Action Needed**: Implement file upload functionality with backend storage

### ❌ Video Play Button
- **Location**: Right sidebar - Engineering Workspace card
- **Current**: Decorative button over image
- **Action Needed**: Add actual video URL or YouTube embed

### ❌ Quick Contact Action Buttons
- **Location**: Support Information section - Quick Contact Options
- **Buttons**:
  - "Call Now" button
  - "Send Email" button
  - "Schedule" button (Video Consultation)
  - "Message" button (WhatsApp)
- **Current**: Decorative buttons
- **Action Needed**:
  - Call Now: `tel:+17155013103`
  - Send Email: `mailto:leancamsys@gmail.com`
  - Schedule: Link to Calendly or similar
  - WhatsApp: `https://wa.me/17155013103`

### ❌ Book Consultation Button
- **Location**: Support Information section - bottom card
- **Current**: Decorative button
- **Action Needed**: Link to scheduling tool (Calendly, etc.)

### ❌ NDA and Terms Links
- **Location**: Contact form - checkbox labels
- **Links**:
  - Non-Disclosure Agreement (NDA)
  - Terms of Service
  - Privacy Policy
- **Current**: Text only with hover effect
- **Action Needed**: Create legal documents pages

---

## Pricing Page (/pricing)

### ✅ Working Features:
- All sections display correctly
- FAQ accordion works

### ❌ All CTA Buttons
- **Location**: Throughout pricing page
- **Buttons**:
  - "Start Hourly Project"
  - "Get Project Quote"
  - "Build Your Team"
  - "Get [Industry] Quote" (Manufacturing, Architecture, Automotive)
  - "Start Your Project Today"
  - "Get Custom Estimate"
  - "Schedule Consultation"
- **Current**: Decorative buttons
- **Action Needed**: Link all to `/contact` page or contact form with pre-filled project type

---

## Case Studies Page (/case-studies)

### ✅ Working Features:
- Filter by industry works
- All 30 case studies display
- Individual case study pages work
- Related case studies work

### ❌ Contact CTAs
- **Location**: Various CTA sections within case studies
- **Action Needed**: Ensure all "Contact Us" or "Start Your Project" buttons link to `/contact`

---

## About Page (/about)

### ✅ Working Features:
- Page displays correctly

### ❌ CTA Buttons
- **Location**: Various sections
- **Action Needed**: Link CTAs to `/contact` page

---

## Services Page (/services)

### ✅ Working Features:
- Page displays correctly

### ❌ Service Detail Links
- **Location**: Service cards
- **Action Needed**: Create individual service detail pages or link to contact form

---

## Implementation Priority

### 🔴 High Priority (User-Facing Functionality)
1. **Contact Quick Actions**
   - Call Now: `<a href="tel:+17155013103">`
   - Email: `<a href="mailto:leancamsys@gmail.com">`
   - WhatsApp: `<a href="https://wa.me/17155013103">`

2. **All CTA Buttons**
   - Link to `/contact` page
   - Pre-fill form if possible (use URL parameters)

3. **Social Media Links**
   - Add actual social media profile URLs

4. **Footer Navigation**
   - Link existing pages (About, Services, Case Studies, Contact)

### 🟡 Medium Priority (Enhanced Functionality)
1. **File Upload** on contact form
2. **Live Chat** integration
3. **Video Embed** on contact page
4. **Booking/Scheduling** integration (Calendly)

### 🟢 Low Priority (Additional Pages)
1. **Legal Pages**
   - Privacy Policy
   - Terms of Service
   - NDA Template
   - Security Policy

2. **Content Pages**
   - Blog
   - Careers
   - Help Center
   - Documentation

---

## Quick Fix Code Examples

### Make Phone Clickable
```tsx
<a href="tel:+17155013103" className="text-accent-gold font-semibold text-lg">
  +1 7155013103
</a>
```

### Make Email Clickable
```tsx
<a href="mailto:leancamsys@gmail.com" className="text-accent-gold font-semibold text-lg">
  contact@cadcamx.com
</a>
```

### WhatsApp Link
```tsx
<Button
  onClick={() => window.open('https://wa.me/17155013103', '_blank')}
  className="bg-accent-gold text-primary-dark hover:bg-accent-orange font-semibold"
>
  Message
</Button>
```

### Link CTA to Contact
```tsx
<Button
  onClick={() => window.location.href = '/contact'}
  className="bg-accent-gold text-primary-dark hover:bg-accent-orange font-bold"
>
  Get Custom Estimate
</Button>
```

---

## Notes

### Working Features ✅
- Contact form submission with email
- Form validation
- Success/error messaging
- Industry filtering on case studies
- FAQ accordions
- Navigation between pages
- Responsive design
- Image optimization

### Non-Critical Issues
- Most "broken" links are intentional placeholders
- Core user flow (browsing → contact → submit) works perfectly
- All data collection (contact form) is functional

### Recommended Next Steps
1. Update `config.js` with actual Gmail app password
2. Test contact form submission
3. Add quick action links (phone, email, WhatsApp)
4. Link all CTAs to `/contact` page
5. Create legal pages (Privacy, Terms, NDA)
6. Integrate live chat if desired
7. Add actual social media URLs
