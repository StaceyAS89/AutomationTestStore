import LoginPage from '../support/pages/LoginPage';
import ShoppingCartPage from '../support/pages/ShoppingCartPage';
import ProductPage from '../support/pages/ProductPage';
import SpecialOffersPage from '../support/pages/SpecialOffersPage';
import * as user from '../fixtures/user.json'
import {
    headLessLogin,
    findItem
} from "../support/helper";

it('Searching for an item', () => {
    LoginPage.visit();

    cy.log('Authorize')
    headLessLogin(user);

    SpecialOffersPage.visitSpecialOffersPage();
    SpecialOffersPage.submitProduct('Absolue Eye Precious Cells');
    ProductPage.submitProductCart();
    ShoppingCartPage.submitConfirmationCartCheckout();
    ShoppingCartPage.assertCartCheckoutSucces();
   })