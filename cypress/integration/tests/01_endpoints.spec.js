/// <reference types="cypress" />

describe('First test suite - endpoint', () => {
  it('should return movie data', () => {
    Cypress.env();
    cy.log('Checking that endpoint works and returns the movie data');
    cy.request({
      method: 'GET',
      url: `https://www.omdbapi.com/?s=jaws&apikey=1ec7b4c0
      )}`,
    }).should((response) => {
      cy.log(JSON.stringify(response.body));
    });
  });
});
