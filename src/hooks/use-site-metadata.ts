import { SiteMetaDataQuery } from '@generated/gatsby';
import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                email
                rss
                vkontakte
                line
                gitlab
                weibo
                codepen
                youtube
              }
            }
            menu {
              label
              path
            }
            siteUrl
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};
