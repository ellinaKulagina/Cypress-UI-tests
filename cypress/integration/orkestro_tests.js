import LoginPage from '../integration/pages/LoginPage'
import HomePage from '../integration/pages/HomePage'

const login = new LoginPage();

beforeEach(function () {
    login.visit();
});

describe ('Login', () => {
    it('Login form is displayed correctly', () => {
        login.getEmailPlaceholder().should('eq', 'Email');
        login.getPasswordPlaceholder().should('eq', 'Password');
        login.getLoginFormTitle().should('have.text', 'Login');
    });

    it('Login with valid credentials', () => {
        login.fillLoginForm('test@test.com', 'qwertyui');
        login.clickLoginButton();

        const home = new HomePage();
        home.getHomePageTitle().should('have.text', 'Welcome to Orkestro!');
        cy.url().should('eq', 'http://localhost:3000/home');
    });

    it('Login with empty credentials', () => {
        login.clickLoginButton();
        login.getEmailErrorMessage().should('have.text', 'Email is invalid');
        login.getPasswordErrorMessage().should('have.text', 'Password is invalid');
    })

    it('Check email verification', () => {
        login.fillEmail('abc');
        login.getEmailErrorMessage().should('have.text', 'Email is invalid').should('be.visible');
        login.fillEmail('abc@abc');
        login.getEmailErrorMessage().should('be.visible');
        login.fillEmail('abc@abc.com');
        login.getEmailErrorMessage().should('not.be.visible');
    })

    it('Check password verification', () => {
        login.fillPassword('123');
        login.getPasswordErrorMessage().should('have.text', 'Password is invalid').should('be.visible');
        login.fillPassword('12345678');
        login.getPasswordErrorMessage().should('not.be.visible');
        login.deleteLastSymbol('@password');
        login.getPasswordErrorMessage().should('be.visible');
    })

    it('Login with invalid email', () => {
        login.fillLoginForm('test@test.com', 'qwertyui');
        login.deleteLastSymbol('@email');
        login.clickLoginButton();
        login.getEmailErrorMessage().should('have.text', 'Email is invalid').should('be.visible');
    })
})