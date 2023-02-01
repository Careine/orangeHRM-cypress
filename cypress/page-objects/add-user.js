export class addUserPage{

    navigateToAdminMenu(){
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.contains('.oxd-topbar-header-title', 'User Management')
    }

    addNewUser(userRole, typeEmploye, status, username, password){
        
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.contains('.orangehrm-card-container > .oxd-text--h6', 'Add User')

        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').
            click()
        cy.getDropdownOptions('.oxd-select-dropdown').contains(userRole).click()

        cy.get('.oxd-autocomplete-text-input > input').type(typeEmploye)
        cy.getDropdownOptions('.oxd-autocomplete-dropdown').contains(typeEmploye).click()

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').
            click()
        cy.getDropdownOptions('.oxd-select-dropdown').contains(status).click()
            
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').
            clear().
            type(username)
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').
            clear().
            type(password)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').
            clear().
            type(password)
        cy.get('.oxd-button--secondary').click()
        cy.contains('Successfully Saved')
        cy.wait(10000)
        cy.location('pathname').should('eq', '/web/index.php/admin/viewSystemUsers')
    }

    addUserPasswordIncorect(userRole, typeEmploye, status, username, password, confpassword){
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.contains('.orangehrm-card-container > .oxd-text--h6', 'Add User')

        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').
            click()
        cy.getDropdownOptions('.oxd-select-dropdown').contains(userRole).click()

        cy.get('.oxd-autocomplete-text-input > input').type(typeEmploye)
        cy.getDropdownOptions('.oxd-autocomplete-dropdown').contains(typeEmploye).click()

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').
            click()
        cy.getDropdownOptions('.oxd-select-dropdown').contains(status).click()
            
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').
            clear().
            type(username)
        cy.contains('.oxd-text', 'Should be at least 5 characters')

        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').
            clear().
            type(password)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').
            clear().
            type(confpassword)
        cy.get('.oxd-text').contains('Passwords do not match')
        /*cy.get('.oxd-text').contains('Try a different password').should('have.text', 'Try a different')
        cy.get('.oxd-button').click */
    }

    userExist(userRole, typeEmploye, status, username){
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.contains('.orangehrm-card-container > .oxd-text--h6', 'Add User')

        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').
            click()
        cy.getDropdownOptions('.oxd-select-dropdown').contains(userRole).click()

        cy.get('.oxd-autocomplete-text-input > input').type(typeEmploye)
        cy.getDropdownOptions('.oxd-autocomplete-dropdown').contains(typeEmploye).click()

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').
            click()
        cy.getDropdownOptions('.oxd-select-dropdown').contains(status).click()
            
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').
            clear().
            type(username)
        cy.contains('.oxd-text', 'Already exists')
        /*cy.get('.oxd-text').contains('Already exists').should('have.text', 'Already exists')*/
    }
}