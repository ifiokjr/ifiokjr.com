export interface FrontMatterOptions {
  /** The title of the article */
  title: string;

  /** The name under which the article is hosted */
  slug: string;

  /**
   * The published date for the post in ISO format. Must be set for the blog to
   * be published.
   */
  datePublished?: string;

  /** A cover image for the blog post. */
  cover: string;
}

export interface Post extends FrontMatterOptions {
  /** The date content was first added to git. */
  dateCreated: string;

  /** The date the content was last modified in git */
  dateModified: string;

  /** An excerpt of the content. Truncated at <!-- truncate -->. */
  excerpt: string;

  /** The full html for the article. Might be removed at a later point */
  html: string;

  /** How long the article takes to read. */
  readingTime: string;

  dates: {
    created: string;
    published: string;
    modified: string;
  };
}

export type Segment = 'about' | 'blog';
