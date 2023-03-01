///<reference types="cypress"/>

import RegistrationPage from '../support/pages/RegistrationPage';

it('Registration', () => {
  RegistrationPage.visit();
  RegistrationPage.clickRegistrationButton();
  RegistrationPage. submitRegistrationForm();
  RegistrationPage.assertAccountIsCreated();
})

