///<reference types="cypress"/>

import loginPage from '../support/pages/LoginPage'
import accountPage from '../support/pages/AccountPage'
import * as user from "../fixtures/user.json"



it('Authorization with incorrect password', () => {

   loginPage.visit();
   loginPage.submitLogFormWithIncorrectPassword(user);
   accountPage.assertIncorrectPasswdLogin();
}
)
it('Authorization with empty password', () => {

   loginPage.visit();
   loginPage.submitLogFormWithEmptyPassword(user);
   accountPage.assertIncorrectPasswdLogin();
})
