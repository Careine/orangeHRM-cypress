import {authentificationPage} from '../page-objects/authentification'
import {addUserPage} from '../page-objects/add-user'

describe('AddUserPage', () => {
    const auth = new authentificationPage()
    const addUser = new addUserPage()

    beforeEach("Nagivate to orangeHRM page", () => {
        auth.navigate()
    })

    it('Should be connected', () => {
        auth.loginSucces('Admin', 'admin123')
        addUser.navigateToAdminMenu()
        addUser.addNewUser('Admin', 'Jordan', 'Enabled','Caletato', 'Pa12345@')
    })

    it('Password is empty', () => {
        auth.loginSucces('Admin', 'admin123')
        addUser.navigateToAdminMenu()
        addUser.addUserPasswordIncorect('Admin', 'Jordan', 'Enabled','Carototo','Pa12345@', 'Pa123456@')
    })

    it('User already exists', () => {
        auth.loginSucces('Admin', 'admin123')
        addUser.navigateToAdminMenu()
        addUser.userExist('Admin', 'Jordan', 'Enabled','Caletato')
    })

})