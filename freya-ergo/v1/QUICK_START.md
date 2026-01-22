# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Open the Application
```bash
# Navigate to the react folder
cd freya-products/react

# Open app.html in your browser
open app.html
# or double-click app.html in your file manager
```

### 2. Try the Settings Feature
1. Look for the **⚙️ settings icon** in the **bottom-right corner**
2. Click it to open the settings modal
3. Try switching between **NL** and **EN** languages
4. Browse all available routes organized by flow

### 3. Explore Different Flows
Navigate through the application:

**Patient Flow (for end users):**
- Start at: `#patient`
- Path: Landing → Chat Start → Chat

**Professional Flow (for therapists):**
- Start at: `#pro`
- Path: Landing → Login → Chat Start → Chat → Report

## 🎨 What You'll See

### Landing Pages
- **Patient Landing**: Hero section with trust badges, features, and CTA
- **Professional Landing**: Professional hero with social proof and demo CTA

### Settings Modal
- **Language Selector**: Toggle between NL/EN
- **Route Navigator**: Jump to any page, organized by flow:
  - Patient Flow
  - Pro Demo Flow
  - Pro Logged In Flow

### Floating Settings Button
- Always visible in bottom-right corner
- Green circular button with gear icon
- Smooth hover animation

## 📱 Features to Try

### Language Switching
1. Click settings (⚙️)
2. Click "English" or "Nederlands"
3. Watch all text update instantly
4. Refresh page - language preference is saved!

### Route Navigation
1. Click settings (⚙️)
2. Scroll to "Navigation" section
3. Click any route to jump there instantly
4. Modal closes automatically

### Flow Exploration
1. Start at patient landing (`#patient`)
2. Click "Start gesprek" / "Start conversation"
3. Navigate through chat start → chat
4. Use settings to jump to professional flow
5. Explore professional landing → login → chat → report

## 🎯 Key Routes at a Glance

| Route | NL Description | EN Description |
|-------|----------------|----------------|
| `#patient` | Patiënt startpagina | Patient landing |
| `#patient-chat-start` | Begin gesprek | Start conversation |
| `#patient-chat` | Chat interface | Chat interface |
| `#pro` | Professional startpagina | Professional landing |
| `#pro-login` | Inloggen | Login |
| `#pro-chat-start` | Start intake | Start intake |
| `#pro-chat` | Chat gesprek | Chat conversation |
| `#pro-report` | Rapport bekijken | View report |

## 💡 Tips

- **Language persists**: Your language choice is saved in browser storage
- **Use the settings**: Fastest way to navigate between flows
- **Hash navigation**: You can manually type routes in URL (e.g., `app.html#pro`)
- **No server needed**: Everything runs in the browser
- **Mobile responsive**: Try it on different screen sizes

## 🔧 Customization Quick Tips

### Change Theme Colors
Edit Tailwind classes in components:
- Primary green: `bg-[#90A40A]`
- Brown accent: `text-[#7F601B]`
- Dark text: `text-[#262626]`

### Add New Translation
In `translations.js`:
```javascript
nl: {
  my_new_key: "Mijn Nederlandse tekst"
},
en: {
  my_new_key: "My English text"
}
```

Use in component:
```javascript
<p>{t('my_new_key')}</p>
```

### Add New Route
In `app.html`, inside `renderComponent()`:
```javascript
if (currentRoute === 'my-route') return <MyComponent t={t} />;
```

## 📂 File Structure at a Glance

```
react/
├── app.html              ← 🎯 START HERE
├── translations.js       ← 🌍 All translations
├── components/           ← 🧩 Reusable components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── SettingsButton.js
│   └── SettingsModal.js
└── pages/                ← 📄 Page components
    ├── PatientLanding.js
    └── ProLanding.js
```

## ❓ Common Questions

**Q: How do I change the language?**
A: Click the settings icon (⚙️) in bottom-right, then choose NL or EN.

**Q: How do I see all available pages?**
A: Open settings (⚙️) and scroll to the "Navigation" section.

**Q: Can I bookmark a specific page?**
A: Yes! The URL hash will be saved (e.g., `app.html#pro-chat`).

**Q: Will my language choice persist?**
A: Yes, it's saved in browser localStorage.

**Q: Do I need a server?**
A: No! Just open the HTML file in your browser.

## 🎉 You're Ready!

Open `app.html` and start exploring. The settings modal is your friend for quick navigation!

---

**Need more details?** Check out [README.md](README.md) for complete documentation.
