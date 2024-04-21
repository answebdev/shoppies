/// <reference types="cypress" />

describe('Application Test Suite', () => {
  it('visits the main page of the application', () => {
    cy.visit('/');
    cy.url().should('include', '/');
    cy.log('Clearing local storage so that each test run starts fresh');
    cy.clearLocalStorage();
    cy.log('Checking that application starts with 0 nominated movies');
    cy.get('[data-testid=nominated-movies]').should('have.length', '0');

    cy.log('Checking that main page contains the lead text');
    cy.get('[data-testid=lead-text]').contains('Nominate your');
    cy.get('[data-testid=sub-lead-text]').contains('Search below to nominate');
  });

  it('searches for and nominates Toy Story movies', () => {
    cy.get('[data-testid=input]').type('Toy Story');

    cy.log('Checking that results contain "Toy Story • 1995"');
    cy.get('[data-testid=movie-title-and-year]')
      .eq(0)
      .should('contain', 'Toy Story • 1995');

    cy.log('Nominates Toy Story after clicking Nominate button');
    cy.get('[data-testid=nominate-btn]').eq(0).click();

    cy.log('Checking that results contain "Toy Story of Terror • 2013"');
    cy.get('[data-testid=movie-title-and-year]')
      .eq(4)
      .should('contain', 'Toy Story of Terror • 2013');

    cy.log('Nominates Toy Story of Terror after clicking Nominate button');
    cy.get('[data-testid=nominate-btn]').eq(4).click();

    cy.log('Checking that there are two nominated movies');
    cy.get('[data-testid=nominated-movies]').should('have.length', '2');

    cy.log('Movies Nominated count should be 2');
    cy.get('[data-testid=movie-count]').should('have.text', '2');

    cy.log('Checking that local storage works by reloading the page');
    cy.reload();
  });

  it('searches for and nominates Jaws movies', () => {
    cy.log('Clearing input before searching for new movie');
    cy.get('[data-testid=input]').clear();

    cy.get('[data-testid=input]').type('Jaws');

    cy.log('Checking that results contain "Jaws 2 • 1978"');
    cy.get('[data-testid=movie-title-and-year]')
      .eq(1)
      .should('contain', 'Jaws 2 • 1978');

    cy.log('Nominates Jaws 2 after clicking Nominate button');
    cy.get('[data-testid=nominate-btn]').eq(1).click();

    cy.log('Checking that Remove button removes nominated Jaws 2 movie');
    cy.get('[data-testid=remove-btn]').eq(2).click();

    cy.log('Checking that results contain "Jaws • 1975"');
    cy.get('[data-testid=movie-title-and-year]')
      .eq(0)
      .should('contain', 'Jaws • 1975');

    cy.log('Nominates Jaws after clicking Nominate button');
    cy.get('[data-testid=nominate-btn]').eq(0).click();

    cy.log('Checking that there are three nominated movies');
    cy.get('[data-testid=nominated-movies]').should('have.length', '3');

    cy.log('Movies Nominated count should be 3');
    cy.get('[data-testid=movie-count]').should('have.text', '3');
  });

  it('searches for and nominates Batman movie', () => {
    cy.log('Clearing input before searching for new movie');
    cy.get('[data-testid=input]').clear();

    cy.get('[data-testid=input]').type('Batman');

    cy.log('Checking that results contain "Batman Begins • 2005"');
    cy.get('[data-testid=movie-title-and-year]')
      .eq(0)
      .should('contain', 'Batman Begins • 2005');

    cy.log('Nominates Batman Begins after clicking Nominate button');
    cy.get('[data-testid=nominate-btn]').eq(0).click();

    cy.log('Checking that there are four nominated movies');

    cy.get('[data-testid=nominated-movies]').should('have.length', '4');

    cy.log('Movies Nominated count should be 4');
    cy.get('[data-testid=movie-count]').should('have.text', '4');
  });

  it('searches for and nominates The Hobbit movie', () => {
    cy.log('Clearing input before searching for new movie');
    cy.get('[data-testid=input]').clear();

    cy.get('[data-testid=input]').type('The Hobbit');

    cy.log(
      'Checking that results contain "The Hobbit • 1977"'
    );
    cy.get('[data-testid=movie-title-and-year]')
      .eq(3)
      .should('contain', 'The Hobbit • 1977');

    cy.log(
      'Nominates The Hobbit after clicking Nominate button'
    );
    cy.get('[data-testid=nominate-btn]').eq(3).click();

    cy.log('Checking that there are five nominated movies');
    cy.get('[data-testid=nominated-movies]').should('have.length', '5');

    cy.log('Movies Nominated count should be 5');
    cy.get('[data-testid=movie-count]').should('have.text', '5');
  });

  it('cancels the final choices', () => {
    cy.get('button').contains('Cancel').click();
  });

  it('removes Batman as final movie', () => {
    cy.log('Checking that Remove button removes nominated Batman Begins movie');
    cy.get('[data-testid=remove-btn]').eq(3).click();

    cy.log('Movies Nominated count should be 4');
    cy.get('[data-testid=movie-count]').should('have.text', '4');
  });

  it('selects Spiderman as final movie', () => {
    cy.log('Clearing input before searching for new movie');
    cy.get('[data-testid=input]').clear();

    cy.get('[data-testid=input]').type('Spiderman');

    cy.log(
      'Checking that results contain "Superman, Spiderman or Batman • 2011"'
    );
    cy.get('[data-testid=movie-title-and-year]')
      .eq(1)
      .should('contain', 'Superman, Spiderman or Batman • 2011');

    cy.log('Nominates Spiderman after clicking Nominate button');
    cy.get('[data-testid=nominate-btn]').eq(1).click();

    cy.log('Checking that there are five nominated movies');
    cy.get('[data-testid=nominated-movies]').should('have.length', '5');

    cy.log('Movies Nominated count should be 5');
    cy.get('[data-testid=movie-count]').should('have.text', '5');
  });

  it('resets the application', () => {
    cy.get('button').contains('Restart').click();

    cy.log('Checking that there are zero nominated movies');
    cy.get('[data-testid=nominated-movies]').should('have.length', '0');

    cy.log('Movies Nominated count should be 0');
    cy.get('[data-testid=movie-count]').should('have.text', '0');
  });
});
