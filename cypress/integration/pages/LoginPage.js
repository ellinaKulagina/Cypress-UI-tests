class LoginPage {

    visit() {
        cy.visit('http://localhost:3000/')
    }

    getEmailPlaceholder(){
        return cy.get('#emailInput').invoke('attr', 'placeholder')
    }

    getPasswordPlaceholder(){
        return cy.get('#passwordInput').invoke('attr', 'placeholder')
    }

    getLoginFormTitle(){
        return cy.get('.sc-bxivhb.fgyMYk')
    }

    fillEmail(value) {
        cy.get('#emailInput').as('email');
        cy.get('@email').clear().type(value);

        return this;
    }

    fillPassword(value) {
        cy.get('#passwordInput').as('password');
        cy.get('@password').clear().type(value);

        return this;
    }

    fillLoginForm(email, password){
       this.fillEmail(email);
       this.fillPassword(password);
    }

    clickLoginButton(){
       cy.get('.bp3-button-text').click();
    }

    getEmailErrorMessage(){
        return cy.get('#emailError')
    }

    getPasswordErrorMessage(){
        return cy.get('#passwordError')
    }

    deleteLastSymbol(element){
       cy.get(element).type('{backspace}')
    }
}

export default LoginPage;