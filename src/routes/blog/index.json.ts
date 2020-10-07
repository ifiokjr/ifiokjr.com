import type { Request, Response } from 'express';

import { posts } from '../../utils/all-posts';

const contents = JSON.stringify(posts);

export function get(_: Request, res: Response) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
