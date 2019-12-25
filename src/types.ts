import { ReplaceComponentRendererArgs } from 'gatsby';

export interface PostData {
  title: string;
  slug: string;
  date: Date;
  excerpt?: string;
  draft?: boolean;
  tags?: string[];
  category?: string;
  socialImage?: string;
  template?: 'post';
  html?: string;
  body?: string;
}

export type WithId<T extends object> = T & {
  id: string;
};

export type TemplateProps = ReplaceComponentRendererArgs['props'];

export type Maybe<T> = T | undefined | null;
