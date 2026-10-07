# Pileworks & Construction Services Limited

Premium single-page construction company website. Static HTML, CSS and JavaScript; no build step or paid dependencies.

## Preview locally

Run `python -m http.server 8080 --directory dist` from the repository root, then visit http://localhost:8080.

## Publish

Serve the `dist` directory with any static host. For Netlify, leave the build command empty and set the publish directory to `dist`.

## Content to update before launch

- Replace conceptual residence imagery with verified company project photos.
- Set `WHATSAPP_NUMBER` in `dist/script.js` to the verified international number, digits only.
- Replace the displayed placeholder number in `dist/index.html`.

## Files

- `dist/index.html`: page content and enquiry dialogs.
- `dist/style.css`: base styles.
- `dist/refinements.css`: typography, architectural layouts and mobile refinements.
- `dist/script.js`: navigation, image viewer, enquiry message preparation and animations.
- `dist/assets/`: supplied portraits, company logo, conceptual imagery and fonts.

The residence image is AI-generated conceptual placeholder imagery, not a completed Pileworks project. Team portraits and company branding were supplied by the client. Font license details are included in `dist/assets/font-license.txt`.
