describe('newsfeed ui', () => {
  it('should open newfeed ui and search news item on input submit', () => {
    cy.visit('/newsui');

    cy.get('[data-testid=search-input]').focus().type('corona');

    cy.get('[data-testid=search-items]').should('not.exist');

    cy.get('[data-testid=search-news-button]').click();

    cy.location('href').should('contain', '/newsui?query=corona');

    cy.get('[data-testid=search-items]').should('exist');

  });

  it('should render server generated news content based on input query ', () => {
    cy.visit('/newsui?query=demo');

    cy.get('[data-testid=search-items]').should('exist');

  });

  it('should display news not found page when no news available for search query', () => {
    cy.intercept('/api/news', { fixture: 'emptyNewsResult.json' }).as('getEmptyNewsResult');

    cy.visit('/newsui');

    cy.get('[data-testid=search-input]').focus().type('--faked-no-news-query--');

    cy.get('[data-testid=search-news-button]').click();


    cy.wait('@getEmptyNewsResult');

    cy.get('[data-testid=search-items]').should('not.exist');


    cy.get('[data-testid=news-not-found]').should('exist');

  });
});
