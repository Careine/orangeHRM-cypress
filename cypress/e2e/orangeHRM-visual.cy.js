import {authentificationPage} from '../page-objects/authentification'

describe('Visual validation', () => {
    const auth = new authentificationPage
    beforeEach("Nagivate to orangeHRM page", () => auth.navigate())

    it('Should look good', () => {
        
    })
})