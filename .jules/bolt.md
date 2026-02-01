## 2024-05-20 - [Optimizing Static Assets and Loading Strategy]
**Learning:** Even for small scripts, moving to a `defer` loading strategy in the `<head>` improves the browser's ability to prioritize resource fetching without blocking the critical rendering path. Minification, while providing smaller gains for small files, maintains consistency with CSS optimization patterns in the codebase.
**Action:** Always prefer `defer` or `async` for non-critical scripts and ensure minified assets are accompanied by build instructions or scripts for maintainability.

## 2024-05-20 - [External Link Performance and Security]
**Learning:** Adding `rel="noopener"` to external links with `target="_blank"` prevents the newly opened page from accessing the `window.opener` object, which can have minor performance benefits by avoiding process sharing in some browsers, in addition to being a security best practice.
**Action:** Implement `rel="noopener"` for all external links.
