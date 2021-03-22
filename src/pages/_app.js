import { ThemeProvider } from 'theme-ui';
// Load Typeface Fonts
import 'typeface-dm-sans';
import 'typeface-bree-serif';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
