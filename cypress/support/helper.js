//Helper.js - виносять рутинні дії які часто дуже повторюються в тестах і які не можна віднести до дій в рамках однієї сторінки

export function loginViaUI(user) {
cy.log('Open website home page');
cy.visit('/');

cy.log('Authorize user');
cy.get('.block_2 > #customernav').click();
cy.get('#loginFrm_loginname').type(user.userName);
cy.get('#loginFrm_password').type(user.password).should('have.value', user.password);
cy.get('[title="Login"]').click();
cy.get('h1 span.subtext').should('have.text', user.firstName);
}

export function headLessLogin(user) {
       let csrftoken;
    let csrfinstance;

    cy.request('GET', '/index.php?rt=account/login').then(response => {
        let htmlResp = document.createElement('html')
        htmlResp.innerHTML = response.body;
        csrftoken = htmlResp.querySelector('#loginFrm [name="csrftoken"]')?.getAttribute('value');
        csrfinstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]')?.getAttribute('value')
    })
    .then(() => {
        cy.request({
            method: 'POST',
            url: '/index.php?rt=account/login',
            body: {
                loginname: user.userName,
                password: user.password,
                csrftoken: csrftoken,
                csrfinstance: csrfinstance
            },
            form: true
        })
    
    })
}
export function findItem(itemName) {
    cy.get('body').then(body => {
        if (body.find(`[title="${itemName}"]`).length > 0) {
            cy.get(`[title="${itemName}"]`).click();
            makeOrder();
           }
        else if (body.find('.pagination li a:contains(">")').length > 0) {
            cy.get('.pagination li a').contains('>').click();
            findItem(itemName);
        }
        else {
            alert(`The ${itemName} item is not found`)
        }
    })
}
export function makeOrder() {
    cy.get('.productpagecart .cart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click;
    cy.get('.heading1').should('have.text', '\n\t Checkout Confirmation\n\t\n');
    cy.log('Checking message about an order')
    cy.get('#checkout_btn').click();
}

