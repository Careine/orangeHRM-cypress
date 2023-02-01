/// <reference types="cypress" />
 import {authentificationPage} from '../page-objects/authentification'


describe("OrangeHRM Auth", () => {
    
    const auth = new authentificationPage()

    beforeEach("Nagivate to orangeHRM page", () => {
        auth.navigate()
    })

    it('Should be connected', () => {
        auth.loginSucces('Admin', 'admin123')
    })

    it('Should be disconnected', () => {
        auth.loginSucces('Admin', 'admin123')
        auth.disconnect()
    })

    it('Should be not connected', () =>{
        auth.loginFail('Admin', 'admin1')
    })

    it('Should be required for user connexion', () =>{
        auth.loginAddRequired()
    })

    it('password should be empty', () => {
        auth.emptypassword('Test')
    })


})