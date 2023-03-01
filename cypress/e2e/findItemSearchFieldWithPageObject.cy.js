import LoginPage from '../support/pages/LoginPage';
import SearchPage from '../support/pages/SearchPage';
import ShoppingCartPage from '../support/pages/ShoppingCartPage';
import ProductPage from '../support/pages/ProductPage';
import * as user from '../fixtures/user.json'
import {
    headLessLogin,
} from "../support/helper";

it('searching for an item', () => {
    LoginPage.visit();

    cy.log('Authorize')
    headLessLogin(user);

  
    SearchPage.findItemWithSearchField('Nail Lacquer');
    SearchPage.getItemProductName('Nail Lacquer').click();
    ProductPage.submitProductCart();
    ShoppingCartPage.submitConfirmationCartCheckout();
    ShoppingCartPage.assertCartCheckoutSucces();
    })

