import { render, screen } from '@testing-library/react';

import NewsContainer from '../NewsContainer';
import theme from '../../theme';
import { ThemeProvider } from 'theme-ui';

describe('NewsContainer', () => {
  test('should render news card items', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <NewsContainer searchQueryFromUrl="test" initialData={stubbedNews} />
      </ThemeProvider>
    );
    expect(screen.getByTestId('search-input')).toHaveValue('test');
    expect(screen.getAllByRole('article').length).toBe(stubbedNews.data.length);

    expect(container).toMatchSnapshot();
  });

  test('should not render any news card when no news found for query', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <NewsContainer
          searchQueryFromUrl="--very-unique-query--"
          initialData={{ data: [] }}
        />
      </ThemeProvider>
    );
    expect(screen.getByTestId('search-input')).toHaveValue(
      '--very-unique-query--'
    );

    expect(screen.queryByRole('article')).toBe(null);

    expect(container).toMatchSnapshot();
  });
});

const stubbedNews = {
  data: [
    {
      title: 'Before You Pay for Spotify\'s "HiFi," Test Your Hearing',
      author: 'David Murphy',
      description:
        'As one who likes to rock out, I confess, I was excited that my streaming service of choice—Spotify—announced it’s rolling out a new service tier for lossless audio streaming. Sure, it’ll cost more than what I’m paying now, but throwing away an expected $20 a …',
      url:
        'https://lifehacker.com/before-you-pay-for-spotifys-hifi-test-your-hearing-1846345345',
      image:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/szeeqqwv6rzmsvrrwoxe.jpg',
      publishedAt: '2021-02-24T19:30:00Z'
    },
    {
      title: 'Baidu earns permission to test paid driverless taxi in Cangzhou',
      author: 'https://www.engadget.com/about/editors/igor-bonifacic',
      description:
        "Cangzhou granted the company's Apollo Go service permission to run commercialization tests with 35 cars.",
      url:
        'https://www.engadget.com/baidu-apollo-go-commercialization-tests-changzhou-195000304.html',
      image:
        'https://s.yimg.com/uu/api/res/1.2/fgoAosUWFeDMUIWocGU2QA--~B/aD00NTA7dz02NzU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2021-03/add0c050-85c6-11eb-9df7-af57add0c012.cf.jpg',
      publishedAt: '2021-03-15T19:50:00Z'
    },
    {
      title: "Netflix 'test' pushes password sharers to get their own account",
      author: 'Igor Bonifacic',
      description:
        "The days of Netflix taking a lax stance toward password sharing may be coming to an end. In a test spotted by The Streamable, the company has started sending a notification that prompts people to sign up for the service if it detects they're not in the same h…",
      url:
        'https://www.engadget.com/netflix-account-sharing-notification-test-215153548.html',
      image:
        'https://s.yimg.com/uu/api/res/1.2/I4AKus5jU2kUVkm9vNlfJg--~B/aD0zMzMzO3c9NTAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-03/4bc0c940-82b1-11eb-b5db-a11ca8bf00a4.cf.jpg',
      publishedAt: '2021-03-11T21:51:53Z'
    },
    {
      title:
        "Xbox test brings Microsoft's Chromium-based Edge browser to consoles",
      author: 'Jon Fingas',
      description:
        'You might finally have a good reason to use the web browser on your console for more than the bare necessities. The Verge reports that Microsoft has started testing a version of its Chromium-based Edge browser on the Xbox One and Series X/S. Participate in th…',
      url:
        'https://www.engadget.com/xbox-chromium-edge-browser-alpha-test-182753320.html',
      image:
        'https://s.yimg.com/uu/api/res/1.2/hyLZvJUSj71fg.NOgUHjdA--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-03/f8d7ff00-7f6d-11eb-bfbf-57b7e2dd56d8.cf.jpg',
      publishedAt: '2021-03-07T18:27:53Z'
    }
  ]
};
