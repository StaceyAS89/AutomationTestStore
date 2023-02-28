import * as user from "../../fixtures/user.json" ;
import BasePage from "./BasePage";

class SpecialOffersPage extends BasePage{

  visitSpecialOffersPage() {
    cy.get('#main_menu_top [data-id="menu_specials"]').click();
  }
 
  submitProduct(itemName) {
    cy.get(`.prdocutname[title='${itemName}']`).click();
  }  

}
export default new SpecialOffersPage();