import {
    faker
} from '@faker-js/faker';
import BasePage from "./BasePage";


class RegistrationPage extends BasePage {
    constructor() {
        super();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.phone = faker.phone.number('+48 # ### ###');
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.postCode = faker.address.zipCode('####');
        this.userName = faker.internet.userName();
        this.password = faker.internet.password(15);
        this.emailInvalidProvider = faker.internet.email('Stacey', 'Lorance', 'netto');
        this.passwordLess4 = faker.internet.password(3);
        this.passwordMore20 = faker.internet.password(21);
    }

    visit() {
        cy.log('Open website registartion page');
        cy.visit('/index.php?rt=account/login');
    }

    clickRegistrationButton() {
        cy.get('.pull-right[title="Continue"]').click();
    }
    //Your Personal Details 
    getFirstNameField() {
        return cy.get('#AccountFrm_firstname');
    }
    getLastNameField() {
        return cy.get('#AccountFrm_lastname');
    }

    getEmailField() {
        return cy.get('#AccountFrm_email');
    }
    getTelephoneField() {
        return cy.get('#AccountFrm_telephone');
    }
    getFaxField() {
        return cy.get('#AccountFrm_fax');
    }

    //Your Address
    getCompanyField() {
        return cy.get('#AccountFrm_company');
    }
    getAddress1lField() {
        return cy.get('#AccountFrm_address_1');
    }
    getAddress2lField() {
        return cy.get('#AccountFrm_address_2');
    }
    getCityField() {
        return cy.get('#AccountFrm_city');
    }
    getRegionCityDropdown() {
        return cy.get('#AccountFrm_zone_id');
    }

    getZipCodeField() {
        return cy.get('#AccountFrm_postcode');
    }
    getCountryDropdown() {
        return cy.get('select#AccountFrm_country_id');
    }
    //Login Details
    getLoginNameField() {
        return cy.get('#AccountFrm_loginname');
    }
    getPasswordField() {
        return cy.get('#AccountFrm_password');
    }
    getPasswordConfirmField() {
        return cy.get('#AccountFrm_confirm');
    }

    //Newsletter  

    getSubscribeRadio() {
        return cy.get('#AccountFrm_newsletter1');
    }
    getAccounrAgreeCheck() {
        return cy.get('#AccountFrm_agree');
    }

    getContinueButton() {
        return cy.get('.btn-orange.pull-right');
    }

    assertAccountIsCreated() {
        cy.log('Verify user first name on account page')
        cy.get('span.maintext')
            .should('have.text', ' Your Account Has Been Created!');
    }

    submitRegistrationForm() {
        cy.log('Trying to register ...');
        this.getFirstNameField().type(this.firstName);
        this.getLastNameField().type(this.lastName);
        this.getEmailField().type(this.email);
        this.getTelephoneField().type(this.phone);
        this.getFaxField().type(this.phone);
        this.getCompanyField().type('ITCompany');
        this.getAddress1lField().type(this.address);
        this.getAddress2lField().type(this.address);
        this.getCityField().type(this.city);
        this.getRegionCityDropdown().select('Glasgow');
        this.getZipCodeField().type(this.postCode);
        this.getCountryDropdown().select('United Kingdom');
        this.getLoginNameField().type(this.userName);
        this.getPasswordField().type(this.password);
        this.getPasswordConfirmField().type(this.password);
        this.getSubscribeRadio().check();
        this.getAccounrAgreeCheck().check();
        this.getContinueButton().click();
    }

    submitRegFormInvalidEmailProvider() {
        cy.log('Trying to register ...');
        this.getFirstNameField().type(this.firstName);
        this.getLastNameField().type(this.lastName);
        this.getEmailField().type(this.emailInvalidProvider);
        this.getTelephoneField().type(this.phone);
        this.getFaxField().type(this.phone);
        this.getCompanyField().type('ITCompany');
        this.getAddress1lField().type(this.address);
        this.getAddress2lField().type(this.address);
        this.getCityField().type(this.city);
        this.getRegionCityDropdown().select('Glasgow');
        this.getZipCodeField().type(this.postCode);
        this.getCountryDropdown().select('United Kingdom');
        this.getLoginNameField().type(this.userName);
        this.getPasswordField().type(this.password);
        this.getPasswordConfirmField().type(this.password);
        this.getSubscribeRadio().check();
        this.getAccounrAgreeCheck().check();
        this.getContinueButton().click();

    }

