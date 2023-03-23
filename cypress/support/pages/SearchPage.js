import * as user from "../../fixtures/user.json" ;
import BasePage from "./BasePage";

class SearchPage extends BasePage{
 

  getItemProductName(itemName) {
    return cy.get(`.prdocutname[title='${itemName}']`);
    }
   findItemWithSearchField(itemName) {
    this.getSearchField().type(`${itemName}{enter}`);
   }
//    findItemWithProductName() {
//     this.getItemProductName().click();
//    }

}
export default new SearchPage();