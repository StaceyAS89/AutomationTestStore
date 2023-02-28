import * as user from '../fixtures/user.json';
import {
    loginViaUI
} from '../support/helper';
import {
    makeOrder
} from '../support/helper';


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
    makeOrder();
})