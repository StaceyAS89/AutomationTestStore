
import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json';


before('', () => {
    cy.log('Open website home page')
    cy.visit('https://automationteststore.com/')
  
    cy.log('Open login page')
    cy.get('.block_2 > #customernav')
    .click()
    .should('have.text', '\n\t\n\t\tLogin or register\n\t\n');

    cy.log('Check user is unathorized')
    cy.getCookie('customer').should('be.null'); 

    cy.log('Authorize user')
    cy.get('#loginFrm_loginname')
    .type(user.userName);

    cy.get('#loginFrm_password')
    .type(user.password)
    .should('have.value', user.password);
   cy.get('[title="Login"]')
    .click();
    cy.get('h1 span.subtext').should('have.text', user.firstName);  
  })

it('Order', () => {
cy.log('Go to checkout')    
cy.get('#main_menu_top .top.menu_checkout ')
.click();
 

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