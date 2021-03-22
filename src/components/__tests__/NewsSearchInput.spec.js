import { render, screen } from '@testing-library/react';
import NewsSearchInput from '../NewsSearchInput';

describe('NewsSearchInput', () => {
  test('should disable news search button when input field is empty', () => {
    render(
      <NewsSearchInput
        searchTerm=""
        handleInputChange={() => {}}
        status="idle"
        handleSearchClick={() => {}}
      />
    );
    expect(screen.getByTestId('search-input')).toHaveValue('');
    expect(screen.getByTestId('search-news-button')).toBeDisabled();
  });

  test('should able to click the search button when input is not empty', () => {
    render(
      <NewsSearchInput
        searchTerm="some value"
        handleInputChange={() => {}}
        status="idle"
        handleSearchClick={() => {}}
      />
    );
    expect(screen.getByTestId('search-input')).toHaveValue('some value');
    expect(screen.getByTestId('search-news-button')).toBeEnabled();
  });
});
