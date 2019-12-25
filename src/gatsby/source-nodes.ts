import { SourceNodesArgs } from 'gatsby';
import { GraphQLFieldResolver, GraphQLObjectType } from 'graphql';

import { Maybe } from '../types';

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
  actions.createTypes(
    schema.buildObjectType({
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
      },
      interfaces: ['Node'],
    }),
  );
};
