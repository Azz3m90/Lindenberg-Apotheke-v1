# Global Loader Documentation

## Overview

The global loader system provides a centralized loading state management for the entire application. It includes a pharmacy-themed spinner with German text and automatic page transition handling.

## Components Created

### 1. `GlobalLoader.tsx`

- Full-screen overlay loader with pharmacy-themed design
- Smooth fade in/out transitions
- Customizable loading text
- Pharmacy cross icon in the center of the spinner

### 2. `GlobalLoaderContext.tsx`

- React context for managing loader state globally
- Provides hooks and methods to control the loader

### 3. `usePageLoader.ts`

- Hook for automatic page transition loading
- Automatically shows/hides loader during Next.js route changes

### 4. `loaderUtils.ts`

- Utility functions for common loading operations
- Pre-defined German loading messages
- `useAsyncOperation` hook for wrapping async functions with loading

## Usage Examples

### Basic Usage

```tsx
import { useGlobalLoader } from "../contexts/GlobalLoaderContext";

function MyComponent() {
  const { showLoader, hideLoader } = useGlobalLoader();

  const handleAction = async () => {
    showLoader("Daten werden geladen...");
    try {
      await someAsyncOperation();
    } finally {
      hideLoader();
    }
  };

  return <button onClick={handleAction}>Load Data</button>;
}
```

### Using the Async Operation Hook

```tsx
import { useAsyncOperation, LOADING_MESSAGES } from "../utils/loaderUtils";

function MyComponent() {
  const { executeWithLoader } = useAsyncOperation();

  const handleAction = async () => {
    try {
      const result = await executeWithLoader(
        () => fetchData(),
        LOADING_MESSAGES.PHARMACY_DATA
      );
      // Handle result
    } catch (error) {
      // Handle error
    }
  };

  return <button onClick={handleAction}>Load Data</button>;
}
```

### Predefined Loading Messages

```tsx
import { LOADING_MESSAGES } from "../utils/loaderUtils";

// Available messages:
LOADING_MESSAGES.PHARMACY_DATA; // "Apotheken-Daten werden geladen..."
LOADING_MESSAGES.EMERGENCY_SERVICE; // "Notdienst-Daten werden geladen..."
LOADING_MESSAGES.LOCATION_DATA; // "Standort-Informationen werden geladen..."
LOADING_MESSAGES.CONTACT_FORM; // "Nachricht wird gesendet..."
LOADING_MESSAGES.PAGE_LOADING; // "Seite wird geladen..."
LOADING_MESSAGES.SEARCH_RESULTS; // "Suchergebnisse werden geladen..."
LOADING_MESSAGES.MAP_DATA; // "Karten-Daten werden geladen..."
LOADING_MESSAGES.DIRECTIONS; // "Route wird berechnet..."
```

## Features

### Automatic Page Transitions

The loader automatically appears during Next.js page transitions when using the Layout component.

### Pharmacy Themed Design

- Custom spinner with pharmacy cross icon
- Professional color scheme matching the site
- German text appropriate for pharmacy context

### Smooth Animations

- Fade in/out transitions
- Animated dots indicator
- Smooth opacity changes

### Anti-Flicker Protection

- Minimum display time to prevent quick flashes
- Delayed hiding to ensure smooth UX

## Integration

The system is already integrated into:

- `_app.tsx` - Global provider and loader component
- `Layout.tsx` - Automatic page transition loading
- `EmergencyPharmacyService.tsx` - Updated to use global loader

## Customization

### Custom Loading Text

```tsx
showLoader("Ihre benutzerdefinierte Nachricht...");
```

### Multiple Operations with Different Messages

```tsx
const operations = [
  { operation: () => fetchPharmacies(), loadingText: "Apotheken laden..." },
  { operation: () => fetchServices(), loadingText: "Services laden..." },
];

await executeMultipleWithLoader(operations);
```

### Updating Text During Operation

```tsx
const { setLoadingText } = useGlobalLoader();

showLoader("Schritt 1...");
await step1();
setLoadingText("Schritt 2...");
await step2();
setLoadingText("Abschluss...");
await finalStep();
hideLoader();
```

## Notes

- The loader uses a high z-index (z-50) to appear above all content
- It's designed to be accessible and provides visual feedback for all loading states
- The pharmacy cross icon reinforces the medical/pharmacy theme
- All text is in German as appropriate for the target audience
