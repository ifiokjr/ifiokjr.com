/** @jsx jsx */
import { PostQuery } from '@generated/gatsby';
import { FC } from 'react';
import { jsx, Styled } from 'theme-ui';

import { Tweet } from './tweet';

const Draft = () => (
  <div
    sx={{
      p: 3,
      my: 4,
      fontWeight: 'bold',
      color: 'background',
      bg: 'accent',
    }}
  >
    ⚠️ You are viewing an draft post, and this may not be ready for primetime.
  </div>
);

export const Post: FC<PostQuery['post'] & { location: Location }> = ({
  title,
  date,
  draft,
  children,
  location,
}) => (
  <div
    sx={{
      maxWidth: 'container',
    }}
  >
    <Styled.h1>{title}</Styled.h1>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginY: 4,
      }}
    >
      <div sx={{ variant: 'type.small', mr: 3 }}>{date}</div>
      <Tweet text={title} url={location.href} />
    </div>
    {draft && <Draft />}
    <article>{children}</article>
    <div>
      <Tweet text={title} url={location.href} />
    </div>
    <div
      sx={{
        py: 5,
        fontWeight: 'bold',
      }}
    ></div>
  </div>
);
