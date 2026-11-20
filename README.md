# Personal Blog

Vladislav Gardner’s personal blog — notes, ideas, and observations.
Built with Astro, with Markdown posts, topic tags, and an RSS feed, and deployed
on Cloudflare Workers.

## Post frontmatter

Posts live in `src/blog/`. Set these fields in each Markdown file's frontmatter:

| Field         | Value                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| `title`       | Post title (string).                                                                                        |
| `pubDate`     | Publication date (`YYYY-MM-DD`).                                                                            |
| `description` | Short summary (string).                                                                                     |
| `tags`        | Topic tags (array of strings). Reuse existing tags when they fit.                                           |
| `hidden`      | Optional boolean, defaults to `false`. Set to `true` to exclude the post from pages, tags, counts, and RSS. |
