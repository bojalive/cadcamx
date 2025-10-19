# CADCAMX Landing Page

A professional, SEO-optimized landing page for CADCAMX - an offshore CAD/CAM services company. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- ✅ **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS v4
- ✅ **SEO Optimized**: Comprehensive metadata, OpenGraph, and Twitter cards
- ✅ **Responsive Design**: Mobile-first approach with responsive layouts
- ✅ **Component-Based Architecture**: Reusable components with shadcn/ui
- ✅ **Custom Animations**: Floating animations, hover effects, and smooth scrolling
- ✅ **Professional UI**: Dark theme with gold/orange accent colors
- ✅ **Complete Landing Page Sections**:
  - Hero with animated background
  - Trust & Capability highlights
  - Services showcase
  - Project portfolio carousel
  - Security & Workflow features
  - Client testimonials
  - Pricing plans
  - Process steps
  - CTA banners
  - Contact form
  - Footer

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: React Icons (Font Awesome)
- **Font**: Inter (Google Fonts)
- **Build Tool**: Turbopack

## 📦 Project Structure

```
cadcamx-landing/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles & animations
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Navigation header
│   │   └── footer.tsx       # Site footer
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── select.tsx
│       ├── badge.tsx
│       └── separator.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Design Features

### Color Palette
- **Primary Dark**: `#000033` - Main background
- **Accent Gold**: `#FFD700` - Primary accent
- **Accent Orange**: `#FFA500` - Secondary accent

### Custom Animations
- Floating animations for background elements
- Hover scale effects on interactive elements
- Smooth scrolling navigation
- Gradient text effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd cadcamx-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Optimization

The landing page includes:
- Comprehensive metadata (title, description, keywords)
- OpenGraph tags for social media sharing
- Twitter Card support
- Structured data for search engines
- Semantic HTML markup
- Alt text for all images
- Mobile-friendly viewport settings

## 🎯 Performance

- **Static Generation**: Pre-rendered for optimal performance
- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component for optimized images
- **Font Optimization**: Google Fonts with next/font
- **CSS Optimization**: Tailwind CSS v4 with minimal bundle size

## 📝 Customization

### Updating Colors
Edit `app/globals.css`:
```css
@theme inline {
  --color-primary-dark: #000033;
  --color-accent-gold: #FFD700;
  --color-accent-orange: #FFA500;
}
```

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and use in `app/page.tsx`
3. Add navigation link in `components/layout/header.tsx`

### Modifying SEO
Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ...
};
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 📄 License

Copyright © 2024 CADCAMX. All rights reserved.

## 🤝 Contributing

This is a commercial project. Please contact the team for contribution guidelines.

## 📧 Support

For support, email: support@cadcamx.com

---

Built with ❤️ using Next.js, TypeScript, and shadcn/ui
