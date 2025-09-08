# BIMS Frontend Project Structure

This document provides a comprehensive overview of the BIMS (Business Information Management System) Frontend project structure, including all folders and files.

## Root Directory
```
BIMS/
├── angular.json                    # Angular CLI configuration
├── dist/                          # Build output directory
│   └── BIMS/
│       └── browser/               # Browser build artifacts (empty)
├── node_modules/                  # Node.js dependencies
├── package-lock.json              # NPM lock file
├── package.json                   # Project dependencies and scripts
├── public/                        # Public assets
│   └── favicon.ico               # Website favicon
├── README.md                      # Project documentation
├── src/                          # Source code directory
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.app.json             # TypeScript config for app
├── tsconfig.json                 # Main TypeScript configuration
└── tsconfig.spec.json            # TypeScript config for tests
```

## Source Code Structure (`src/`)

### Main Application Files
```
src/
├── index.html                     # Main HTML entry point
├── main.ts                       # Application bootstrap
├── styles.scss                   # Global styles
└── app/                          # Application source code
```

### Application Core (`src/app/`)

#### Root Application Files
```
app/
├── app.config.ts                 # Application configuration
├── app.html                      # Root component template
├── app.routes.ts                 # Application routing
├── app.scss                      # Root component styles
├── app.spec.ts                   # Root component tests
├── app.ts                        # Root component
└── state/                        # Global state management
    ├── effects.ts                # Global effects
    ├── reducers.ts               # Global reducers
    └── states.ts                 # State definitions
```

#### Core Module (`src/app/core/`)
```
core/
├── core.module.ts                # Core module definition
├── guards/                       # Route guards (empty)
├── interceptors/                 # HTTP interceptors
│   ├── api-response.interceptor.ts
│   ├── base-url.interceptor.ts
│   ├── http-loader.interceptor.ts
│   └── index.ts                  # Interceptors barrel export
├── layout/                       # Layout components
│   ├── base/                     # Base layout component
│   │   ├── base.component.html
│   │   ├── base.component.scss
│   │   ├── base.component.spec.ts
│   │   └── base.component.ts
│   ├── sidebar/                  # Sidebar component
│   │   ├── sidebar.component.html
│   │   ├── sidebar.component.scss
│   │   ├── sidebar.component.spec.ts
│   │   └── sidebar.component.ts
│   └── state/                    # Layout state management
│       ├── layout.actions.ts
│       ├── layout.models.ts
│       ├── layout.reducer.ts
│       └── layout.selectors.ts
├── models/                       # Core models
│   └── api-response.model.ts
└── services/                     # Core services
    └── categories.service.ts
```

#### Features Module (`src/app/features/`)

##### Categories Feature
```
features/
└── categories/
    ├── categories-routing.module.ts
    ├── categories.module.ts
    ├── components/               # Feature components
    │   └── categories-list/
    │       ├── categories-list.component.html
    │       ├── categories-list.component.scss
    │       ├── categories-list.component.spec.ts
    │       └── categories-list.component.ts
    ├── models/                   # Feature models
    │   └── categories/
    │       └── get-categories.model.ts
    ├── pages/                    # Feature pages
    │   ├── categories-page/
    │   │   ├── categories-page.component.html
    │   │   ├── categories-page.component.scss
    │   │   ├── categories-page.component.spec.ts
    │   │   └── categories-page.component.ts
    │   ├── category-add-page/
    │   │   ├── category-add-page.component.html
    │   │   ├── category-add-page.component.scss
    │   │   ├── category-add-page.component.spec.ts
    │   │   └── category-add-page.component.ts
    │   └── category-edit-page/
    │       ├── category-edit-page.component.html
    │       ├── category-edit-page.component.scss
    │       ├── category-edit-page.component.spec.ts
    │       └── category-edit-page.component.ts
    └── state/                    # Feature state management
        ├── categories.actions.ts
        ├── categories.effects.ts
        ├── categories.reducer.ts
        └── categories.selectors.ts
```

##### Errors Feature
```
features/
└── errors/
    ├── models/
    │   ├── errors-state.model.ts
    │   └── set-error.model.ts
    └── state/
        ├── errors.actions.ts
        ├── errors.reducer.ts
        └── errors.selectors.ts
```

##### Settings Feature
```
features/
└── settings/
    ├── models/                   # Settings models (empty)
    └── state/
        ├── settings.actions.ts
        ├── settings.reducer.ts
        └── settings.selectors.ts
```

#### Shared Module (`src/app/shared/`)
```
shared/
├── shared.module.ts              # Shared module definition
├── components/                   # Shared components
│   └── loader/
│       ├── loader.component.html
│       ├── loader.component.scss
│       ├── loader.component.spec.ts
│       └── loader.component.ts
└── pipes/                        # Shared pipes (empty)
```

### Assets (`src/assets/`)
```
assets/
├── i18n/                         # Internationalization files (empty)
└── icons/                        # Icon assets
    ├── layer_24.png
    └── layer_24.svg
```

### Styles (`src/styles/`)
```
styles/
├── _dark-theme.scss              # Dark theme styles
└── _light-theme.scss             # Light theme styles
```

## Project Architecture Summary

### Technology Stack
- **Framework**: Angular (standalone components)
- **Styling**: SCSS + Tailwind CSS
- **State Management**: NgRx (Actions, Reducers, Effects, Selectors)
- **Build Tool**: Angular CLI
- **Package Manager**: NPM

### Architecture Patterns
- **Feature-based Architecture**: Code organized by business features
- **Layered Architecture**: Core, Features, and Shared layers
- **State Management**: Centralized state with NgRx
- **Component-based**: Reusable components with clear separation of concerns

### Key Directories
- **`core/`**: Application-wide services, guards, interceptors, and layout
- **`features/`**: Business feature modules (categories, errors, settings)
- **`shared/`**: Reusable components and utilities
- **`state/`**: Global and feature-specific state management
- **`assets/`**: Static assets (icons, i18n files)

### File Naming Conventions
- **Components**: `component-name.component.*`
- **Services**: `service-name.service.ts`
- **Models**: `model-name.model.ts`
- **Actions**: `feature.actions.ts`
- **Reducers**: `feature.reducer.ts`
- **Effects**: `feature.effects.ts`
- **Selectors**: `feature.selectors.ts`

This structure follows Angular best practices and provides a scalable foundation for a business information management system.

