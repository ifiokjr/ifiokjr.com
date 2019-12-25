/** @jsx jsx */
import qs from 'querystring';
import { FC } from 'react';
import { jsx } from 'theme-ui';

interface TweetProps {
  text: string;
  url: string;
  via?: string;
}

export const Tweet: FC<TweetProps> = ({ text, url, via = 'ifiokjr' }) => {
  const search = qs.stringify({
    text,
    url,
    via,
  });
  const href = `https://twitter.com/intent/tweet?${search}`;

  return (
    <a
      className='twitter-share-button'
      sx={{
        width: 55,
        height: 20,
      }}
      href={href}
    >
      Tweet
    </a>
  );
};
