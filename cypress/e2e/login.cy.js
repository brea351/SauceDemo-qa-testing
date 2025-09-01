describe('SauceDemo Login Flow', () => {

  const url = 'https://www.saucedemo.com/';

  it('Login with valid credentials', () => {
    cy.visit(url);
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Assertion
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('Login with invalid credentials', () => {
    cy.visit(url);
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();

    // Assertion
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

});
