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

user.emailInvalidProvider = faker.internet.email('Stacey', 'Lorance', 'netto');
user.passwordLess4 = faker.internet.password(3);
user.passwordMore20 = faker.internet.password(21);


beforeEach('', () => {
  cy.log('Open website home page')
  cy.visit('https://automationteststore.com/')

  cy.log('Open login page')
  cy.get('.block_2 > #customernav')
  .click()
  .should('have.text', '\n\t\n\t\tLogin or register\n\t\n');
})

  it(('Invalid email provider'), () => {
    cy.log('Open website registartion page')
    cy.get('.pull-right[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type(user.firstName);
    cy.get('#AccountFrm_lastname').type(user.lastName);
    cy.get('#AccountFrm_email').type(user.emailInvalidProvider);
    cy.get('#AccountFrm_telephone').type('+380934216460');
    cy.get('#AccountFrm_fax').type('+380442369253');
    cy.get('#AccountFrm_company').type('ITCompany');
    cy.get('#AccountFrm_address_1').type(user.address)
    .should('have.value', user.address);
    cy.get('#AccountFrm_address_2').type('Address 2');
    cy.get('#AccountFrm_city').type(user.city);

    cy.get('#AccountFrm_zone_id')
    .select('Glasgow')
    .should('have.value', '3551')
    .children('[value=3551]')
    .should('have.text', 'Glasgow');

    cy.get('#AccountFrm_postcode').type(user.postCode);

    cy.get('select#AccountFrm_country_id')
    .select('United Kingdom')
    .should('have.value', '222')
    .children('[value="222"]')
    .should('have.text', 'United Kingdom');

    cy.get('#AccountFrm_loginname').type(user.userName);

    cy.get('#AccountFrm_password').type(user.password).should('have.value', user.password)
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

    cy.log('Checking email error message')
    cy.get('#AccountFrm_email')
    .parent()
    .next()
    .should('have.text', 'Email Address does not appear to be valid!')

    console.log(user)

  })

  it(('Password field less than 4 letters'), () => {
    cy.log('Open website registartion page')
    cy.get('.pull-right[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type(user.firstName)
    cy.get('#AccountFrm_lastname').type(user.lastName)
    cy.get('#AccountFrm_email').type(user.email)
    cy.get('#AccountFrm_telephone').type('+380934216460');
    cy.get('#AccountFrm_fax').type('+380442369253');
    cy.get('#AccountFrm_company').type('ITCompany');
    cy.get('#AccountFrm_address_1').type(user.address);
    cy.get('#AccountFrm_address_2').type('Address 2');
    cy.get('#AccountFrm_city').type(user.city);

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
    .type(user.passwordLess4)
    .should('have.value', user.passwordLess4)
    .and('have.attr', 'type')
    .and('include', 'password');
  
    cy.get('#AccountFrm_confirm')
    .type(user.passwordLess4)
    .should('have.value', user.passwordLess4)
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

    cy.log('Checking password error message')
    cy.get('.alert-error.alert-danger')
    .should('have.text', '\n×\nPassword must be between 4 and 20 characters!');
  })

  it(('Password field more than 20 letters'), () => {
    cy.log('Open website registartion page')
    cy.get('.pull-right[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type(user.firstName)
    cy.get('#AccountFrm_lastname').type(user.lastName)
    cy.get('#AccountFrm_email').type(user.email)
    cy.get('#AccountFrm_telephone').type('+380934216460');
    cy.get('#AccountFrm_fax').type('+380442369253');
    cy.get('#AccountFrm_company').type('ITCompany');
    cy.get('#AccountFrm_address_1').type(user.address);
    cy.get('#AccountFrm_address_2').type('Address 2');
    cy.get('#AccountFrm_city').type(user.city);

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
    .type(user.passwordMore20)
    .should('have.value', user.passwordMore20)
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

    cy.log('Checking password error message')
    cy.get('.alert-error.alert-danger')
    .should('have.text', '\n×\nPassword must be between 4 and 20 characters!Password confirmation does not match password!');
  })

  it(('Privacy policy is unchecked'), () => {
    cy.log('Open website registration page')
    cy.get('.pull-right[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type(user.firstName)
    cy.get('#AccountFrm_lastname').type(user.lastName)
    cy.get('#AccountFrm_email').type(user.email)
    cy.get('#AccountFrm_telephone').type('+380934216460');
    cy.get('#AccountFrm_fax').type('+380442369253');
    cy.get('#AccountFrm_company').type('ITCompany');
    cy.get('#AccountFrm_address_1').type(user.address);
    cy.get('#AccountFrm_address_2').type('Address 2');
    cy.get('#AccountFrm_city').type(user.city);

    cy.get('#AccountFrm_zone_id')
    .select('Glasgow')
    .should('have.value', '3551')
    .children('[value=3551]')
    .should('have.text', 'Glasgow');

    cy.get('#AccountFrm_postcode').type(user.postCode).should('have.value', user.postCode);

    cy.get('select#AccountFrm_country_id')
    .select('United Kingdom')
    .should('have.value', '222')
    .children('[value="222"]')
    .should('have.text', 'United Kingdom');

    cy.get('#AccountFrm_loginname').type(user.userName);
    cy.get('#AccountFrm_password').type(user.password)
    .should('have.attr', 'type')
    .and('include', 'password');
  
    cy.get('#AccountFrm_confirm').type(user.password)
    .should('have.attr', 'type')
    .and('include', 'password')

  cy.log('Check checkboxes')
    cy.get('#AccountFrm_newsletter1')
    .check()
    .should('include.checked', 'true');
   
    cy.get('.btn-orange.pull-right')
    .click();

    cy.log('Checking privacy policy error message')
    cy.get('.alert-error.alert-danger')
    .should('have.text', "\n×\nError: You must agree to the Privacy Policy!")
  })