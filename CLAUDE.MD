# CLAUDE.MD

## Project Overview

This is the source code for Robin C. Hoffpauir's professional portfolio website, hosted at [robinchoffpauir.github.io](https://robinchoffpauir.github.io).

**Purpose:** A central professional hub showcasing work as a SaaS & GTM Leader specializing in Partnerships, Cloud, and AI.

**Deployment:** GitHub Pages (static site)

---

## Tech Stack

- **Frontend:** HTML5, CSS3 (Custom + Variables), Vanilla JavaScript
- **Styling:** Product Sans font family, CSS Variables for theming
- **Features:** Dark/light mode toggle with persistent storage
- **Dependencies:** Minimal (jQuery, custom utility scripts)
- **Hosting:** GitHub Pages
- **Version Control:** Git + GitHub

---

## Project Structure

```
RobinCHoffpauir.github.io/
├── index.html                    # Homepage (hero, featured wins, portal cards)
├── about.html                    # About/leadership philosophy
├── resume.html                   # Full résumé
├── career-snapshot.html          # Career highlights
├── data-visualizations.html      # Portfolio/dashboards
├── thought-leadership.html       # Writing/essays
├── assets/
│   ├── css/
│   │   └── styles.css           # Global styles (colors, themes, layouts)
│   ├── js/
│   │   ├── theme.js             # Dark/light mode toggle logic
│   │   ├── main.js              # Additional interactive features
│   │   ├── util.js              # Utility functions
│   │   ├── jquery.min.js        # jQuery library
│   │   └── jquery.scrolly.min.js
│   ├── fonts/
│   │   └── ProductSans-*.ttf    # Product Sans font variants
│   └── files/                   # Resume PDFs, docs
├── images/
│   └── Cartoon/                 # Profile illustrations (2.png - 5.png)
├── README.md                     # Public-facing documentation
├── TODO.md                       # Current priorities and backlog
├── LICENSE                       # MIT License
└── CNAME                         # Custom domain configuration
```

---

## Key Design Patterns

### Navigation
- **Single Source of Truth:** All pages use the same `<nav class="main-nav">` structure
- **Active State:** Current page marked with `class="active"`
- **Fixed Top Bar:** Persistent navigation across all pages

### Theming
- **CSS Variables:** All colors defined in `assets/css/styles.css` using CSS custom properties
- **Toggle Persistence:** Theme preference stored in `localStorage`
- **Script:** `assets/js/theme.js` handles toggle logic and state management

### Content Structure
- **Hero Section:** Eyebrow text → H1 → Subline → Summary → Highlights → CTAs
- **Section Headers:** `<h2>` with optional `.section-intro` paragraph
- **Card Grids:** `.media-grid` with `.media-card` children for consistent layouts
- **Tables:** Semantic `<table>` with accessible `aria-label` attributes

---

## Styling Conventions

### Typography
- **Font Family:** Product Sans (Regular, Medium, Bold, Black)
- **Headings:** H1 = 2.5rem, H2 = 2rem, H3 = 1.5rem
- **Body:** 1rem base with 1.6 line-height

### Color System
- **Light Mode:** White backgrounds, dark text
- **Dark Mode:** Dark backgrounds, light text
- **Accent Colors:** Blue for primary CTAs, subtle grays for borders
- **Managed via:** CSS variables (`--color-bg`, `--color-text`, etc.)

### Layout
- **Container:** Max-width 1200px, centered
- **Grid System:** CSS Grid for card layouts
- **Responsive:** Mobile-first, stacks on small screens
- **Spacing:** Consistent rem-based margins and padding

---

## Common Tasks

### Adding a New Page
1. Create `new-page.html` in root
2. Copy navigation from existing page
3. Link to `assets/css/styles.css` and `assets/js/theme.js`
4. Add link to navigation in all existing pages
5. Test theme toggle and mobile responsiveness

### Updating Content
- **Homepage Hero:** Edit `index.html` lines 35-59
- **Featured Wins:** Edit table in `index.html` lines 79-109
- **Navigation Links:** Update all HTML files' `<nav>` sections
- **Contact Info:** Update email/LinkedIn in footer sections

### Modifying Theme
- **Colors:** Edit CSS variables in `assets/css/styles.css`
- **Toggle Logic:** Modify `assets/js/theme.js`
- **Persistence:** Uses `localStorage.getItem('theme')`

### Testing
- Test all pages in both light and dark modes
- Verify mobile responsiveness (viewport < 768px)
- Check all internal links and navigation
- Validate HTML5 semantics and ARIA labels

---

## Current Priorities (from TODO.md)

### High Priority - Messaging & Positioning
1. Update homepage tagline (index.html line 40)
2. Reorder value proposition bullets (partner-led revenue first)
3. Add platform GTM specialization statement after value props

### Medium Priority - Content Enhancement
1. Add 4th metric to Featured Wins table
2. Clarify "Team Playbooks" description in about.html
3. Align naming: "Data & Visuals" vs "Data Visualizations"

### Low Priority - UX Improvements
1. Replace email link with Calendly booking tool
2. Mobile responsiveness audit for cartoon images
3. Test Featured Wins table on small screens

---

## Important Files

- **index.html** - Main landing page, drives traffic and conversions
- **assets/css/styles.css** - Single source of truth for all styling
- **assets/js/theme.js** - Theme toggle functionality
- **TODO.md** - Current backlog and priorities
- **README.md** - Public documentation for developers

---

## Accessibility Considerations

- **ARIA Labels:** All interactive elements have proper labels
- **Semantic HTML:** Proper use of `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`
- **Alt Text:** All images have descriptive alt attributes
- **Keyboard Navigation:** All interactive elements are keyboard accessible
- **Color Contrast:** WCAG AA compliant in both themes

---

## Media & Integrations

- **LinkedIn Embeds:** Used in thought-leadership.html
- **Spotify/Apple Podcast Embeds:** Available for audio content
- **Google Maps:** Contact page integration
- **Resume PDFs:** Stored in `assets/files/`

---

## Git Workflow

- **Main Branch:** Production-ready code
- **Feature Branches:** Use `claude/` prefix for AI-assisted development
- **Commits:** Descriptive messages focusing on "why" rather than "what"
- **Deployment:** Automatic via GitHub Pages on push to main

---

## Notes for AI Assistants

### When Making Changes
- Always read files before editing
- Preserve exact indentation (spaces/tabs)
- Maintain consistent navigation across all pages
- Test theme toggle after CSS/JS changes
- Update TODO.md when completing tasks

### Coding Style
- Use semantic HTML5 elements
- Keep inline styles minimal (use CSS classes)
- Maintain accessibility attributes (aria-label, alt text)
- Follow existing patterns for consistency
- Prefer vanilla JS over adding new dependencies

### Common Pitfalls
- Don't break theme toggle functionality
- Don't remove accessibility features
- Don't add heavy dependencies (keep site lightweight)
- Don't forget to update all navigation instances
- Don't skip mobile testing

---

## Contact & Ownership

- **Owner:** Robin C. Hoffpauir
- **Email:** hoffpauirrobin@gmail.com
- **LinkedIn:** [linkedin.com/in/robinchoffpauir](https://linkedin.com/in/robinchoffpauir)
- **License:** MIT (see LICENSE file)
