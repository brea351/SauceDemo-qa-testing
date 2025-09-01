describe('SauceDemo Checkout & Order Confirmation Flow', () => {

  beforeEach(() => {
    // Login before each test
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Ensure inventory page loaded
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
  });

  it('Checkout with valid info and verify order confirmation', () => {
    // Add product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    // Proceed to checkout
    cy.get('[data-test="checkout"]').click();

    // Enter customer info
    cy.get('[data-test="firstName"]').type('Tosin');
    cy.get('[data-test="lastName"]').type('Williams');
    cy.get('[data-test="postalCode"]').type('100001');
    cy.get('[data-test="continue"]').click();

    // Verify order summary
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
    cy.get('.summary_total_label').should('contain', 'Total');

    // Finish checkout
    cy.get('[data-test="finish"]').click();

    // Assert order confirmation
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
    cy.get('.complete-text').should('contain', 'Your order has been dispatched');
  });

  it('Checkout with missing First Name shows error', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    // Leave First Name blank
    cy.get('[data-test="lastName"]').type('Williams');
    cy.get('[data-test="postalCode"]').type('100001');
    cy.get('[data-test="continue"]').click();

    // Assert error message
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
  });

  it('Cancel checkout process returns to cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    // Click cancel
    cy.get('[data-test="cancel"]').click();

    // Verify return to Cart page
    cy.url().should('include', '/cart.html');

    // Optional: continue shopping back to inventory
    cy.get('[data-test="continue-shopping"]').click();
    cy.url().should('include', '/inventory.html');
  });

});
