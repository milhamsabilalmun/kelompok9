# Green Box - E-Commerce Web Application

Green Box is a sustainable e-commerce platform that sells plastic-free essentials and products with eco-friendly rewards and zero-plastic delivery.

## Features

- **Landing Page**: Introduction to Green Box with call-to-action
- **Product Catalog**: Browse products by category with search functionality
- **Product Details**: Detailed view with images, description, and packaging info
- **Shopping Cart**: Add/remove items and adjust quantities
- **Checkout**: Complete order with shipping and payment options
- **Order Tracking**: Track zero-plastic delivery status
- **Eco Points**: Reward system with progress tracking and redeemable vouchers
- **User Profile**: Manage account, view order history, and settings

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Build Tool**: Vite

## Color Palette

- Primary: #0B6B3F (dark green for outlines and main text)
- Secondary: #2E8B57 (medium green for buttons)
- Accent/Light Background: #ECF9F2 (mint green for cards and panels)
- Dark Text: #073725 or #143a2b
- White Background: #FFFFFF

## Typography

- Main Font: Poppins (weights 400, 600, 700)
- Large Titles: 28-32px bold
- Subtitles/Labels: 16-20px
- Body Text: 14px

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Project Structure

```
src/
  components/        # React components
  assets/            # Images and static assets
  App.tsx            # Main app component with routing
  main.tsx           # Entry point
  index.css          # Global styles and Tailwind directives
```

## Responsive Design

Mobile-first approach with responsive breakpoints:
- Mobile: Default styles
- Tablet: md: breakpoint
- Desktop: lg: breakpoint

## Components

- **Layout**: Main layout with bottom navigation
- **LandingPage**: Homepage with hero section and features
- **ShopPage**: Product catalog with search and categories
- **ProductDetailPage**: Detailed product view
- **CartPage**: Shopping cart management
- **CheckoutPage**: Order completion flow
- **TrackingPage**: Delivery status tracking
- **EcoPointPage**: Rewards and eco-tips
- **ProfilePage**: User account management

## Development Guidelines

- Use Tailwind utility classes for styling
- Follow the color palette strictly
- Maintain mobile-first responsive design
- Use Indonesian microcopy for all UI elements
- Implement flat, minimal vector illustrations
- Ensure proper spacing with 16px padding and 12-18px gaps