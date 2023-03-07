///<reference types="cypress"/>

import RegistrationPage from '../support/pages/RegistrationPage';

beforeEach(()=> {
  RegistrationPage.visit();
  RegistrationPage.clickRegistrationButton();

})

it('Registration negative with InvalidEmailProvider', () => {
  RegistrationPage.submitRegFormInvalidEmailProvider();
  RegistrationPage.assertSubmitRegFormInvalidEmailProvider(); 
})

it('Registration negative with Password LessThan4',  () => {
  RegistrationPage.submitRegFormWithPasswLessThan4();
  RegistrationPage.assertSubmitRegFormWithPasswLessThan4();

})


it('Registration negative with Password LessThan4',  () => {
  RegistrationPage.submitRegFormWithPasswLessThan4();
  RegistrationPage.assertSubmitRegFormWithPasswLessThan4();

})


it('Registration negative with Password More Than 20',  () => {
  RegistrationPage.submitRegFormWithPasswMoreThan20();
  RegistrationPage.assertSubmitRegFormWithPasswMoreThan20();

})


it('Registration negative with PrivacyPolicyUnchecked',  () => {
  RegistrationPage.submitRegFormWithPrivacyPolicyUnchecked();
  RegistrationPage.assertSubmitRegFormWithPrivacyPolUnchecked();
})

