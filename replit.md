# TechFoundry Portfolio Website

## Overview

TechFoundry is a modern portfolio website for Rodney Nedlose, a Technical Engineer based in Madison, WI. The application showcases professional services, portfolio projects, and provides a contact form for potential clients. Built as a full-stack web application using React frontend with Express backend, featuring a clean, professional design with TechFoundry branding.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom TechFoundry brand colors
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API endpoints
- **Development**: Hot reload with tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Design System
- **Brand Colors**: Deep navy, steel gray, off-white, accent teal, and accent orange
- **Typography**: Montserrat for headings, Inter for body text
- **Components**: Consistent design system using Shadcn/ui
- **Responsive**: Mobile-first responsive design
- **Animations**: CSS animations with floating elements and smooth scrolling

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Landing area with TechFoundry branding and call-to-action
- **About Section**: Professional background with circuit board visual elements
- **Portfolio Section**: Showcase of key projects with technology stacks
- **Services Section**: Four main service offerings with icons and descriptions
- **Contact Section**: Form with validation and email notification
- **Footer**: Simple footer with branding and copyright

### Backend Endpoints
- `POST /api/contact`: Submit contact form with validation and email notification
- `GET /api/contacts`: Retrieve all contact submissions (admin functionality)

### Shared Schema
- **Contact Model**: Name, email, message with timestamps
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form validation using Zod schema
3. POST request to `/api/contact` endpoint
4. Backend validates data and stores in memory storage
5. SendGrid email notification sent to business email
6. Success/error response returned to frontend
7. Toast notification displayed to user

### Data Storage
- **Current**: In-memory storage using Map for contact submissions
- **Database Ready**: Drizzle ORM configured for PostgreSQL migration
- **Schema**: Shared TypeScript types between frontend and backend

## External Dependencies

### Email Service
- **SendGrid**: Email delivery service for contact form notifications
- **Configuration**: Requires SENDGRID_API_KEY environment variable
- **Sender**: Uses verified sender email for deliverability

### UI Libraries
- **Radix UI**: Headless UI primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants
- **Tailwind Merge**: Utility for merging Tailwind classes

### Development Tools
- **Drizzle Kit**: Database schema management and migrations
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild bundles server code to `dist/index.js`
3. Static assets served from built frontend

### Environment Configuration
- **Development**: `npm run dev` - runs with tsx and hot reload
- **Production**: `npm run build && npm run start`
- **Database**: Drizzle configured for PostgreSQL with `DATABASE_URL`

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (when migrating from memory storage)
- SendGrid API key for email functionality
- Environment variables for configuration

## Changelog
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.