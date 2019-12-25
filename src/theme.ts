import { toTheme } from '@theme-ui/typography';
import twinPeaks from 'typography-theme-twin-peaks';

export const typographyTheme = toTheme(twinPeaks);

const colors = {
  text: '#000',
  background: '#fff',
  primary: 'hsl(240, 100%, 57%)',
  secondary: 'hsl(260, 100%, 57%)',
  accent: 'hsl(280, 100%, 57%)',
  muted: '#f9f9fc',
  gray: '#555',
  modes: {
    dark: {
      text: '#fff',
      background: 'hsl(180, 5%, 15%)',
      primary: 'hsl(180, 100%, 57%)',
      secondary: 'hsl(50, 100%, 57%)',
      accent: 'hsl(310, 100%, 57%)',
      muted: 'hsl(180, 5%, 5%)',
      gray: 'hsl(180, 0%, 70%)',
    },
  },
};

export type ColorVariants = 'light' | keyof typeof colors['modes'];

export const theme = {
  initialColorMode: 'light',
  colors,
  fonts: {
    monospace: '"Roboto Mono", Menlo, monospace',
    body: "'Crimson Text', serif",
    heading: "'Rosario', sans-serif",
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 600,
  },
  fontSizes: [17, 19, 21, 23, 27, 35, 48, 64, 72, 96],
  sizes: {
    container: 768,
    wide: 1280,
  },
  type: {
    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontFamily: 'heading',
      mt: 4,
      mb: 3,
    },
    small: {
      fontWeight: 'bold',
      fontSize: 0,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  prism: {
    '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
      color: 'gray',
    },
    '.comment': {
      fontStyle: 'italic',
    },
    '.property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable': {
      color: 'accent',
    },
    '.atrule, .attr-value, .keyword': {
      color: 'primary',
    },
    '.selector, .attr-name, .string, .char, .builtin, .inserted': {
      color: 'secondary',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 2,
    },
    a: {
      color: 'primary',
      ':hover,:focus': {
        color: 'secondary',
      },
    },
    h1: {
      variant: 'type.heading',
      fontSize: [5, 6],
    },
    h2: {
      variant: 'type.heading',
      fontSize: [4, 5],
    },
    h3: {
      variant: 'type.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'type.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'type.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'type.heading',
      fontSize: 0,
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      bg: 'muted',
      p: 3,
      borderRadius: 8,
      overflowX: 'auto',
      variant: 'prism',
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
    hr: {
      border: 0,
      my: 4,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      py: 2,
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      py: 2,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    blockquote: {
      fontWeight: 'bold',
      fontSize: 3,
      mx: 0,
      px: 3,
      my: 5,
      borderLeft: '4px solid',
    },
    navlink: {
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus': {
        color: 'primary',
      },
    },
    navitem: {
      variant: 'styles.navlink',
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'bold',
    },
  },
};

export const parseTypographyGoogleFonts = () => {
  const { googleFonts } = typographyTheme.typography.options;
  if (!googleFonts) {
    return;
  }

  return googleFonts.map(({ name, styles }) => `${name.split(' ').join('+')}:${styles.join(',')}`);
};
