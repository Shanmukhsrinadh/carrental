# Padma Priya - Car Rental & Driver Service

## Overview
A modern React web application for a car rental and driver service business based in Visakhapatnam, India. Provides a landing page showcasing vehicle categories, featured cars, services, and contact information with WhatsApp-based booking.

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Package Manager**: npm

## Project Structure
```
├── public/           # Static assets (icons, favicon)
├── src/
│   ├── assets/       # Images (hero.png, logos)
│   ├── components/   # Reusable UI components (Navbar, VehicleCard, WhatsAppButton)
│   ├── sections/     # Page sections (Hero, Contact, Featured sections)
│   ├── App.jsx       # Main application component
│   ├── index.css     # Global styles & Tailwind directives
│   └── main.jsx      # Application entry point
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
└── package.json      # Project metadata and dependencies
```

## Development
- Run: `npm run dev` (starts on port 5000)
- Build: `npm run build`
- Lint: `npm run lint`

## Deployment
- Deployment type: Static site
- Build command: `npm run build`
- Output directory: `dist`

## Key Features
- Vehicle showcase with categories (Hatchback, Sedan, SUV, etc.)
- WhatsApp-based booking system
- Testimonials, Gallery, and "Why Choose Us" sections
- Interactive UI with animations via Framer Motion
