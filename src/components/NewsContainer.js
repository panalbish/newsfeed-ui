import { Container, Grid } from 'theme-ui';

import NewsSearchInput from '../components/NewsSearchInput';
import NewsItem from '../components/NewsItem';
import Header from '../components/Header';
import { useEffect, useReducer } from 'react';
import {
  initialState,
  searchInputReducer
} from '../reducers/searchInputReducers';
import NewsNotFound from '../components/NewsNotFound';

export default function NewsContainer({ searchQueryFromUrl, initialData }) {
  const [state, dispatch] = useReducer(
    searchInputReducer,
    initialState,
    () => ({
      ...initialState,
      query: searchQueryFromUrl,
      news: initialData?.data,
      error: initialData?.error ?? initialState.error
    })
  );
  const { error, news, status, query } = state;

  useEffect(
    function () {
      const getNewsData = async () => {
        if (status === 'loading') {
          try {
            const data = await fetchNews(query);
            return dispatch({ type: 'RESOLVE', data });
          } catch (error) {
            return dispatch({ type: 'REJECT', error });
          }
        }
      };
      getNewsData();
    },
    [status]
  );

  return (
    <>
      <Header />
      <Container as="main">
        <NewsSearchInput
          searchTerm={query}
          handleInputChange={(value) =>
            dispatch({
              type: 'SET_SEARCH_TERM',
              query: value
            })
          }
          handleSearchClick={() => dispatch({ type: 'FETCH' })}
          status={status}
        />
        {error && 'Error Occurred'}

        {news.length > 0 && (
          <Grid sx={styles.grid}>
            {news.map((currentNews, index) => (
              <NewsItem
                key={index}
                title={currentNews?.title}
                image={currentNews?.urlToImage}
                description={currentNews?.description}
                author={currentNews?.author}
                publishedAt={currentNews?.publishedAt}
                url={currentNews?.url}
              />
            ))}
          </Grid>
        )}
        {emptyNewsContent(news, searchQueryFromUrl) && <NewsNotFound />}
      </Container>
    </>
  );
}

const fetchNews = async (query) => {
  try {
    const response = await fetch('/api/news', {
      method: 'PUT',
      body: JSON.stringify({ query })
    });
    return await response.json();
  } catch (error) {
    console.error(`Error occurred: ${error.toString()}`);
    return {};
  }
};

const emptyNewsContent = (news, searchQueryFromUrl) => {
  return news.length === 0 && searchQueryFromUrl !== '';
};

const styles = {
  grid: {
    width: '90%',
    m: '0 auto',
    gridTemplateColumns: [
      '1 fr',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      'repeat(4, 1fr)'
    ],
    gridTemplateRows: 'auto',
    gridGap: '20px',
    justifyContent: 'center',
    alignItems: 'inherit'
  }
};
