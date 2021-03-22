import { Button, Grid, Input, Spinner } from 'theme-ui';
import { useRouter } from 'next/router';

const NewsSearchInput = ({
  status,
  searchTerm,
  handleInputChange,
  handleSearchClick
}) => {
  const router = useRouter();

  const disabledButton = searchTerm === '';

  return (
    <Grid as="form" sx={styles.grid} onSubmit={handleSearchClick}>
      <Input
        required
        type="search"
        value={searchTerm}
        placeholder="Enter the news keyword"
        onChange={(event) => {
          return handleInputChange(event.target.value);
        }}
        data-testid="search-input"
      />
      <Button
        onClick={(event) => {
          event.preventDefault();
          router.push(`${router.pathname}?query=${searchTerm}`, undefined, {
            shallow: true
          });
          return handleSearchClick();
        }}
        sx={styles.searchButton}
        variant={disabledButton ? 'buttons.disabled' : 'buttons.primary'}
        disabled={disabledButton}
        data-testid="search-news-button"
      >
        {status === 'loading' ? <Spinner variant="spinner" /> : 'Search'}
      </Button>
    </Grid>
  );
};

export default NewsSearchInput;

const styles = {
  grid: {
    gridGap: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: ['repeat(1, 1fr)', '7fr 3fr'],
    mt: 3,
    mb: 4
  },
  searchButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
