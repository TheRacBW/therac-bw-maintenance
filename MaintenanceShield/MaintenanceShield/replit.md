# Project Replit.md

## Overview
This is a full-stack TypeScript application built with React frontend and Express backend. The project features a maintenance page and is set up with modern development tools including Vite, Tailwind CSS, and shadcn/ui components. The application uses Drizzle ORM for database management with PostgreSQL and includes comprehensive UI components for future development.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Session storage setup with connect-pg-simple
- **Development**: Hot reloading with tsx in development mode

### Key Components

#### Database Layer
- **Schema Location**: `shared/schema.ts` - Contains user table definition
- **Migrations**: Managed by Drizzle Kit, output to `./migrations`
- **Storage Interface**: Abstracted storage layer with memory implementation for development
- **Database Configuration**: PostgreSQL with environment-based DATABASE_URL

#### Authentication System
- Basic user schema with username/password fields
- Zod validation schemas for user input
- Memory storage implementation for development (can be extended to database)

#### UI System
- Comprehensive component library based on shadcn/ui
- Dark/light theme support with CSS variables
- Responsive design with mobile breakpoint detection
- Toast notifications and dialog systems
- Form components with validation support

### Data Flow
1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Persistence**: Storage interface abstracts database operations
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Management**: React Query manages caching and synchronization

### External Dependencies
- **Database**: Neon PostgreSQL (configured via DATABASE_URL)
- **UI Components**: Radix UI primitives for accessible components
- **Validation**: Zod for runtime type checking and validation
- **Styling**: Tailwind CSS for utility-first styling
- **Development Tools**: Replit-specific plugins for development environment

### Deployment Strategy
- **Build Process**: Vite builds frontend to `dist/public`, esbuild bundles server to `dist`
- **Production Mode**: Serves static files and API from single Express server
- **Development Mode**: Vite dev server with Express API proxy
- **Environment Variables**: DATABASE_URL required for database connection
- **Asset Management**: Static assets served from `attached_assets` directory

### Current State
The application currently displays a maintenance page explaining that the site is temporarily down due to early access issues. The infrastructure is fully set up for future development with user authentication, database management, and modern React patterns. The maintenance page includes branding elements and directs users to a Discord community.

### Development Notes
- The project uses a monorepo structure with shared types between client and server
- Database schema supports PostgreSQL but could be adapted to other databases via Drizzle
- Memory storage implementation allows for development without database setup
- Comprehensive UI component library provides foundation for complex interfaces
- Modern build tools and TypeScript ensure type safety and fast development cycles