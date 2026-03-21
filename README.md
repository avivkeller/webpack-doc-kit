# webpack-doc-kit

Automated TypeScript API documentation generator for [webpack](https://github.com/webpack/webpack). Extracts type definitions from webpack's `types.d.ts` and produces Markdown and HTML documentation, deployed to GitHub Pages.

## How It Works

1. **TypeDoc** reads webpack's TypeScript type definitions
2. Custom plugins process the output (namespace merging, type mapping, themed rendering)
3. **@node-core/doc-kit** converts Markdown to HTML
4. GitHub Actions deploys the result to GitHub Pages

### Webpack Version Tracking

The `HEAD_COMMIT` file pins the exact webpack/webpack commit used for doc generation. A scheduled GitHub Action runs every 24 hours to:

1. Fetch the latest webpack `main` branch HEAD
2. Update `HEAD_COMMIT`
3. Regenerate documentation
4. Push the changes to this repository

This ensures documentation stays in sync with upstream webpack without manual intervention.

## Project Structure

```
├── generate-md.mjs          # TypeDoc entry point
├── plugins/
│   ├── processor.mjs         # Namespace merging + type-map generation
│   └── theme/                # Custom doc-kit theme
├── HEAD_COMMIT               # Pinned webpack commit SHA
├── .github/workflows/
│   ├── ci.yml                # Lint + doc generation check
│   ├── deploy.yml            # Build HTML + deploy to GitHub Pages
│   └── sync.yml              # Daily webpack sync
└── package.json
```

## Scripts

| Script                  | Description                          |
| ----------------------- | ------------------------------------ |
| `npm run generate-docs` | Generate Markdown from webpack types |
| `npm run build-html`    | Convert Markdown to HTML             |
| `npm run build`         | Generate docs + build HTML           |
| `npm run lint`          | Run ESLint                           |
| `npm run format:check`  | Check Prettier formatting            |

## Contributing

When making changes to documentation generation (plugins, `generate-md.mjs`, `tsconfig.json`), ensure the docs can still be generated successfully. CI will verify this on every pull request.

## License

See the [webpack project](https://github.com/webpack/webpack) for license details.

## Getting Started for Contributors

To get started with this project locally:

1. Clone the repository
2. Install dependencies using `npm install`
3. Run `npm run generate-docs` to generate Markdown documentation
4. Run `npm run build-html` to generate HTML output
5. Use `npm run build` to run the full pipeline
6. Ensure code passes lint checks using `npm run lint`

This helps new contributors understand how to run and test the documentation generation pipeline before making changes.
