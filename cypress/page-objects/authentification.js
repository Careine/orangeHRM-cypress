export class authentificationPage{

    navigate(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
        cy.wait(6000)
    }

    loginSucces(username, password){
        cy.wait(8000)
        cy.contains('Login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password)
        cy.get('.oxd-button').click()
        cy.wait(3000)
        cy.location('pathname').
            should('eq', '/web/index.php/dashboard/index')
    }

    disconnect(){
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    }

    loginFail(username, password){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password)
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert').contains('Invalid credentials')
    }

    loginAddRequired(){
        cy.wait(3000)
        cy.contains('Login')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
            .should('exist', 'Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text')
            .should('exist', 'Required')
    }

    emptypassword(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username + '{enter}')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text')
            .should('exist', 'Required')
    }



}