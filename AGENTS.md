# Personal Blog

Personal blog built with Astro, Markdown, and RSS, hosted on Cloudflare Workers.

## Development

- Use Astro components; do not add UI frameworks.
- Prefer native HTML and CSS features; use JavaScript only for behavior they cannot provide.
- Use `rem` for text and spacing, `px` for fixed details, flexible widths for layout, and unitless line heights.

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Tags

- Before introducing a new tag, review existing tags to ensure it has a clear scope. Reuse an existing tag when it already fits.
- Assign tags only when a post provides enough context to meaningfully cover the topic; a passing mention is not enough.
- When introducing a new tag, review older posts and add it wherever the content meaningfully covers the same topic.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
