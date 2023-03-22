///<reference types="cypress"/>

import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json';

user.firstName= faker.name.firstName();
user.lastName = faker.name.lastName();
user.email = faker.internet.email();
user.address = faker.address.streetAddress();
user.city = faker.address.city();
user.postCode = faker.address.zipCode('####');
user.userName = faker.internet.userName();
user.password = faker.internet.password(15);

beforeEach('', () => {
  cy.log('Open website home page')
  cy.visit('/')

  cy.log('Open login page')
  cy.get('.block_2 > #customernav')
  .click()
  .should('have.text', '\n\t\n\t\tLogin or register\n\t\n');
})
  it('Registration', () => {
    cy.log('Open website registartion page')
    cy.get('.pull-right[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type(user.firstName)
    .should('have.value', user.firstName);
    cy.get('#AccountFrm_lastname').type(user.lastName)
    .should('have.value', user.lastName);
    cy.get('#AccountFrm_email').type(user.email)
    .should('have.value', user.email);
    cy.get('#AccountFrm_telephone').type('+380934216460')
    .should('have.value', '+380934216460');
    cy.get('#AccountFrm_fax')
    .type('+380442369253')
    .should('have.value', '+380442369253');
    cy.get('#AccountFrm_company')
    .type('ITCompany')
    .should('have.value', 'ITCompany');
    cy.get('#AccountFrm_address_1')
    .type(user.address)
    .should('have.value', user.address);
    cy.get('#AccountFrm_address_2')
    .type('Address 2')
    .should('have.value', 'Address 2');
    cy.get('#AccountFrm_city')
    .type(user.city)
    .should('have.value', user.city);

    cy.get('#AccountFrm_zone_id')
    .select('Glasgow')
    .should('have.value', '3551')
    .children('[value=3551]')
    .should('have.text', 'Glasgow');

    cy.get('#AccountFrm_postcode')
    .type(user.postCode)
    .should('have.value', user.postCode);

    cy.get('select#AccountFrm_country_id')
    .select('United Kingdom')
    .should('have.value', '222')
    .children('[value="222"]')
    .should('have.text', 'United Kingdom');

    cy.get('#AccountFrm_loginname')
    .type(user.userName)
    .should('have.value', user.userName);

    cy.get('#AccountFrm_password')
    .type(user.password)
    .should('have.value', user.password)
    .and('have.attr', 'type')
    .and('include', 'password');
  
    cy.get('#AccountFrm_confirm')
    .type(user.password)
    .should('have.value', user.password)
    .and('have.attr', 'type')
    .and('include', 'password')

  cy.log('Check checkboxes')
    cy.get('#AccountFrm_newsletter1')
    .check()
    .should('include.checked', 'true');
    cy.get('#AccountFrm_agree')
    .check()
    .should('include.checked', 'true');
    cy.get('.btn-orange.pull-right')
    .click();

    cy.log('Verify user first name on account page')
    cy.get('span.maintext')
    .should('have.text', ' Your Account Has Been Created!');

    console.log(user)
  })

  it('Login', () => {
    cy.log('Check user is unathorized')
    cy.getCookie('customer').should('be.null')
    cy.log('Athorize user')
    cy.get('#loginFrm_loginname')
    .type(user.userName)
    .should('have.value', user.userName);

    cy.get('#loginFrm_password')
    .type(user.password)
    .should('have.value', user.password);
   cy.get('[title="Login"]')
    .click();
    cy.get('h1 span.subtext').should('have.text', user.firstName)
  })


