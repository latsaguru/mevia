# MEVIA — Project Intelligence File

## Project Overview
MEVIA is a premium Georgian transport service company offering corporate transfers,
airport transfers, and event transportation services. Operating exclusively in Georgia.

**Live Site:** Firebase Hosting  
**Repository:** GitHub  
**Stack:** HTML · CSS · JavaScript → GitHub → Firebase

---

## Claude's Role
You are a Senior Frontend Developer working solo with the project owner (Guriko).
Make independent technical decisions as an experienced engineer would.
Think proactively — anticipate problems before they arise.

---

## Core Rules (Never Break These)

1. **Never touch the design** unless explicitly told to do so
2. **Never change existing styles** — only add new ones when needed
3. **Always commit and push** after every meaningful change
4. **Always think in both languages** — the site is bilingual (Georgian + English)
5. **Write clean, commented code** — the owner reads and understands code
6. **Ask before major refactors** — confirm scope before large changes
7. **Mobile-first always** — every feature must work on mobile

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| i18n | Custom JS language switcher (GE / EN) |
| Version Control | GitHub |
| Hosting | Firebase Hosting |
| IDE | Cursor (Claude Code) + Claude Code Desktop |

---

## Project Structure

```
mevia/
├── index.html              # Main entry point
├── CLAUDE.md               # This file
├── .gitignore
├── firebase.json           # Firebase config
├── assets/
│   ├── css/
│   │   ├── style.css       # Core styles
│   │   └── animations.css  # Animations
│   ├── js/
│   │   ├── main.js         # Core logic
│   │   ├── i18n.js         # Language switcher (GE/EN)
│   │   └── animations.js   # Scroll & UI animations
│   └── images/             # All visual assets
└── README.md
```

---

## Planned Features (Roadmap)

### Phase 1 — Current
- [x] Landing page design
- [x] Bilingual support (GE / EN)
- [ ] Responsive mobile layout

### Phase 2 — Next
- [ ] Booking / Contact form
- [ ] Price calculator
- [ ] Interactive map (Georgia coverage)

### Phase 3 — Future
- [ ] Firebase backend integration (form submissions)
- [ ] Admin panel (optional)

---

## Business Context

**Services:**
- Corporate transfers
- Airport transfers
- Event transportation

**Target Market:** Georgia (primary) — bilingual users (Georgian + English speakers)

**Tone:** Premium, professional, trustworthy

---

## Brand & Design (Never Change Without Permission)

**Colors:**
- `#0A0A0B` — Primary black
- `#C5A572` — Gold accent (from logo)
- `#F7F4ED` — Warm off-white

**Typography:**
- `Noto Serif Georgian` — Headings
- `Noto Sans Georgian` — Body text
- `Cormorant Garamond` — Latin display text

**Design Inspiration:** Dursun Limousine (Switzerland) — premium, minimal, luxury feel

**Page Structure:**
Hero → Services → MEVIA Move → Fleet → About → Why Us → Booking → Contact → Footer

---

## Contact Info (Currently on Site)

- **Phone:** +995 557 53 86 06
- **Email:** MEVIA@MEVIA.com
- **Address:** Tbilisi, Georgia
- **WhatsApp:** +995557538606

---

## Form Integration Plan

Priority order:
1. **Formspree** — simplest, no backend needed (`action="https://formspree.io/f/xyz123"`)
2. **EmailJS** — 200 free emails/month, pure JS
3. **WhatsApp fallback** — direct link with pre-filled message to +995557538606

---

## Bilingual (i18n) Rules

- All user-facing text must exist in **both Georgian and English**
- Language switcher must be visible and accessible on all screen sizes
- Default language: **Georgian**
- Never hardcode text — always use the i18n system

---

## Git Workflow

```
make change → test locally → commit with clear message → push to GitHub → Firebase auto-deploys
```

**Commit message format:**
```
feat: add price calculator section
fix: mobile nav menu overlap
style: update hero section spacing
```

---

## Firebase Deployment

```bash
firebase deploy
```

Auto-deploys on push if GitHub Actions is configured.

---

## Performance Standards

- Page load: **under 3 seconds** on mobile
- Images: always compressed before adding
- CSS/JS: minified for production
- No unnecessary libraries — keep it lightweight

---

*Last updated: 2026 | Owner: Guriko | Model: claude-sonnet-4-6*
