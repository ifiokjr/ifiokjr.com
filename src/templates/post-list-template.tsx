import { PostListQuery } from '@generated/gatsby';
import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { TemplateProps } from 'src/types';

import { PostList } from '../components/post-list';

interface PostListTemplateProps extends TemplateProps {
  data: PostListQuery;
}

const PostListTemplate: FC<PostListTemplateProps> = props => {
  const posts = props.data.posts.edges.map(e => e.node);

  return <PostList {...props} {...props.pageContext} posts={posts} />;
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    posts: allPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
      filter: { draft: { ne: true } }
    ) {
      edges {
        node {
          id
          slug
          date(formatString: "DD MMMM YYYY")
          title
          excerpt
        }
      }
    }
  }
`;

export default PostListTemplate;
