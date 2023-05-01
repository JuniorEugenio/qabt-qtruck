import modal from '../Components/Modal'

class LoginPage{

    constructor() {
        this.modal = modal
    }

    go(){
        cy.visit('/')
    }

    form(user) {
      if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
      if (user.name) cy.get('input[name=password]').type(user.password)  
    }

    submit(){
        cy.contains('button', 'Entrar').click()
    }
}

export default new LoginPage()