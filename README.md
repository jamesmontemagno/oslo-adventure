# Oslo Adventure

Oslo Adventure is a static, image-led day planner for friends visiting Oslo. It lets you filter a curated edit of coffee shops, cultural places, and saunas, inspect them on a schematic map, and pin three stops into a simple day.

## Run locally

This is a dependency-free static site. From the project folder:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Publish

The site is designed for GitHub Pages. A workflow in `.github/workflows/pages.yml` deploys the repository root whenever `main` changes.

## Image credits

The supplied assets are listed in `Assets/manifest.json` with their source pages. The public footer links to the manifest so source and licensing information remains discoverable. Review the current license and attribution requirements on every source page before redistributing the images outside this demo.
