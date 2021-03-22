import Header from '../Header';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme';

describe('Header', () => {
  test('should contain navigation link in header', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByRole('link').href).toContain('/newsui');
    expect(container).toMatchSnapshot();
  });
});
