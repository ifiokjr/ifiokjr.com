import type { NextFunction, Request, Response } from 'express';
import fs from 'fs';

import { posts } from '../utils/all-posts';
import type { Post } from '../utils/types';

const BASE_URL = 'https://ifiokjr.com';
const pages = [''];

fs.readdirSync(__dirname).forEach((file) => {
  file = file.split('.')[0];

  if (!file.startsWith('_') && file !== 'sitemap' && file !== 'index') {
    pages.push(file);
  }
});

function render(pages: string[], posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
    .map(
      (page) => `
    <url><loc>${BASE_URL}/${page}</loc><priority>0.85</priority></url>
  `,
    )
    .join('\n')}
  ${posts
    .map(
      (post) => `
    <url>
      <loc>${BASE_URL}/blog/${post.slug}</loc>
      <priority>0.69</priority>
    </url>
  `,
    )
    .join('\n')}
</urlset>
`;
}

export function get(_: Request, res: Response, __: NextFunction) {
  res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`); // 10 minutes
  res.setHeader('Content-Type', 'application/rss+xml');

  const sitemap = render(pages, posts);
  res.end(sitemap);
}
