describe('Login page test cases', () => {
    
    it("verify title of the page", () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.title().should("eq", "Test Login | Practice Test Automation")
    })
    
    it("should login with valid credentials", () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        // cy.title().should("eq","Test Login | Practice Test Automation")

        cy.get("#username").type("student")
        cy.get("#password").type("Password123")

        cy.get("#submit").click()

        cy.get(".post-title").contains("Logged In Successfully")
    })

    it("verify invalid username",() => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username").type("invalid")
        cy.get("#password").type("Password123")
        cy.get("#submit").click()


        cy.get("#error").should("contain", "Your username is invalid!")
    })

    it("verify invalid password",() => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username").type("student")
        cy.get("#password").type("Password1223")
        cy.get("#submit").click()

        cy.get("#error").should("contain", "Your password is invalid!")
    })

    it("verify url contains", () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.url().should("contain","practicetestautomation")
    })

    
})