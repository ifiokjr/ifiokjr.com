/** @jsx jsx */

import { Global } from '@emotion/core';
import { Link } from 'gatsby';
import { FC, Fragment } from 'react';
import { FaGithub as GitHub, FaTwitter as Twitter } from 'react-icons/fa';
import { jsx, Styled, useColorMode } from 'theme-ui';

import { useSiteMetadata } from '../hooks';
import { Avatar } from './avatar';

const modes = ['light', 'dark'] as const;

interface Modes {
  mode: typeof modes[number];
}

interface ColorButtonProps {
  mode: Modes;
}

const ColorButton: FC<ColorButtonProps & JSX.IntrinsicElements['button']> = ({ mode, ...props }) => (
  <button
    {...props}
    title='Cycle Color Mode'
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ':hover,:focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none',
      },
    }}
  >
    <svg
      viewBox='0 0 32 32'
      width='24'
      height='24'
      fill='currentcolor'
      sx={{
        display: 'block',
      }}
    >
      <circle cx='16' cy='16' r='14' fill='none' stroke='currentcolor' strokeWidth='4' />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>
);

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [mode, setMode] = useColorMode();
  const cycleMode = () => {
    const i = modes.indexOf(mode);
    const n = (i + 1) % modes.length;
    setMode(modes[n]);
  };

  const { copyright } = useSiteMetadata();

  return (
    <Fragment>
      <div
        sx={{
          variant: 'styles.root',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Global
          styles={{
            '*': {
              boxSizing: 'border-box',
            },
            body: {
              margin: 0,
            },
          }}
        />
        <header
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            maxWidth: 'wide',
            mx: 'auto',
            px: 3,
            py: 4,
          }}
        >
          <Styled.a
            as={Link}
            {...{ to: '/' }}
            sx={{
              variant: 'styles.navitem',
              mr: 3,
            }}
          >
            <Avatar size={32} sx={{ mr: 2 }} />
            Ifiok Jr.
          </Styled.a>
          <Styled.a
            as={Link}
            {...{ to: '/writings' }}
            sx={{
              variant: 'styles.navitem',
              mr: 3,
            }}
          >
            Writings
          </Styled.a>
          <div sx={{ mx: 'auto' }} />
          <ColorButton mode={mode} onClick={cycleMode} />
        </header>
        <main
          sx={{
            width: '100%',
            maxWidth: 'wide',
            px: 3,
            mx: 'auto',
            flex: '1 1 auto',
          }}
        >
          {children}
        </main>
        <footer
          sx={{
            px: 3,
            py: 5,
            width: '100%',
            maxWidth: 'wide',
            mx: 'auto',
          }}
        >
          <div
            sx={{
              py: 4,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link to='/'>
              <Avatar size={32} />
            </Link>
            <a
              href='https://twitter.com/ifiokjr'
              title='Twitter'
              sx={{
                variant: 'styles.navitem',
                mx: 3,
              }}
            >
              <Twitter size={24} />
            </a>
            <a
              href='https://github.com/ifiokjr'
              title='GitHub'
              sx={{
                variant: 'styles.navitem',
              }}
            >
              <GitHub size={24} />
            </a>
          </div>
          <div
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              fontSize: 0,
            }}
          >
            <Styled.a
              as={Link}
              {...{ to: '/' }}
              sx={{
                variant: 'styles.navitem',
                mr: 3,
              }}
            >
              ifiokjr
            </Styled.a>
            <Styled.a
              as={Link}
              {...{ to: '/writings' }}
              sx={{
                variant: 'styles.navitem',
                mr: 3,
              }}
            >
              Writings
            </Styled.a>
            <Styled.a
              as={Link}
              {...{ to: '/about' }}
              sx={{
                variant: 'styles.navitem',
                mr: 4,
              }}
            >
              About
            </Styled.a>
            <div sx={{ mx: 'auto' }} />
            <div sx={{ my: 2 }}>{copyright}</div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};
