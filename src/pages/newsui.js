import { parseUrl } from 'query-string';
import { getNews } from './api/news';
import NewsContainer from '../components/NewsContainer';

export default function NewsUi({ searchQueryFromUrl, initialData }) {
  return (
    <NewsContainer
      searchQueryFromUrl={searchQueryFromUrl}
      initialData={initialData}
    />
  );
}

export const getServerSideProps = async ({ req }) => {
  const searchQueryFromUrl = buildSearchQuery(req.url);
  return {
    props: {
      searchQueryFromUrl,
      initialData: await getNews(searchQueryFromUrl)
    }
  };
};

const buildSearchQuery = (url) => {
  const { query } = parseUrl(url).query;
  return query ?? '';
};
