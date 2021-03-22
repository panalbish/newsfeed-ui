const { Env } = require('@humanwhocodes/env');
const env = new Env();

export default async function handler(request, response) {
  const { query } = JSON.parse(request.body);
  const { data, statusCode } = await getNews(query);
  return response.status(statusCode).json(data);
}

export const getNews = async (query) => {
  if (isEmpty(query)) {
    return {
      data: [],
      statusCode: 400
    };
  }

  try {
    const newsApikey = env.get(
      'NEWS_API_KEY',
      'af4d0066587d4c5d8961b9b3a868123b'
    );

    const newsResponse = await fetch(
      `https://newsapi.org/v2/everything?q=${query}`,
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${newsApikey}`
        }
      }
    );
    const responseData = await newsResponse.json();
    return {
      data: responseData?.articles ?? [],
      statusCode: newsResponse.status
    };
  } catch (error) {
    return {
      data: [],
      error: error.response?.body ?? error.message,
      statusCode: '500'
    };
  }
};

const isEmpty = (value) =>
  typeof value === 'undefined' || value === null || String(value).trim() === '';
