import { PostQuery } from '@generated/gatsby';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';
import { TemplateProps } from 'src/types';

import { Post } from '../components/post';

interface PostTemplateProps extends TemplateProps {
  data: PostQuery;
}

const PostTemplate: FC<PostTemplateProps> = props => {
  const { post } = props.data;

  return (
    <Post {...props} {...post}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Post>
  );
};

export const query = graphql`
  query Post($id: String!) {
    post(id: { eq: $id }) {
      id
      date(formatString: "DD MMMM YYYY")
      title
      body
      tags
      category
      draft
      timeToRead
      wordCount {
        paragraphs
        words
        sentences
      }
    }
  }
`;

export default PostTemplate;
