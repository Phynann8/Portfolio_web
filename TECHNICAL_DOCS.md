# 🎨 Technical Manual: Portfolio Website

## 1. System Overview
**Type**: Static Website
**Stack**: HTML5, CSS3, Vanilla JS
**Key Logic**: Client-side interactivity and Serverless Form handling.

## 2. Code Logic Analysis (`script.js`)

### A. Dark Mode System
**Storage**: `localStorage.getItem('theme')`
**Logic**:
*   On load: Checks storage. If 'dark', adds `.dark-mode` class to `body`.
*   On toggle: Swaps class and updates localStorage.
*   **Assets**: Also swaps the FontAwesome icon (`fa-moon` <-> `fa-sun`).

### B. Project Filtering
**Elements**: `.filter-btn` and `.project-card`
**Logic**:
*   Buttons have `data-filter` (e.g., "web", "design").
*   Cards have `data-category`.
*   Click Event:
    1.  Iterates all cards.
    2.  Comparison: `if (filter === 'all' || card.cat === filter)` -> Show.
    3.  Animation: Re-triggers AOS (Animate On Scroll) via `aos-animate` class toggle.

### C. Contact Form (Serverless)
**Endpoint**: Google Apps Script URL.
**Logic**:
1.  Intercepts `form.submit`.
2.  Disables button ("Sending...").
3.  `fetch(scriptURL, { method: 'POST', body: FormData })`.
4.  Relies on Google Sheets as the backend database.

## 3. File Structure
*   **`index.html`**: Single Page layout (Hero, About, Projects, Contact).
*   **`script.js`**: All interactivity.
*   **`style.css`**: Custom variables (`--primary-color`, etc.) supporting the Dark Mode switch.
