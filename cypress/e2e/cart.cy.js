describe('SauceDemo Cart Flow', () => {

  beforeEach(() => {
    // Login before each test
    cy.visit('/');  // now uses baseUrl;
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Ensure inventory page loaded
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
  });

  it('Add single product to cart and verify', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
  });

  it('Add multiple products to cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_badge').should('contain', '2');
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').eq(0).should('contain', 'Sauce Labs Backpack');
    cy.get('.inventory_item_name').eq(1).should('contain', 'Sauce Labs Bike Light');
  });

  it('Remove product from cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.cart_item').should('have.length', 0);
  });

  it('Continue shopping from cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Verify cart badge updates correctly', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_badge').should('contain', '2');
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

});
