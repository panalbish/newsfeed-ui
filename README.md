# newsfeed-ui

[Next.js](https://nextjs.org/) and [Theme UI](https://theme-ui.com/) based Newsfeed UI.

## Getting Started

## Development

Install latest node, yarn package manager (v1) and run:

```bash
yarn install
yarn dev
```


## Test

```bash
yarn test
```

Open [http://localhost:3000/newsui](http://localhost:3000/newsui) with your browser to see the result.

You can start editing the page by modifying `pages/newsui.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/news](http://localhost:3000/api/news). This endpoint can be edited in `pages/api/news.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Newsfeed usage

* Server rendered news content using query parameter
  ```
  https://newsfeed-ui.vercel.app/newsui?query=demo
  ```

* Client side request as singe-page-application. Enter the news query and search from the client side. On submitting the
  query, the input query is synced to url request query. So that, during the browser reload we won't loose the query
  input and result page.
  ```
  https://newsfeed-ui.vercel.app/newsui
  ```

## Deployment

The Newsfeed UI app is deployed in the [Vercel Platform](https://vercel.com/).




