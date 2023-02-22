import * as user from '../fixtures/user.json'
import { headLessLogin } from "../support/helper"

it('', () => {
    headLessLogin(user);
    cy.visit('/index.php?rt=account/account');
    cy.get('h1 span.subtext', {
        timeout: 20000
    }).should('contain', user.firstName);

    cy.get('.search-bar #filter_keyword').type(`E{enter}`);

    function findItem(itemName) {
     cy.get(`.fixed .prdocutname`).then(grid => {
        if (grid.find(itemName).length > 0) {
            cy.get(itemName).click();
        }
        else {
            cy.get('li a').contains('>')
            findItem(itemName);
        }
     }) }
        
        findItem('Absolue Eye Precious Cells')

})

  
