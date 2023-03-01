//відносяться елементи котрі є на кожній сторінки- хедет та футер
export default class BasePage {
    // constructor(itemName) {
    //     this.itemName= itemName
    // }


    getSearchField(){
        return cy.get('#filter_keyword');
    }
    getApparelAccessoriesSubNavCategory(){
        return cy.get('.nav-pills.categorymenu>li').contains('  Apparel & accessories')
    }
    getMakeupSubNavCategory(){
        return cy.get('.nav-pills.categorymenu>li').contains('  Makeup')
    }
    getNavbarMenuSpecials() {
        return cy.get('#main_menu_top [data-id="menu_specials"]')
    }

}