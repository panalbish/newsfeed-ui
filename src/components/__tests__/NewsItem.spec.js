import NewsItem from '../NewsItem';
import { render } from '@testing-library/react';

describe('NewsItem', () => {
  test('should render news item card component', () => {
    const cardContent = {
      author: 'Test User',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. A',
      publishedAt: '2021-02-24T19:30:00Z',
      title: 'Test title',
      url: 'https://some-url/news-id/1',
      image: 'https://some-url/szeeqqwv6rzmsvrrwoxe.jpg'
    };
    const { container } = render(<NewsItem {...cardContent} />);
    expect(container).toMatchSnapshot();
  });
});
