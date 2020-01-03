import { LoadFilteredPostsQuery, LoadPostsQuery } from '@generated/gatsby';
import { CreatePagesArgs } from 'gatsby';
import gql from 'graphql-tag';
import { print } from 'graphql/language/printer';

const join = (...args: Array<string | number>) => args.filter(Boolean).join('/');

export const schema = gql`
  query loadPosts($limit: Int!) {
    allPost(sort: { fields: [date, title], order: DESC }, limit: $limit) {
      edges {
        node {
          id
          slug
          title
          date
        }
      }
    }
  }
`;

export const filteredSchema = gql`
  query loadFilteredPosts($limit: Int!) {
    allPost(sort: { fields: [date, title], order: DESC }, filter: { draft: { ne: true } }, limit: $limit) {
      edges {
        node {
          id
          slug
          title
          date
        }
      }
    }
  }
`;

export const createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const result = await graphql<LoadPostsQuery>(print(schema), { limit: 1000 });

  if (result.errors) {
    reporter.panic(result.errors);
  }

  const filtered = await graphql<LoadFilteredPostsQuery>(print(filteredSchema), { limit: 1000 });

  if (filtered.errors) {
    reporter.panic(filtered.errors);
  }

  if (!result.data) {
    return;
  }

  const posts = result.data.allPost.edges.map(e => e.node);
  const list = result.data.allPost.edges.map(e => e.node);

  posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve('../templates/post-template.tsx'),
      context: {
        id: post.id,
      },
    });
  });

  const limit = 16;
  const pages = Math.ceil(list.length / limit);

  Array.from({ length: pages }).forEach((_, i) => {
    const pi = i;
    const ni = i + 2;
    let previous = '';
    let next = '';
    if (i > 0) {
      previous = pi === 1 ? '/writings' : join('/writings', pi);
    }
    if (ni < pages) {
      next = join('/writings', ni);
    }
    const slug = i === 0 ? '/writings' : join('/writings', `${i}1`);

    actions.createPage({
      path: slug,
      component: require.resolve('../templates/post-list-template.tsx'),
      context: {
        previous,
        next,
        limit,
        skip: i * limit,
      },
    });
  });
};
