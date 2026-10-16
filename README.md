# SkyAgent

Research homepage for **SkyAgent: Revisable Target Memory for Continuous Aerial Search**.

## Local preview

No build or dependencies required. From this directory run:

```sh
python -m http.server 8000
```

Open http://localhost:8000. The paper is included at `assets/SkyAgent.pdf`.

## GitHub Pages

The live site is https://ykb19.github.io/SkyAgent/. GitHub Pages publishes from the root of the `gh-pages` branch (Settings → Pages → Deploy from a branch). Push website changes to `gh-pages` to deploy. The `main` branch remains the paper repository.

## Editing

- `index.html`: authors, affiliations, research text, and results.
- `style.css`: responsive visual design.
- `script.js`: figure lightbox, section navigation, and copy-project-link interaction.
- `assets/`: the original paper and figures cropped from it (Figures 1, 2, and 4).

Results are transcribed from Tables 1 and 3 of the supplied manuscript. The page does not imply an accepted publication venue or a released implementation. Google Sans and Noto Sans are loaded through Google Fonts, matching the supplied reference pages. There are no frontend framework dependencies or analytics.

## UI design

The design follows [ReconVLA](https://zionchow.github.io/ReconVLA/) and [VLA-Adapter](https://vla-adapter.github.io/): a centered 48 px Google Sans paper title, blue author names, dark resource buttons, a light gray abstract section, and plain manuscript figures and result tables. Body copy uses Noto Sans. Original page code is used; no reference assets or implementation code are copied.

The original manuscript, author information, experimental figures, and numerical results are preserved. Decorative slogans, the conceptual illustration, metric cards, and promotional paper preview have been removed in favor of a conventional research project layout.

Figure links open an accessible modal, support Escape to close, and retain links to the original images. The site supports mobile layouts, horizontally scrollable result tables, keyboard focus indicators, and reduced motion preferences.

Local development takes place on `redesign-ui`. Publish reviewed changes by pushing this branch to `gh-pages`. Preview screenshots are local review artifacts and are not part of the website deployment.
