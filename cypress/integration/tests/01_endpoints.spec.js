/// <reference types="cypress" />

describe('First test suite - endpoint', () => {
  it('should return movie data', () => {
    Cypress.env();
    cy.log('Checking that endpoint works and returns the movie data');
    cy.request({
      method: 'GET',
      url: `https://www.omdbapi.com/?s=jaws&apikey=${Cypress.env(
        'CYPRESS_KEY'
      )}`,
    }).should((response) => {
      cy.log(JSON.stringify(response.body));
    });
  });
});
