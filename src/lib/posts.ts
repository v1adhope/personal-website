import { getCollection, type CollectionEntry } from "astro:content";
import { sentenceCase } from "text-case";

export function getPosts() {
  return getCollection("blog", ({ data }) => !data.hidden);
}

export function getTagLabel(tag: string = "Interest") {
  const names: Record<string, string> = {
    ai: "AI",
    sql: "SQL",
    dns: "DNS",
    golang: "Go",
    macos: "MacOS",
    postgres: "Postgres",
    react: "React",
    obsidian: "Obsidian",
  };
  return names[tag] ?? sentenceCase(tag);
}

export function newestFirst(posts: CollectionEntry<"blog">[]) {
  return [...posts].sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

export function getTagCounts(posts: CollectionEntry<"blog">[]) {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of new Set(post.data.tags)) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
