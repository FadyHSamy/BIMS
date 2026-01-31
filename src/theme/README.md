# Theme & Color Management Guide

This guide explains how to manage colors and styling in the application using the new theming system.

## 📁 File Structure

```
src/theme/
├── _colors.scss          # Base color definitions
├── _mixins.scss          # SCSS mixins and helper functions
├── _components.scss      # Global component styles
├── variables.scss        # Main theme file (generates CSS variables)
└── README.md            # This file
```

## 🎨 How to Change Component Colors

### Quick Start: Changing a Color

1. **Open** `src/theme/_colors.scss`
2. **Find** the color variable you want to change (e.g., `$color-primary`)
3. **Update** the hex value
4. **Save** - All Ionic color variables will be automatically regenerated!

### Example: Change Primary Color

```scss
// In src/theme/_colors.scss
// Before:
$color-primary: #0054e9;

// After:
$color-primary: #ff5722;  // New orange color
```

That's it! The entire application will now use the new primary color.

---

## 📋 Available Color Variables

### Primary Colors
- `$color-primary` - Main brand color
- `$color-secondary` - Secondary brand color
- `$color-tertiary` - Tertiary brand color

### Semantic Colors
- `$color-success` - Success states (green)
- `$color-warning` - Warning states (yellow/orange)
- `$color-danger` - Error/danger states (red)

### Neutral Colors
- `$color-light` - Light background/text
- `$color-medium` - Medium gray
- `$color-dark` - Dark text/background

### Background Colors
- `$color-background` - Main app background
- `$color-background-components` - Component background

---

## 🔧 Advanced: Custom Color Workflow

### Step 1: Define Base Color

Edit `src/theme/_colors.scss`:

```scss
// Add your new color
$color-brand: #8b5cf6;  // Purple brand color
```

### Step 2: Add to Theme Variables

Edit `src/theme/variables.scss`:

```scss
:root {
  // ... existing colors ...
  
  // Add your custom color
  @include ionic-color('brand', $color-brand);
}
```

### Step 3: Use in Components

Now you can use it anywhere:

**In HTML:**
```html
<ion-button color="brand">Click Me</ion-button>
```

**In SCSS:**
```scss
.my-component {
  background-color: var(--ion-color-brand);
  color: var(--ion-color-brand-contrast);
}
```

---

## 🎯 Component-Specific Styling

### Global Component Styles

Edit `src/theme/_components.scss` to customize Ionic components globally:

```scss
// Customize all buttons
ion-button {
  --border-radius: 12px;
  font-weight: 600;
}

// Customize all inputs
ion-input {
  --padding-start: 16px;
  --padding-end: 16px;
  --border-radius: 8px;
}
```

### Component-Level Styles

For component-specific styles, edit the component's `.scss` file:

```scss
// src/app/features/my-feature/my-component.component.scss
:host {
  .custom-element {
    background-color: var(--ion-color-primary);
    color: var(--ion-color-primary-contrast);
  }
}
```

---

## 🌓 Dark Mode Support

Dark mode is automatically handled by Ionic. The color system generates appropriate contrast colors for both light and dark themes.

To toggle dark mode programmatically:

```typescript
// Add/remove the 'ion-palette-dark' class
document.documentElement.classList.toggle('ion-palette-dark', isDark);
```

---

## 📐 Helper Functions

The theming system includes helper functions in `_colors.scss`:

### `hex-to-rgb($hex)`
Converts hex color to RGB values:
```scss
$rgb: hex-to-rgb(#0054e9);  // Returns: "0, 84, 233"
```

### `shade($color, $percent)`
Creates a darker version:
```scss
$darker: shade(#0054e9, 15%);  // 15% darker
```

### `tint($color, $percent)`
Creates a lighter version:
```scss
$lighter: tint(#0054e9, 15%);  // 15% lighter
```

### `contrast-color($color)`
Determines best text color (black/white):
```scss
$text-color: contrast-color(#0054e9);  // Returns: #ffffff
```

---

## 🎨 Color Workflow Examples

### Example 1: Change Primary Color to Blue

1. Open `src/theme/_colors.scss`
2. Change: `$color-primary: #0054e9;` → `$color-primary: #2196F3;`
3. Save - Done! ✅

### Example 2: Add a New Custom Color

1. **Add to `_colors.scss`:**
   ```scss
   $color-accent: #ff6b6b;
   ```

2. **Add to `variables.scss`:**
   ```scss
   @include ionic-color('accent', $color-accent);
   ```

3. **Use in components:**
   ```html
   <ion-button color="accent">Accent Button</ion-button>
   ```

### Example 3: Customize Card Styling

1. Open `src/theme/_components.scss`
2. Modify the `ion-card` styles:
   ```scss
   ion-card {
     border-radius: 16px;  // Change from 10px
     box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);  // Stronger shadow
   }
   ```

---

## 🔍 Using Colors in TypeScript/Components

### Access CSS Variables in TypeScript

```typescript
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({...})
export class MyComponent {
  @ViewChild('myElement') element!: ElementRef;
  
  ngAfterViewInit() {
    const primaryColor = getComputedStyle(
      this.element.nativeElement
    ).getPropertyValue('--ion-color-primary');
    console.log('Primary color:', primaryColor);
  }
}
```

### Dynamic Color Changes

```typescript
// Change color dynamically
document.documentElement.style.setProperty('--ion-color-primary', '#ff0000');
```

---

## ✅ Best Practices

1. **Always use CSS variables** - Never hardcode colors in components
   ```scss
   // ✅ Good
   color: var(--ion-color-primary);
   
   // ❌ Bad
   color: #0054e9;
   ```

2. **Use semantic color names** - Makes code more maintainable
   ```scss
   // ✅ Good
   background: var(--ion-color-success);
   
   // ❌ Bad
   background: #2dd55b;
   ```

3. **Modify base colors only** - Don't edit generated CSS variables
   ```scss
   // ✅ Good - Edit this
   $color-primary: #0054e9;
   
   // ❌ Bad - Don't edit generated variables
   --ion-color-primary: #0054e9;
   ```

4. **Keep component styles separate** - Global styles in `_components.scss`, component-specific in component files

---

## 🐛 Troubleshooting

### Colors not updating?
- Clear browser cache
- Restart the development server
- Check for SCSS compilation errors

### Dark mode not working?
- Ensure `dark.class.css` is imported in `global.scss`
- Check that the `ion-palette-dark` class is being toggled

### Custom color not appearing?
- Verify the color is added to `variables.scss` with `@include ionic-color()`
- Check that you're using the correct color name in components

---

## 📚 Additional Resources

- [Ionic Theming Documentation](https://ionicframework.com/docs/theming)
- [Ionic Color Generator](https://ionicframework.com/docs/theming/colors#new-color-creator)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

