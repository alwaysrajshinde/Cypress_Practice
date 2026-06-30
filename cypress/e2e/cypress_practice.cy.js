describe("Phase1-Practice", () => {
    // Task 1 – Visit and Verify
    // Visit a website.
    // Verify the URL.
    // Verify the page title.
    // Verify a heading is visible.
    it.skip("Task-1", () => {
        cy.visit("https://practice.expandtesting.com/")
        cy.url().should("eq", "https://practice.expandtesting.com/")
        cy.url().title().should("contains", "Automation Testing Practice Website for QA and Developers | UI and API")
        cy.get("#main-title").should("be.visible")
    })
    //Task 2 – Login
    // Enter username.
    // Enter password.
    // Click Login.
    // Verify success message.
    // Verify Logout button is visible.
    it.skip("Task-2", () => {
        cy.visit("https://practice.expandtesting.com/login")
        cy.get("#username").type("practice")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get("#submit-login").click()
        cy.xpath("//i[@class='icon-2x icon-signout']").should("be.visible")
    })
    // Task 3 – Textbox Form
    // Fill all fields.
    // Submit.
    // Verify submitted data.
    it("Task-3", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get("#firstName").type("Raj")
        cy.get("#lastName").type("Shinde")
        cy.get("#userEmail").type("raj@gmail.com")
        cy.get("#gender-radio-1").check()
        cy.get("#userNumber").type("9988776655")

        // cy.get("#dateOfBirthInput").clear().type("30 Jan 2026")
        // cy.get(".subjects-auto-complete__input-container.css-19bb58m").type("English")

        cy.get("#hobbies-checkbox-3").check()
        cy.get("#currentAddress").type("MyAddress")
        cy.get("#react-select-3-placeholder").click().type("NCR").type('{enter}')
        cy.get("#react-select-4-placeholder").click().type("Delhi").type('{enter}')
    })
})