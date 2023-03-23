import * as user from "../../fixtures/user.json" ;
import BasePage from "./BasePage";

class AccountPage extends BasePage{

    visit(){
        cy.log('Open website login page');
        cy.visit('/index.php?rt=account/account');
    }

    verifyUserName(user){
        cy.get('h1 span.subtext').should('contain', user.firstName);
    }

    assertIncorrectPasswdLogin() {
        cy.get('.alert-error.alert-danger').should('have.text', '\n×\nError: Incorrect login or password provided.');
        cy.get('#loginFrm_loginname').should('have.attr', 'value')
        .and('include', user.userName);
    }

}
export default new AccountPage();