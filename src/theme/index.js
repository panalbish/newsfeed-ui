import { base, dark } from '@theme-ui/presets';

const theme = {
  ...base,
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  colors: {
    ...base.colors,
    modes: {
      dark: {
        ...dark.colors
      }
    }
  },
  spinner: {
    color: 'white',
    width: 24,
    height: 24
  },

  fonts: {
    body: 'DM Sans',
    heading: "'Bree Serif', serif",
    monospace: 'Menlo, monospace'
  },
  images: {
    logo: {
      width: 48,
      height: 48
    }
  },
  layout: {
    container: {
      maxWidth: 1024,
      mx: 'auto',
      py: 3,
      px: 4
    }
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      color: 'background',
      bg: 'primary'
    },
    disabled: {
      cursor: 'not-allowed',
      color: 'background',
      bg: 'gray'
    }
  },
  links: {
    nav: {
      fontFamily: 'body'
    }
  },
  breakpoints: ['480px', '768px', '1024px']
};

export default theme;
