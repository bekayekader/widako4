# Widako Immobilier - Real Estate Platform

## Overview

Widako Immobilier is a modern full-stack real estate application built with React, Express, and TypeScript. The platform allows users to browse, search, and view property listings for both sales and rentals in Morocco. It features a professional UI with shadcn/ui components, comprehensive search functionality, and a robust backend API.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for development and production builds
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (Active)
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development
- **Storage**: DatabaseStorage class implementing full CRUD operations

### Monorepo Structure
The application follows a monorepo pattern with shared types and schemas:
- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared TypeScript schemas and types

## Key Components

### Database Schema (shared/schema.ts)
- **users**: User authentication with username/password
- **properties**: Complete property listings with pricing, location, features
- **contacts**: Contact form submissions from potential clients

Property entities include comprehensive real estate data:
- Basic info (title, description, price, area)
- Location details (city, location)
- Property characteristics (bedrooms, bathrooms, parking)
- Categorization (property type, listing type)
- Media and features (images array, features array)
- Status flags (featured, available)

### API Endpoints
- `GET /api/properties` - List all properties
- `GET /api/properties/featured` - Featured properties
- `GET /api/properties/search` - Search with filters
- `GET /api/properties/:id` - Single property details
- `POST /api/contacts` - Contact form submissions

### Frontend Pages
- **Home** (`/`) - Hero section, featured properties, stats, services, testimonials
- **Properties** (`/properties`) - Property listings with search and filters
- **Property Detail** (`/property/:id`) - Individual property details
- **Services** (`/services`) - Company services and process
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form and company details

### Search and Filtering
Advanced property search with filters for:
- Location and city
- Property type (maison, appartement, villa, studio)
- Listing type (vente, location)
- Price range
- Number of bedrooms
- Featured status

## Data Flow

1. **Property Data**: Properties stored in PostgreSQL database with sample data seeded
2. **Search Flow**: Frontend search forms generate query parameters that filter backend results
3. **State Management**: TanStack Query handles caching, loading states, and data synchronization
4. **Form Handling**: React Hook Form manages form state with Zod schema validation
5. **UI Updates**: Real-time updates through React Query invalidation on mutations
6. **Database Operations**: DatabaseStorage class handles all CRUD operations via Drizzle ORM

## External Dependencies

### Database
- **Drizzle ORM**: Type-safe database queries and migrations
- **Neon Database**: Serverless PostgreSQL hosting
- **connect-pg-simple**: PostgreSQL session storage

### UI/UX
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the stack
- **ESLint/Prettier**: Code formatting and linting
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Development**: `npm run dev` starts both frontend and backend
- **Production Build**: Vite builds frontend, esbuild bundles backend
- **Port Configuration**: Backend on port 5000, mapped to external port 80

### Build Process
1. Frontend builds to `dist/public` via Vite
2. Backend bundles to `dist/index.js` via esbuild
3. Static assets served by Express in production
4. Database migrations handled by Drizzle Kit

### Environment Setup
- PostgreSQL database provisioned automatically
- Environment variables for database connection
- Development/production mode switching

## Changelog
- June 17, 2025: Initial setup with React frontend and Express backend
- June 17, 2025: Added PostgreSQL database with Drizzle ORM
- June 17, 2025: Migrated from MemStorage to DatabaseStorage with sample property data
- June 17, 2025: Integrated authentic Widako logo throughout the application
- June 17, 2025: Added "Biens à Vendre" section with 4 authentic property photos
- June 17, 2025: Updated contact information with Ivorian phone number and new email domain
- June 17, 2025: Converted pricing display to FCFA currency and updated social media handles

## User Preferences

Preferred communication style: Simple, everyday language.