import * as user from "../../fixtures/user.json" ;
import BasePage from "./BasePage";

class ShoppingCartPage extends BasePage {
  getCartCheckout() {
    return cy.get('#cart_checkout1');
  }
  submitCartCheckout() {
    this.getCartCheckout().click();
  }
  submitConfirmationCartCheckout() {
    this.submitCartCheckout()
    cy.get('#checkout_btn').click();
  }
  assertCartCheckoutSucces() {
    cy.get('div .heading1 .maintext').should('have.text', ' Your Order Has Been Processed!')
  }

}
export default new ShoppingCartPage();