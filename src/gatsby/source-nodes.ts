import { SourceNodesArgs } from 'gatsby';
import { GraphQLFieldResolver, GraphQLObjectType } from 'graphql';

import { Category, Maybe } from '../types';
import { values } from '../utils';

const mdxResolverPassthrough = (fieldName: string): GraphQLFieldResolver<any, any> => async (
  source,
  args,
  context,
  info,
) => {
  const type = info.schema.getType('Mdx') as Maybe<GraphQLObjectType>;
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type?.getFields()?.[fieldName]?.resolve;
  const result = await resolver?.(mdxNode, args, context, {
    fieldName,
  } as any);

  return result;
};

export const sourceNodes = <TSource = any, TContext = any>({
  actions,
  schema,
}: SourceNodesArgs<TSource, TContext>) => {
  const { createTypes } = actions;
  const { buildEnumType, buildObjectType } = schema;

  createTypes([
    buildEnumType({
      name: 'PostCategory',
      description: 'The category of the post',
      values: {
        [Category.Creative]: { value: Category.Creative, description: 'For creative posts' },
        [Category.Personal]: { value: Category.Personal, description: 'For personal posts' },
        [Category.Technology]: { value: Category.Technology, description: 'For technology related posts' },
      },
    }),
    buildObjectType({
      name: 'Post',
      fields: {
        id: { type: 'ID!' },
        title: {
          type: 'String!',
        },
        slug: {
          type: 'String!',
        },
        date: {
          type: 'Date',
          extensions: { dateformat: {} },
        },
        draft: {
          type: 'Boolean',
        },
        tags: {
          type: '[String]!',
        },
        category: {
          type: 'PostCategory',
        },
        timeToRead: {
          type: 'Int',
          description: 'The time to read the article in minutes',
          resolve: mdxResolverPassthrough('timeToRead'),
        },
        excerpt: {
          type: 'String!',
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 256,
            },
          },
          resolve: mdxResolverPassthrough('excerpt'),
        },
        body: {
          type: 'String!',
          resolve: mdxResolverPassthrough('body'),
        },
        html: {
          type: 'String!',
          resolve: mdxResolverPassthrough('html'),
        },
        wordCount: {
          type: 'MdxWordCount',
          resolve: mdxResolverPassthrough('wordCount'),
        },
      },
      interfaces: ['Node'],
    }),
  ]);
};
