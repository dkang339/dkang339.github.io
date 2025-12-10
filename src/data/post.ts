import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft posts based on the environment */
export async function getAllPosts(): Promise<CollectionEntry<"post">[]> {
  return await getCollection("post", ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
}

/** Get tag metadata by tag name */
export async function getTagMeta(
  tag: string
): Promise<CollectionEntry<"tag"> | undefined> {
  const tagEntries = await getCollection("tag", (entry) => {
    return entry.id === tag;
  });
  return tagEntries[0];
}

/**
 * Group posts by year using publishDate
 * (Replaces Object.groupBy to support Node 18/20 and TypeScript strict mode.)
 */
export function groupPostsByYear(
  posts: CollectionEntry<"post">[]
): Record<string, CollectionEntry<"post">[]> {
  return posts.reduce<Record<string, CollectionEntry<"post">[]>>(
    (acc, post) => {
      const year = post.data.publishDate.getFullYear().toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {}
  );
}

/** returns all tags created from posts (including duplicates) */
export function getAllTags(posts: CollectionEntry<"post">[]): string[] {
  return posts.flatMap((post) => [...post.data.tags]);
}

/** returns all unique tags created from posts */
export function getUniqueTags(posts: CollectionEntry<"post">[]): string[] {
  return [...new Set(getAllTags(posts))];
}

/** returns a count of each unique tag - [[tagName, count], ...] */
export function getUniqueTagsWithCount(
  posts: CollectionEntry<"post">[]
): [string, number][] {
  return [
    ...getAllTags(posts).reduce(
      (acc, tag) => acc.set(tag, (acc.get(tag) ?? 0) + 1),
      new Map<string, number>()
    ),
  ].sort((a, b) => b[1] - a[1]);
}
