import { promises as fs } from 'fs';
import path from 'path';

async function getPostsSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, '/'));
}

export default async function sitemap() {
  const notesDirectory = path.join(process.cwd(), 'app', 'posts');
  const slugs = await getPostsSlugs(notesDirectory);

  const notes = slugs.map((slug) => ({
    url: `https://tristandeane.ca/posts/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ['', '/work', '/projects'].map((route) => ({
    url: `https://tristandeane${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...notes];
}
