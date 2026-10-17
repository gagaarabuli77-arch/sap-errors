# SAP ცნობარი

Static site on GitHub Pages: `index.html` (page, errors and FAQ data), `instructions.js` (guides), `news.js` (news feed).

## Rules from the owner

- **News with a guide:** when a news post comes with an instruction (Word file), always
  1. add the guide to `instructions.js` (so it appears in the ინსტრუქციები tab and stays there after the post expires), with images in `instructions/<id>/`, and
  2. set the post's `"instruction"` to that guide's id, so the post shows the "იხილეთ ინსტრუქცია" button.
- After changing `instructions.js` or `news.js`, bump the `?v=` tag on their `<script>` lines in `index.html` so browsers don't use a cached copy.
- Proofread all Georgian text (spelling, commas, grammar) before publishing, and check screenshots for personal data (personal ID numbers get pixelated).
