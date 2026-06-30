/// <reference types="cypress" />
describe("DropDowns Handles", () => {

    it.skip("Dropdown with select", () => {
        cy.visit("https://automationtesting.co.uk/dropdown.html")
        cy.get("#cars")
            .select("Ford")
            .should("have.value", "ford")
    })
    it.skip("Dropdown with select", () => {
        cy.visit("https://automationtesting.co.uk/dropdown.html")
        cy.get("#cars")
            .select("Ford")
            .should("have.value", "ford")
    })
    it.skip("Dropdown without select", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()

        cy.get(".select2-search__field").type("Iran").type('{enter}')

        cy.get("#select2-billing_country-container").should("have.text", "Iran")

    })
    it.skip("Dynamic Dropdown", () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Cypress")

        cy.get(".suggestion-text").contains("Cypress").click()

    })

    it("Dynamic Dropdown", () => {
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("Cypress Automation")

        cy.get(".wM6W7d>span").contains("cypress automation").click()

        cy.get("#APjFqb").contains("have.value", "cypress automation")

    })

})