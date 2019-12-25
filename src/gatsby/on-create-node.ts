import { CreateNodeArgs } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

import { PostData } from '../types';

interface NodeArgs {
  frontmatter: PostData;
  rawBody: string;
  id: string;
}
export const onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}: CreateNodeArgs<NodeArgs>) => {
  if (node.internal.type !== `Mdx`) {
    return;
  }

  const parent = getNode(node.parent);
  const child = getNode(node.id);
  if (parent.sourceInstanceName !== 'posts') {
    return;
  }

  const slug = `/writings${createFilePath({
    node,
    getNode,
  })}`;

  const title = node.frontmatter.title;
  const date = node.frontmatter.date;
  const draft = node.frontmatter.draft ?? false;
  const tags = node.frontmatter.tags ?? [];

  actions.createNode({
    slug,
    title,
    date,
    draft,
    tags,
    id: createNodeId(`${node.id} >>> Post`),
    parent: node.id,
    children: [],
    internal: {
      type: `Post`,
      contentDigest: createContentDigest({
        slug,
        date,
        body: node.rawBody,
      }),
      content: node.rawBody,
      description: `Blog Posts`,
    },
  });

  actions.createParentChildLink({ parent, child });
};
