describe('My First Test', () => {
    it('test1 title-postive', () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.title().should('eq', 'Test Login | Practice Test Automation')
    })
    it('test2 title-negative', () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.title().should('eq', '1111Test Login | Practice Test Automation')
    })
})