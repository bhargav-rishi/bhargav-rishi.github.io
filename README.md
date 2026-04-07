# Bhargav Rishi — Static Portfolio

Pure HTML/CSS/JS portfolio (no build tools). Open `index.html` in a browser to view.

## File structure
- `index.html` — page structure, navigation, hero, profile, recognition, case study, projects, and contact sections.
- `style.css` — USF-inspired light theme, responsive layout, portrait framing, spacing, cards, buttons, and chip styles.
- `main.js` — data-driven content for skills, strengths, projects, result lines, contact links, and scroll restoration behavior.
- `assets/` — local images used by the header, logos, resume PDF, and project cards.
- `Personalization Helpers/` — source resumes and career-narrative documents used to keep portfolio positioning aligned with target roles.

## Technologies
- HTML5 + vanilla CSS (custom theming, grids/flex, scroll offsets for anchors).
- Vanilla JS for rendering skills, strengths, and project cards from data.
- Local assets; project cards link to GitHub repos or external project pages.

## Editing content
- Update hero/profile/contact/case-study copy and section structure in `index.html`.
- Update skills (core vs additional), strengths, project summaries, result lines, tags, links, and the contact `mailto:` subject in `main.js`.
- Adjust theme, spacing, portrait treatment, responsive behavior, card layout, and button styles in `style.css`.
- Replace the header photo, logos, resume PDF, and project thumbnails in `assets/`.
- If messaging or positioning changes materially, cross-check with the files in `Personalization Helpers/`.

## Current content model
- Portfolio positioning is intentionally balanced across AI/ML, data engineering, analytics, and decision support.
- The hero should stay credible and recruiter-friendly: technical, impact-aware, and not overly self-branded.
- Featured projects are intentionally fixed to represent GenAI, data visualization, and deep learning.
- The featured research case study is intentionally phrased at a high level because publication/IP review is in progress.
- Contact uses direct `mailto:` links by design instead of a static-site form.

## Deploying to GitHub Pages
1. Create a repo named `USERNAME.github.io` on GitHub.
2. Copy `index.html`, `style.css`, `main.js`, and the `assets/` folder into the repo root.
3. Enable Pages (Settings → Pages → Source: Deploy from branch). It will serve at `https://USERNAME.github.io`.

No build step required.
