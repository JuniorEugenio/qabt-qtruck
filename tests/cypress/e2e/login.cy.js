import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {
  it('deve logar com sucesso', () => {

    const user = {
      instagram: '@mmmteste',
      password: '123456',
      name: 'Murilommcc'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)

    //cy.login(user)
    //cy.loggedUser(user.name)

  })
  it('não deve logar com senha incorreta', () => {

    const user = {
      instagram: '@mmmteste',
      password: '654321'

    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')

    //cy.login(user)
    //cy.modalHaveText('Por favor, informe a sua senha secreta!')

  })
  it('não deve logar com instagram inexistente', () => {

    const user = {
      instagram: '@semlimites',
      password: '123456'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')

    //cy.login(user)
    //cy.modalHaveText('Por favor, informe a sua senha secreta!')

  })
  it('senha deve ser obrigatória', () => {

    const user = {
      instagram: '@mmmteste'
      
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
    //cy.login(user)
    //cy.modalHaveText('Por favor, informe a sua senha secreta!')

  })
  it('instagram deve ser obrigatório', () => {

    const user = {
      password: '123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe suas credenciais!')

    //cy.login(user)
    //cy.modalHaveText('Por favor, informe suas credenciais!')

  })
  it('Todos os campos devem ser obrigatórios ', ()=> {
      const user = {}

    loginPage.go()
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe suas credenciais!')

    //cy.login(user)
    //cy.modalHaveText('Por favor, informe suas credenciais!')

  })
})

