///<reference types="cypress"/>
beforeEach('', () => {
  cy.visit('https://automationteststore.com/')
  cy.get('.block_2 > #customernav')
  .click()
  .should('have.text', '\n\t\n\t\tLogin or register\n\t\n');
})

  it('Registration', () => {
    cy.get('.pull-right[title="Continue"]')
    .click();

    cy.get('#AccountFrm_firstname')
    .type('Anastasiia')
    .should('have.value', 'Anastasiia');

    cy.get('#AccountFrm_lastname')
    .type('Lazarenko')
    .should('have.value', 'Lazarenko');

    cy.get('#AccountFrm_email')
    .type('anastasia@gmail.com')
    .should('have.value', 'anastasia@gmail.com');

    cy.get('#AccountFrm_telephone')
    .type('+380934216460')
    .should('have.value', '+380934216460');

    cy.get('#AccountFrm_fax')
    .type('+380442369253')
    .should('have.value', '+380442369253');

    cy.get('#AccountFrm_company')
    .type('ITCompany')
    .should('have.value', 'ITCompany');

    cy.get('#AccountFrm_address_1')
    .type('Address 1')
    .should('have.value', 'Address 1');

    cy.get('#AccountFrm_address_2')
    .type('Address 2')
    .should('have.value', 'Address 2');

    cy.get('#AccountFrm_city')
    .type('Kyiv')
    .should('have.value', 'Kyiv');

    cy.get('#AccountFrm_zone_id')
    .select('Glasgow')
    .should('have.value', '3551')
    .children('[value=3551]')
    .should('have.text', 'Glasgow');

    cy.get('#AccountFrm_postcode')
    .type('03-287')
    .should('have.value', '03-287');

    cy.get('select#AccountFrm_country_id')
    .select('United Kingdom')
    .should('have.value', '222')
    .children('[value="222"]')
    .should('have.text', 'United Kingdom');


    cy.get('#AccountFrm_loginname')
    .type('StaceyASSSSSSSSSSSSS')
    .should('have.value', 'StaceyASSSSSSSSSSSSS');

    cy.get('#AccountFrm_password')
    .type('12345')
    .should('have.value', '12345')
    .and('have.attr', 'type')
    .and('include', 'password');
  

    cy.get('#AccountFrm_confirm')
    .type('12345')
    .should('have.value', '12345')
    .and('have.attr', 'type')
    .and('include', 'password');

    cy.get('#AccountFrm_newsletter1')
    .check()
    .should('include.checked', 'true');

    cy.get('#AccountFrm_agree')
    .check()
    .should('include.checked', 'true');

    cy.get('.btn-orange.pull-right')
    .click();

    cy.get('span.maintext')
    .should('have.text', ' Your Account Has Been Created!');

    cy.get('.side_account_list').contains('Logoff')
    .click();
  })

  it('Login', () => {
    cy.get('#loginFrm_loginname')
    .type('StaceyASSSSSSSSSSS')
    .should('have.value', 'StaceyASSSSSSSSSSS');

    cy.get('#loginFrm_password')
    .type('12345')
    .should('have.value', '12345');

    cy.get('[title="Login"]')
    .click();
  })

  after('', () => {
    cy.get('.side_account_list').contains('Logoff')
    .click();
  })
