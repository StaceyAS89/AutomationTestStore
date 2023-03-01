import BasePage from "./BasePage";

class ProductPage extends BasePage {
  getProductQuantity() {
    return cy.get('#product_quantity');
  }

  getProductCart() {
    return cy.get('.productpagecart a.cart');
  }

  getProductOutOfStock() {
    return cy.get('.nostock');
  
  }

  assertProductIsOutOfStock() {
    this.getProductOutOfStock().should('have.text', 'Out of Stock');
  }

  submitProductCart() {
      this.getProductCart().click();
  }

}
export default new ProductPage();