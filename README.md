# Transatlantic Wellness Initiative Website

A complete static launch website for **Transatlantic Wellness Initiative**, an NGO concept focused on health access, clean water, wellness education, and community resilience across transatlantic partner regions.

## Included files

- `index.html` — semantic, single-page NGO website with navigation, mission sections, program cards, donation pledge UI, and request/contact form.
- `styles.css` — responsive styling, animations, cards, layout, and mobile navigation states.
- `script.js` — sticky header, mobile menu, reveal animations, donation pledge behavior, current year, and validated mailto request form.
- `assets/` — original SVG logo, favicon, icons, hero illustration, map, and program images.

> Note: downloadable ZIP packages and PNG screenshots are intentionally not committed because the PR system does not support binary artifacts. To create a local ZIP after downloading/cloning the text source files, run:
>
> ```bash
> zip -r transatlantic-wellness-initiative-website.zip README.md index.html styles.css script.js assets
> ```

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/` in a browser.
