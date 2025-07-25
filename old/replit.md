# Rajesh S Portfolio Website

## Overview

This is a professional portfolio website for Rajesh S, a Results-Driven Data Analyst with 4.5 years of operations experience and expertise in Python, SQL, and Power BI. The application is built as a modern full-stack web application with a React frontend, Express.js backend, and PostgreSQL database integration.

## Recent Changes (Updated January 2025)

- Updated professional title from "Data Analytics Professional" to "Results-Driven Data Analyst" 
- Increased experience from 3+ to 4.5+ years
- Changed Data Analytics course status from "In Progress" to "Completed"
- Added GitHub and LeetCode profile links throughout the site
- Updated project portfolio to include actual projects from resume:
  - Warehouse Operational Efficiency & BI Dashboard (Bosch)
  - Strategic Sales & Profitability Analyzer
  - Macro Economic Analysis
- Enhanced technical skills to reflect current expertise level
- Updated experience dates and descriptions to match current resume

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints for contact form submissions
- **Middleware**: Express middleware for request logging and error handling

### Database Architecture
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Interface**: Abstracted storage layer supporting both database and in-memory implementations

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation with smooth scrolling to sections
2. **Hero Section**: Landing area with call-to-action buttons
3. **About Section**: Professional journey and core strengths
4. **Skills Section**: Animated skill bars with categories (Data Analysis, Operations, Technical)
5. **Experience Section**: Career timeline with achievements
6. **Education Section**: Academic background and certifications
7. **Portfolio Section**: Project showcase with metrics and technologies
8. **Contact Section**: Interactive contact form with validation
9. **Footer**: Social links and contact information

### Backend Components
1. **Route Handlers**: Contact form submission and retrieval endpoints
2. **Storage Layer**: Abstracted interface supporting multiple storage backends
3. **Schema Validation**: Zod schemas for request/response validation
4. **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Submissions Table**: Form submissions (id, firstName, lastName, email, company, subject, message, createdAt)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in frontend
   - Form data validated using react-hook-form with Zod resolvers
   - POST request sent to `/api/contact` endpoint
   - Backend validates data using Zod schema
   - Data stored in PostgreSQL via Drizzle ORM
   - Success/error response sent back to frontend
   - Toast notification displayed to user

2. **Static Content Rendering**:
   - Portfolio content is statically defined in React components
   - No dynamic fetching required for main portfolio sections
   - Smooth scrolling navigation between sections

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript
- **Component Library**: Radix UI primitives with Shadcn/UI wrapper
- **Styling**: Tailwind CSS with PostCSS
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React icons
- **Date Handling**: date-fns library

### Backend Dependencies
- **Web Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with @neondatabase/serverless driver
- **ORM**: Drizzle ORM with Zod integration
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL session store

### Development Dependencies
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development Tools**: TSX for TypeScript execution, ESBuild for production builds

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR (Hot Module Replacement)
- **Backend**: TSX for direct TypeScript execution
- **Database**: Environment variable configuration for DATABASE_URL
- **Replit Integration**: Specialized plugins for Replit development environment

### Production Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles TypeScript server to `dist/index.js`
3. **Database Migrations**: Drizzle Kit handles schema deployment
4. **Static Serving**: Express serves built frontend assets in production

### Environment Configuration
- **Development**: NODE_ENV=development with Vite middleware
- **Production**: NODE_ENV=production with static file serving
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Session Management**: PostgreSQL-backed sessions for scalability

### Key Architectural Decisions

1. **Database Choice**: PostgreSQL chosen for reliability and Drizzle ORM compatibility
2. **Storage Abstraction**: Interface-based storage layer allows for easy testing and future database changes
3. **Type Safety**: Full TypeScript coverage with shared schemas between frontend and backend
4. **Component Architecture**: Modular React components with clear separation of concerns
5. **Form Handling**: React Hook Form for performance with Zod for type-safe validation
6. **Styling Strategy**: Tailwind CSS with CSS variables for consistent theming
7. **State Management**: TanStack Query for server state, local state for UI interactions