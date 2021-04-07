import Link from 'next/link';
import {
  Container,
  Flex,
  IconButton,
  Image,
  NavLink,
  useColorMode
} from 'theme-ui';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    // see theme.layout.container for styles
    <Container as="header" sx={styles.header}>
      <Flex as="nav">
        {/* passHref is required with NavLink */}
        <Link href="/newsui" passHref data-testid="newsui-link">
          <NavLink sx={styles.headerLink}>
            <Image src="images/logo.svg" variant="logo" />
            <h1>NewsFeed</h1>
          </NavLink>
        </Link>
        <IconButton
          aria-label="Toggle dark mode"
          sx={styles.colorMode}
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 219.8 219.8"
            width="24"
            height="24"
            fill="currentcolor"
          >
            {colorMode === 'light' ? <LightModeSvgPath /> : <DarkModeSvgPath />}
          </svg>
        </IconButton>
      </Flex>
    </Container>
  );
};

export default Header;

const styles = {
  header: {
    borderBottom: 'thin solid #dedede'
  },
  headerLink: {
    display: 'flex',
    p: 2,
    gap: 2,
    alignItems: 'center'
  },
  colorMode: {
    cursor: 'pointer',
    ml: 'auto',
    alignSelf: 'center'
  }
};

const LightModeSvgPath = () => {
  return (
    <path d="M109.9 183.5a7.5 7.5 0 00-7.5 7.5v21.3a7.5 7.5 0 0015 0V191c0-4.2-3.4-7.5-7.5-7.5zM109.9 36.3c4.1 0 7.5-3.3 7.5-7.5V7.5a7.5 7.5 0 10-15 0v21.3c0 4.2 3.3 7.5 7.5 7.5zM47.3 162l-15.1 15a7.5 7.5 0 1010.6 10.6l15-15a7.5 7.5 0 10-10.5-10.7zM167.2 60c2 0 3.8-.7 5.3-2.1l15-15.1A7.5 7.5 0 00177 32.2l-15 15a7.5 7.5 0 005.2 12.9zM36.3 109.9c0-4.1-3.3-7.5-7.5-7.5H7.5a7.5 7.5 0 000 15h21.3c4.2 0 7.5-3.4 7.5-7.5zM212.3 102.4H191a7.5 7.5 0 100 15h21.3a7.5 7.5 0 100-15zM47.3 57.9a7.5 7.5 0 0010.6 0c2.9-3 2.9-7.7 0-10.6L42.8 32.2a7.5 7.5 0 10-10.6 10.6l15 15zM172.5 162a7.5 7.5 0 00-10.6 10.5l15 15a7.5 7.5 0 0010.7 0c3-2.8 3-7.6 0-10.5l-15-15zM109.9 51.5a58.4 58.4 0 10.1 116.9 58.4 58.4 0 00-.1-116.9zm0 101.8a43.4 43.4 0 110-86.9 43.4 43.4 0 010 86.9z" />
  );
};

const DarkModeSvgPath = () => {
  return (
    <path d="M159.8 128a7.5 7.5 0 00-6-4.7 69.4 69.4 0 01-54.8-42c-9.4-22.7-6-49 9-68.6a7.5 7.5 0 00-5-12A84.7 84.7 0 0060 6.4 83.6 83.6 0 0014.4 52a84 84 0 0077.8 116.3 83.6 83.6 0 0066.6-32.9c1.7-2 2-5 1-7.4zm-41.3 20a69 69 0 01-90.3-90.3A68.7 68.7 0 0188.8 15a84.4 84.4 0 00-3.6 72 84.4 84.4 0 0053.4 48.2 69.2 69.2 0 01-20 12.7z" />
  );
};
