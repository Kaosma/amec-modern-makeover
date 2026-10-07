# Project Architecture

- Keep the public site split into route-based pages, with the homepage reserved for the concise company pitch and Reco proof; this preserves focused navigation and campaign clarity.
- Define service content and URLs in a shared data module with an explicit homepage subset and render each service through a dedicated route using a shared page layout; this keeps the menu complete without adding every service to the homepage.
- Keep package descriptions and eligibility in a shared data module rendered on a dedicated packages page; this separates package requirements from presentation and enables focused rule tests.