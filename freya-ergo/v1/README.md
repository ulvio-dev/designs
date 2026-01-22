# Freya Products - React Application

A comprehensive multilingual (NL/EN) React application for Freya's occupational therapy platform, supporting multiple user flows.

## Features

- **Multi-language Support**: Switch between Dutch (NL) and English (EN) seamlessly
- **Multiple User Flows**:
  - Patient Flow (landing, chat start, chat)
  - Professional Demo Flow (landing, login, chat start, chat, report)
  - Professional Logged-in Flow (same pages, different context)
- **Settings Modal**: Easy access to language switching and route navigation
- **Reusable Components**: Navbar, Footer, modals, and more
- **Client-side Routing**: Hash-based routing for SPA experience

## Getting Started

Simply open `app.html` in your browser. No build process required!

```bash
# Open the application
open app.html
```

## Project Structure

```
react/
├── app.html                    # Main entry point with routing
├── index.html                  # Legacy entry point (original patient flow)
├── styles.css                  # Global styles and animations
├── translations.js             # NL/EN translations
├── components/
│   ├── Navbar.js              # Navigation bar component
│   ├── Footer.js              # Footer component
│   ├── SettingsButton.js      # Floating settings button
│   └── SettingsModal.js       # Settings popup modal
├── pages/
│   ├── PatientLanding.js      # Patient flow landing page
│   └── ProLanding.js          # Professional flow landing page
├── Patient.js                  # Legacy patient landing
├── PatientChatStart.js        # Patient chat start (reused across flows)
└── PatientChat.js             # Patient chat interface (reused across flows)
```

## Available Routes

### Patient Flow
- `#patient` - Patient landing page
- `#patient-chat-start` - Start patient conversation
- `#patient-chat` - Patient chat interface

### Professional Demo Flow
- `#pro` - Professional landing page
- `#pro-login` - Professional login (demo)
- `#pro-chat-start` - Start professional intake
- `#pro-chat` - Professional chat interface
- `#pro-report` - View generated report

### Professional Logged-in Flow
- `#pro-logged-in` - Professional landing (logged in)
- `#pro-logged-in-login` - Professional login
- `#pro-logged-in-chat-start` - Start intake (logged in)
- `#pro-logged-in-chat` - Chat interface (logged in)
- `#pro-logged-in-report` - View report (logged in)

## Using the Settings Modal

Click the settings icon (⚙️) in the bottom-right corner to:
- Switch between NL and EN languages
- Navigate to any route in the application
- View all available flows

## Localization

All text content is stored in `translations.js` with the following structure:

```javascript
const translations = {
  nl: {
    nav_professional: "Ik ben een professional",
    // ... more Dutch translations
  },
  en: {
    nav_professional: "I am a professional",
    // ... more English translations
  }
};
```

To add new translations:
1. Add the key-value pair to both `nl` and `en` objects
2. Use `t('key')` in your components to access the translation

## Customization

### Adding a New Route
1. Add the route case in `app.html` inside `renderComponent()`
2. Create the corresponding page component
3. Add the route to the settings modal route list

### Styling
- Global styles: Edit `styles.css`
- Component styles: Use Tailwind CSS classes
- Theme colors:
  - Primary: `#90A40A` (olive green)
  - Secondary: `#7F601B` (brown)
  - Accent: `#262626` (dark gray)

## Technologies

- React 18 (via CDN)
- Tailwind CSS (via CDN)
- Iconify (via CDN)
- Babel Standalone (for JSX transformation)

## Browser Support

Works in all modern browsers that support ES6 and React 18.

## Notes

- Language preference is saved in localStorage
- No server or build process required
- All routing is client-side using URL hash
- Professional flow pages use simplified placeholders (can be expanded)
