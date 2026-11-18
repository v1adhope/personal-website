import type { CollectionEntry } from "astro:content";

export function getTagLabel(tag: string) {
    const names: Record<string, string> = {
        ai: "AI", sql: "SQL", dns: "DNS", golang: "Go", macos: "macOS",
        postgres: "Postgres", react: "React", obsidian: "Obsidian",
    };
    const words = tag.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
    return names[tag] ?? words.charAt(0).toUpperCase() + words.slice(1);
}

export function newestFirst(posts: CollectionEntry<"blog">[]) {
    return [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getTagCounts(posts: CollectionEntry<"blog">[]) {
    const counts = new Map<string, number>();
    for (const post of posts) {
        for (const tag of new Set(post.data.tags)) {
            counts.set(tag, (counts.get(tag) ?? 0) + 1);
        }
    }
    return [...counts].map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