    assertSubmitRegFormInvalidEmailProvider() {
        cy.log('Checking email error message')
        this.getEmailField()
            .parent()
            .next()
            .should('have.text', 'Email Address does not appear to be valid!')
    }

    submitRegFormWithPasswLessThan4() {
        cy.log('Trying to register ...');
        this.getFirstNameField().type(this.firstName);
        this.getLastNameField().type(this.lastName);
        this.getEmailField().type(this.email);
        this.getTelephoneField().type(this.phone);
        this.getFaxField().type(this.phone);
        this.getCompanyField().type('ITCompany');
        this.getAddress1lField().type(this.address);
        this.getAddress2lField().type(this.address);
        this.getCityField().type(this.city);
        this.getRegionCityDropdown().select('Glasgow');
        this.getZipCodeField().type(this.postCode);
        this.getCountryDropdown().select('United Kingdom');
        this.getLoginNameField().type(this.userName);
        this.getPasswordField().type(this.passwordLess4);
        this.getPasswordConfirmField().type(this.passwordLess4);
        this.getSubscribeRadio().check();
        this.getAccounrAgreeCheck().check();
        this.getContinueButton().click();

    }

    assertSubmitRegFormWithPasswLessThan4() {
        cy.log('Checking password error message')
        cy.get('.alert-error.alert-danger').should('have.text', '\n×\nPassword must be between 4 and 20 characters!');
    }


    submitRegFormWithPasswMoreThan20() {
        cy.log('Trying to register ...');
        this.getFirstNameField().type(this.firstName);
        this.getLastNameField().type(this.lastName);
        this.getEmailField().type(this.email);
        this.getTelephoneField().type(this.phone);
        this.getFaxField().type(this.phone);
        this.getCompanyField().type('ITCompany');
        this.getAddress1lField().type(this.address);
        this.getAddress2lField().type(this.address);
        this.getCityField().type(this.city);
        this.getRegionCityDropdown().select('Glasgow');
        this.getZipCodeField().type(this.postCode);
        this.getCountryDropdown().select('United Kingdom');
        this.getLoginNameField().type(this.userName);
        this.getPasswordField().type(this.passwordMore20);
        this.getPasswordConfirmField().type(this.passwordMore20);
        this.getSubscribeRadio().check();
        this.getAccounrAgreeCheck().check();
        this.getContinueButton().click();

    }

    assertSubmitRegFormWithPasswMoreThan20() {
        cy.log('Checking password error message')
        cy.get('.alert-error.alert-danger').should('have.text', '\n×\nPassword must be between 4 and 20 characters!');
    }

    submitRegFormWithPrivacyPolicyUnchecked() {
        cy.log('Trying to register ...');
        this.getFirstNameField().type(this.firstName);
        this.getLastNameField().type(this.lastName);
        this.getEmailField().type(this.email);
        this.getTelephoneField().type(this.phone);
        this.getFaxField().type(this.phone);
        this.getCompanyField().type('ITCompany');
        this.getAddress1lField().type(this.address);
        this.getAddress2lField().type(this.address);
        this.getCityField().type(this.city);
        this.getRegionCityDropdown().select('Glasgow');
        this.getZipCodeField().type(this.postCode);
        this.getCountryDropdown().select('United Kingdom');
        this.getLoginNameField().type(this.userName);
        this.getPasswordField().type(this.passwordMore20);
        this.getPasswordConfirmField().type(this.passwordMore20);
        this.getSubscribeRadio().check();
        this.getContinueButton().click();
    }

    assertSubmitRegFormWithPrivacyPolUnchecked() {
        cy.log('Checking privacy policy error message')
        cy.get('.alert-error.alert-danger').should('have.text', "\n×\nError: You must agree to the Privacy Policy!")
    }


}

export default new RegistrationPage();