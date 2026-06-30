/// <reference types ="Cypress" />


describe("Checkbox Practice", () => {
    // it("Checking radiobuttons", () => {
    //     cy.visit("https://practice.expandtesting.com/radio-buttons")
    //     cy.get("#red").should("be.visible")
    //     cy.get("#yellow").should("be.visible")

    //     cy.get("#red").click().should("be.checked")
    //     cy.get("#yellow").should("not.be.checked")

    //     cy.get("#yellow").click().should("be.checked")
    //     cy.get("#red").should("not.be.checked")


    // })

    // it("Checking Checkbox", () => {
    //     cy.visit("https://www.tutorialspoint.com/selenium/practice/check-box.php")
    //     cy.get("#c_bs_1").click()
    //     cy.get("#c_bs_1").should("be.visible").check()
    // })
    it("Checking Multiple Checkbox", () => {
        cy.visit("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php   ")
        // cy.get("input[type='checkbox']").check().should("be.checked")

        // cy.get("input[type='checkbox']").uncheck().should("not.be.checked")

        //select first checkbox
        cy.get("input[type='checkbox']").first().check().should("be.checked")
        cy.get("input[type='checkbox']").first().uncheck().should("not.be.checked")
        cy.get("input[type='checkbox']").last().check().should("be.checked")


    })

})