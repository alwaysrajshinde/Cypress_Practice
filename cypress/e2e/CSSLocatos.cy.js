describe('CSSLocators', () => {

    it("csslocators", () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")

        cy.get("#username").type("student")
        cy.get("#password").type("Password123")

        cy.get("#submit").click()

        cy.get(".post-title").contains("Logged In Successfully")
    })

    it("attributes", () => {
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")

        cy.get("[type='text']").type("student")
        cy.get("[placeholder='Password']").type("Password123")

        cy.get("#submit").click()

        cy.get(".post-title").contains("Logged In Successfully")
    })

})