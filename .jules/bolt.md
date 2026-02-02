## 2025-05-14 - Script Loading Optimization and Link Security
**Learning:** Moving scripts from the end of the body to the `<head>` with the `defer` attribute allows the browser to initiate the script fetch earlier during the HTML parsing process, improving the critical rendering path without blocking DOM construction. Additionally, adding `rel="noopener"` to external links is a low-effort performance and security win, preventing the new page from accessing the original window and potentially allowing it to run in a separate process.
**Action:** Always prefer `<script defer>` in the `<head>` for non-critical scripts and ensure `rel="noopener"` is present on all `target="_blank"` links.

## 2025-05-14 - Dead Code Identification Warning
**Learning:** Identifying "dead code" in CSS requires careful verification against all HTML files. Statically analyzing a single file can lead to false positives if elements are named similarly or if my own observation of the HTML structure is flawed.
**Action:** Use automated tools or more thorough manual searching (e.g., `grep` for class/ID names) before concluding code is unused. Always verify the UI after removal.
