# WebWaka Suite SVM UI

## Overview

WebWaka Suite SVM UI is a Single Vendor Marketplace user interface built with Next.js 14. It serves as a declarative UI consumer of canonical control layers (`webwaka-suite-svm-control` and `webwaka-core-dashboard-control`). The application follows a strict architecture where all visibility, access, and navigation decisions flow through centralized control layer consumption rather than being hardcoded in UI components.

The project is Nigeria-first, meaning all currency formatting uses Nigerian Naira (₦) exclusively - USD formatting is prohibited throughout the codebase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Language**: TypeScript with strict mode enabled
- **Rendering**: Server-side rendering with async page components

### Control Layer Pattern
The core architectural decision is the **single control consumer pattern**:

- **Problem**: UI components need visibility and access decisions, but these shouldn't be scattered across the codebase
- **Solution**: All control layer consumption happens through `src/lib/control-consumer.ts` - the single entry point
- **Benefit**: Centralized control makes it easy to swap stub implementations with real control packages later

Key control functions:
- `resolveDashboard()` - Returns navigation, sections, and permissions
- `evaluateSnapshot()` - Returns dashboard state snapshot
- `formatCurrency()` - Nigerian Naira formatting only
- `getLocale()` - Always returns 'en-NG'

### Component Structure
- `Layout` - Main page wrapper with navigation and footer
- `Navigation` - Renders visible navigation items from control layer
- `SectionContainer` - Conditionally renders sections based on visibility flags

### Determinism Requirement
All control functions must produce identical output for identical input. Tests verify that calling functions 10 times produces the same result each time. Timestamps use a deterministic value (0) rather than real time.

### Testing Setup
- **Framework**: Jest with React Testing Library
- **Focus Areas**: Currency compliance (NGN only, no USD), determinism verification, control consumer behavior
- **Path Mapping**: Uses `@/` alias pointing to `src/`

## External Dependencies

### Core Dependencies
- **Next.js 14.2.35**: React framework with App Router
- **React 18**: UI library
- **Tailwind CSS 3.4**: Utility-first CSS framework

### Control Layer Packages (Integration Points)
These packages are referenced but not yet installed - the current implementation uses stubs:
- `webwaka-suite-svm-control` - SVM-specific control logic
- `webwaka-core-dashboard-control` - Dashboard control logic

### Development Tools
- **TypeScript 5**: Type safety
- **Jest 29**: Testing framework
- **Testing Library**: React component testing
- **ESLint**: Code linting with Next.js configuration

### Configuration Notes
- Development server runs on port 5000 (configured in package.json scripts)
- HTML lang attribute set to `en-NG` for Nigerian locale
- Path aliases configured: `@/*` maps to `./src/*`

## Recent Changes
- 2026-01-21: Phase 2 Constitution-Compliant Implementation
  - Next.js 14 with TypeScript and Tailwind CSS
  - Control-consumer.ts as single integration entry point
  - Deterministic snapshot evaluation (timestamp fixed at 0)
  - 15 passing tests for currency, determinism, and control consumer
  - No placeholder content or hardcoded business logic
  - All permissions default to false pending control layer integration
