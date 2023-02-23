import * as user from '../fixtures/user.json';
import { loginViaUI } from '../support/helper';  


before('', () => {
loginViaUI(user);
})

it('Order', () => {
    cy.log('Go to checkout')
    cy.get('#main_menu_top .top.menu_checkout ').click();

    cy.log('Choose an item')
    cy.get('[title="Continue"]').click();
    cy.get('#special [title="Absolue Eye Precious Cells"]').click();

    cy.log('Confirm an order')
    cy.get('.productpagecart .cart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click;
    cy.get('.heading1').should('have.text', '\n\t Checkout Confirmation\n\t\n');
    cy.log('Checking message about an order')
    cy.get('#checkout_btn').click();
    cy.get('div .heading1 .maintext').should('have.text', ' Your Order Has Been Processed!');
})