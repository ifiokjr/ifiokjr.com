export const feed = {
  feeds: [
    {
      serialize: ({ query: { site, allPost } }: any) => {
        return allPost.edges
          .map((e: any) => e.node)
          .filter((post: any) => !post.draft)
          .map((post: any) => ({
            ...post.frontmatter,
            description: post.excerpt,
            url: `${site.siteMetadata.siteUrl}${post.slug}`,
            guid: `${site.siteMetadata.siteUrl}${post.slug}`,
            custom_elements: [{ 'content:encoded': post.html }],
          }));
      },
      query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allPost(
          limit: 1000,
          sort: {
            order: DESC,
            fields: date
          }
          filter: { draft: { ne: true } }
        ) {
          edges {
            node {
              title
              date
              slug
              excerpt
              html
            }
          }
        }
      }
    `,
      output: `rss.xml`,
      title: `Ifiok Jr.'s Writings`,
    },
  ],
};
