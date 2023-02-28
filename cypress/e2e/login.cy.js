import * as user from "../fixtures/user.json" 
import { faker } from '@faker-js/faker';

it('Login/Authorization', () => {

    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('#loginFrm_password').type(user.password);

    cy.get('button[type="submit"]').contains('Login').click();

    cy.get('h1 span.subtext').should('contain', user.firstName);

})