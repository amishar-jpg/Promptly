# Promptly – The AI Writing Assistant 🚀

A visually striking SaaS landing page showcasing an AI-powered writing assistant. Built with modern web technologies and featuring stunning animations, glassmorphism effects, and responsive design.

## ✨ Features

- **Modern UI/UX Design** - Clean, professional design with gradient backgrounds and glassmorphism effects
- **Smooth Animations** - Framer Motion powered animations throughout the page
- **Responsive Layout** - Mobile-first design that works perfectly on all devices
- **Dark Mode** - Built-in dark mode with smooth transitions
- **Interactive Components** - Hover effects, floating elements, and animated cards
- **Pricing Toggle** - Smooth monthly/yearly pricing switch with savings display
- **Testimonial Carousel** - Auto-scrolling testimonials with manual controls

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **PostCSS** - CSS processing

## 📦 Installation

1. Clone or navigate to the project directory:
```bash
cd promptly
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🏗️ Project Structure

```
promptly/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── PricingCard.jsx
│   │   └── TestimonialCard.jsx
│   ├── sections/          # Main page sections
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── data/              # Content data
│   │   └── content.js
│   ├── styles/            # Custom styles
│   │   ├── index.css
│   │   └── animations.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Design Features

### Color Palette
- **Primary Teal**: #00BFA6
- **Primary Purple**: #6C63FF
- **Gradient**: Teal to Purple diagonal background

### Typography
- **Headings**: Poppins (bold, modern)
- **Body**: Inter (light and readable)

### Visual Effects
- Glassmorphism cards with backdrop blur
- Floating glowing blobs animation
- Gradient button hover states with glow
- Smooth scroll animations
- Pulse animations on CTA buttons

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Key Sections

1. **Navbar** - Sticky navigation with glass effect when scrolled
2. **Hero** - Eye-catching headline with animated floating icons
3. **Features** - Grid of feature cards with hover animations
4. **Pricing** - Three-tier pricing with monthly/yearly toggle
5. **Testimonials** - Auto-scrolling carousel with user reviews
6. **CTA** - Final call-to-action with animated gradient background
7. **Footer** - Links and social media icons

## 🎯 Customization

To customize the content, edit the files in `src/data/content.js`:
- Features list
- Pricing plans
- Testimonials

To modify colors, update `tailwind.config.js` theme configuration.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (full layout with animations)

## 🚀 Performance

- Optimized bundle size with Vite
- Lazy loading animations with viewport detection
- Efficient CSS with Tailwind purging
- Fast page loads and smooth transitions

## 📝 License

ISC

---

Built with ❤️ following modern web development best practices
