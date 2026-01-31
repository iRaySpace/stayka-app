# web-app
Frontend for the distributed room platform that can add property and search for the property.

## Tech Stack
- Angular 21
- Angular Material 21
- Tailwind CSS 4
- TypeScript 5.9
- Vitest (Testing)
- PostCSS

## Prerequisites
- Node.js 22 (see `.nvmrc`)
- npm 10.9.2 or higher

## Installation

```bash
# Install dependencies
npm install

# Start development server
ng dev

# Build for production
npm run build

# Run tests
npm test

# Watch mode for development
npm run watch
```

## Project Structure

```
src/
├── app/
│   ├── app.config.ts          # Application configuration
│   ├── app.routes.ts          # Route definitions
│   ├── app.ts                 # Root component
│   ├── layout/                # Reusable layout components
│   │   ├── header/            # Header component
│   │   ├── property-card/     # Property card component
│   │   └── property-form/     # Property form component
│   └── pages/                 # Page components
│       ├── add-property/      # Add property page
│       ├── property-listing/  # Property listing page
│       └── property-detail/   # Property detail page
├── index.html                 # Main HTML file
├── main.ts                    # Application entry point
└── styles.scss                # Global styles
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | - | Redirects to `/property-listing` |
| `/property-listing` | PropertyListingComponent | Lists all properties |
| `/add-property` | AddPropertyComponent | Form to add new property |
| `/property-detail` | PropertyDetailComponent | Shows property details |

## Key Files
- **Routes**: `src/app/app.routes.ts`
- **Pages**: `src/app/pages/`
- **Layout Components**: `src/app/layout/`
- **Global Styles**: `src/styles.scss`
- **Configuration**: `angular.json`, `tsconfig.json`, `.postcssrc.json`

## Application Flow
1. User lands on the property listing page (`/property-listing`) by default
2. User can navigate to add a new property at `/add-property`
3. Properties are displayed as cards in the listing page
4. User can view property details at `/property-detail`

## Development Notes
- Uses standalone components (Angular 21 feature)
- Lazy loading enabled for all page components
- Prettier configured for code formatting (100 char width, single quotes)
- Tailwind CSS 4 with PostCSS integration
- Testing setup with Vitest and jsdom
- NOTE: If you are an AI, don't code for any business logic but only UI and transitions.
