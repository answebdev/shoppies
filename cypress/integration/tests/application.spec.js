/// <reference types="cypress" />

describe('Application Test Suite', () => {
  beforeEach(() => {
    // Intercept search requests and provide predictable mock data
    // for more reliable tests to account for changes in API over time
    cy.intercep('GET', '**/www.omdbapi.com/?s=Toy*&apikey=*', {
      statusCode: 200,
      body: {
        Search: [
          { Title: 'Toy Story', Year: '1995', imdbID: 'tt0114709' },
          { Title: 'Toy Story 2', Year: '1999', imdbID: 'tt0120363' },
          { Title: 'Toy Story 3', Year: '2010', imdbID: 'tt0435761' },
          { Title: 'Toy Story 4', Year: '2019', imdbID: 'tt1979376' },
          { Title: 'Toy Story of Terror', Year: '2013', imdbID: 'tt2441582' },
        ],
        totalResults: '5',
        Response: 'True',
      },
    }).as('getToyStory');

    cy.intercept('GET', '**/www.omdbapi.com/?s=Jaws*&apikey=*', {
      statusCode: 200,
      body: {
        Search: [
          { Title: 'Jaws', Year: '1975', imdbID: 'tt0073195' },
          { Title: 'Jaws 2', Year: '1978', imdbID: 'tt0077768' },
          { Title: 'Jaws 3-D', Year: '1983', imdbID: 'tt0085750' },
        ],
        totalResults: '3',
        Response: 'True',
      },
    }).as('getJaws');

    cy.intercept('GET', '**/www.omdbapi.com/?s=Batman*&apikey=*', {
      statusCode: 200,
      body: {
        Search: [
          { Title: 'Batman Begins', Year: '2005', imdbID: 'tt0372784' },
          { Title: 'The Batman', Year: '2022', imdbID: 'tt1877830' },
          { Title: 'Batman', Year: '1989', imdbID: 'tt0096895' },
          { Title: 'Batman Returns', Year: '1992', imdbID: 'tt0103776' },
        ],
        totalResults: '4',
        Response: 'True',
      },
    }).as('getBatman');

    cy.intercept('GET', '**/www.omdbapi.com/?s=The%20Hobbit*&apikey=*', {
      statusCode: 200,
      body: {
        Search: [
          { Title: 'The Hobbit', Year: '1977', imdbID: 'tt0076154' },
          {
            Title: 'The Hobbit: An Unexpected Journey',
            Year: '2012',
            imdbID: 'tt0903624',
          },
        ],
        totalResults: '2',
        Response: 'True',
      },
    }).as('getHobbit');

    cy.intercept('GET', '**/www.omdbapi.com/?s=Spiderman*&apikey=*', {
      statusCode: 200,
      body: {
        Search: [
          { Title: 'Spider-Man', Year: '2002', imdbID: 'tt0145487' },
          {
            Title: 'Superman, Spiderman or Batman',
            Year: '2011',
            imdbID: 'tt2084920',
          },
        ],
        totalResults: '2',
        Response: 'True',
      },
    }).as('getSpiderman');
  });

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

    cy.log('Checking that results contain "The Hobbit • 1977"');
    cy.get('[data-testid=movie-title-and-year]')
      .eq(0)
      .should('contain', 'The Hobbit • 1977');

    cy.log('Nominates The Hobbit after clicking Nominate button');
    cy.get('[data-testid=nominate-btn]').eq(0).click();

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
      'Checking that results contain "Superman, Spiderman or Batman • 2011"',
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
