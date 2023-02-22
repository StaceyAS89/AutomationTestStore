import * as user from '../fixtures/user.json';
import {
    headLessLogin
} from '../support/helper';

it('Open account page', () => {

    headLessLogin(user);
    cy.visit('/index.php?rt=account/account');
    cy.get('h1 span.subtext', {
        timeout: 20000
    }).should('contain', user.firstName);


})
it('Open order history page', () => {

    headLessLogin(user);
    cy.visit('/index.php?rt=account/history');
    cy.get('h1 span.maintext', {
        timeout: 20000
    }).should('contain', ' My Order History');


})