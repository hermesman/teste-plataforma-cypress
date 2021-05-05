/// <reference types="cypress" />

describe('teste de plataforma', () => {

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    });

    describe('teste de plataforma', () => {

        it('Criar uma nova conta apenas com dados obrigatórios', () => {
            cy.create_account()
        })

        it('Acessar conta com dados previamente cadastrados', () => {
            cy.contains('Sign in').click()
            cy.login()
            cy.contains('My account').should('be.visible')
        })    

        it('Efetuar busca de produto pelo nome', () => {
            cy.search_product()
        })

        it('Efetuar compra com pagamento por transferência bancária', () => {
            cy.add_to_cart()
            cy.login()
            cy.finish_payment()
        })
    
        it('Verificar histórico de pedidos na opção My orders', () => {
            cy.contains('My orders').click()
            cy.login()
            cy.check_orders()
        })

    })
})