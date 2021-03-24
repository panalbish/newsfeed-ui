import { Box, Flex, Heading, Text } from 'theme-ui';

const NewsItem = ({ title, author, description, url, image, publishedAt }) => {
  return (
    <Flex as="a" sx={styles.cardItem} href={url}>
      <Box
        as="div"
        sx={styles.cardImage}
        style={{
          backgroundImage: `url(${image ?? '/images/default-news-banner.png'})`
        }}
      />
      <Flex as="article" sx={styles.cardArticle} data-testid="search-article">
        <Heading as="h1" sx={styles.cardTitle}>
          {title}
        </Heading>
        <Box as="p" sx={styles.cardContent}>
          {description}
        </Box>
        <Text as="span" sx={styles.cardNewsPublishInfo}>
          {normalizeAuthor(author)} {normalizePublishDate(publishedAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default NewsItem;

const styles = {
  grid: {
    gridGap: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: ['repeat(1, 1fr)', '7fr 3fr'],
    mb: 4
  },
  cardItem: {
    background: 'white',
    textDecoration: 'none',
    color: '#444',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    flexDirection: 'column',
    minHeight: '100%',
    position: 'relative',
    top: 0,
    transition: 'all .1s ease-in',
    ':hover': {
      top: '-2px',
      boxShadow: '0 4px 5px rgba(0,0,0,0.2)'
    }
  },
  cardImage: {
    pb: '60%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  cardArticle: {
    p: '20px',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  cardTitle: {
    fontSize: 3,
    m: 0,
    color: '#333',
    wordBreak: 'break-word'
  },
  cardContent: {
    flex: 1,
    lineHeight: 1.4,
    my: 3
  },
  cardNewsPublishInfo: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#e22573',
    textTransform: 'uppercase',
    letterSpacing: '.04em',
    m: '2em 0 0 0'
  }
};

const normalizeAuthor = (author) => {
  return author?.indexOf(',') !== -1
    ? author?.substring(0, author?.indexOf(',')) + ' and others'
    : author;
};

const normalizePublishDate = (dateString) => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const day = date.getDate();

  return `/ ${day} ${month} ${year}`;
};
