# Bolt's Performance Journal

## 2025-05-15 - Critical Path and Minification Optimization
**Learning:** In static websites without a robust build pipeline, manual minification of JS/CSS can yield significant size reductions (e.g., 44% for script.js), but requires clear documentation (Developer Notes) to avoid maintenance debt. Moving scripts to the head with `defer` improves the critical rendering path by allowing the browser to fetch the script in parallel with HTML parsing without blocking rendering.
**Action:** Always check for `defer` or `async` on non-critical scripts and ensure minified artifacts are synchronized with source changes before submission.
