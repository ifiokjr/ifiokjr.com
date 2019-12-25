import { WrapPageElementBrowserArgs } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Head } from './components/head';
import { Layout } from './components/layout';
import { PostData } from './types';

interface PageProps {
  location: Location;
  data?: { post?: PostData };
}

const Page: FC<PageProps> = ({ location, ...props }) => {
  let title = 'ifiokjr';
  const postTitle = props?.data?.post?.title;
  const description = props?.data?.post?.excerpt;

  if (postTitle) {
    title = `${postTitle} | ${title}`;
  }

  return (
    <>
      <Head title={title} description={description} location={location} />
      <Layout {...props}>{props.children}</Layout>
    </>
  );
};

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs & { props: any }) => (
  <Page {...props}>{element}</Page>
);
