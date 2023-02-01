export class editUserPage{
    editUser(username){
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').
            click({force: true})
        cy.get('.orangehrm-card-container > .oxd-text--h6').contains('Edit User')
        cy.get(':nth-child(2) > .oxd-input').clear().type(username)
        cy.get('.oxd-checkbox-input > .oxd-icon').click()
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ta@23458')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
        cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Passwords do not match')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Ta@23458')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Ta@23458' + '{enter}')
        cy.wait(10000)
        cy.location('pathname').should('eq', '/web/index.php/admin/viewSystemUsers')
        

    }
}