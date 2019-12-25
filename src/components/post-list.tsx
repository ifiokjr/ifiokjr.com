/** @jsx jsx */
import { Link } from 'gatsby';
import { FC } from 'react';
import { jsx, Styled } from 'theme-ui';

import { PostData, WithId } from '../types';

export interface PostListProps {
  posts: Array<WithId<PostData>>;
  previous?: string;
  next?: string;
}

export const PostList: FC<PostListProps> = ({ posts, previous, next }) => (
  <div
    sx={{
      maxWidth: 'container',
    }}
  >
    <ul
      sx={{
        listStyle: 'none',
        m: 0,
        p: 0,
      }}
    >
      {posts.map(post => (
        <li key={post.id}>
          <Styled.h1 as='h2'>
            <Link
              to={post.slug}
              sx={{
                display: 'block',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {post.title || post.slug}
            </Link>
          </Styled.h1>
          <div sx={{ variant: 'type.small' }}>{post.date}</div>
          <Styled.p>{post.excerpt}</Styled.p>
        </li>
      ))}
    </ul>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 4,
      }}
    >
      {previous && (
        <Link
          to={previous}
          sx={{
            variant: 'styles.navitem',
          }}
        >
          Previous
        </Link>
      )}
      <div sx={{ mx: 'auto' }} />
      {next && (
        <Link
          to={next}
          sx={{
            variant: 'styles.navitem',
          }}
        >
          Next
        </Link>
      )}
    </div>
  </div>
);
