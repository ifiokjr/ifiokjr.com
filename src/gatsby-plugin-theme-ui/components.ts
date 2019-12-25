import Prism from '@theme-ui/prism';
import { PropsWithChildren } from 'react';

export default {
  pre: (props: PropsWithChildren<{}>) => props.children,
  code: Prism,
};
