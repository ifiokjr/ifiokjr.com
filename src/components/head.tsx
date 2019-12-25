import { withPrefix } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { useSiteMetadata } from '../hooks';

export interface HeadProps {
  title: string;
  description?: string;
  socialImage?: string;
  location: Location;
}

export const Head = ({ title, description, socialImage, location }: HeadProps) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = `${url}${withPrefix(metaImage)}`;

  return (
    <Helmet>
      <html lang='en' />
      <meta name='theme-color' content='#ffffff' />
      <link rel='canonical' href={location.href} />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:site_name' content={title} />
      <meta property='og:image' content={metaImageUrl} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@ifiokjr' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={metaImageUrl} />
    </Helmet>
  );
};
