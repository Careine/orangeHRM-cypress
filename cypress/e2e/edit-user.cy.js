import {authentificationPage} from '../page-objects/authentification'
import {addUserPage} from '../page-objects/add-user'
import { editUserPage } from '../page-objects/edit-user'

describe('AddUserPage', () => {
    const auth = new authentificationPage()
    const addUser = new addUserPage()
    const editUsers = new editUserPage

    beforeEach("Nagivate to orangeHRM page", () => {
        auth.navigate()
    })

    it('Edit User information', () => {
        auth.loginSucces('Admin', 'admin123')
        addUser.navigateToAdminMenu()
        editUsers.editUser('Admin 5')
    })
})