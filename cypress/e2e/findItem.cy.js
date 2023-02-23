import * as user from '../fixtures/user.json'
import {
    headLessLogin,
    findItem
} from "../support/helper";

it('searching for an item', () => {
    cy.log('Authorize')
    headLessLogin(user);
    cy.visit('/index.php?rt=account/account');
    cy.get('h1 span.subtext', {
        timeout: 20000
    }).should('contain', user.firstName);

    cy.log('searching for an item')
    cy.get('.search-bar #filter_keyword').type(`E{enter}`);
    findItem('Fluid shine nail polish');
})