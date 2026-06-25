describe("Automations", () => {

    function login() {
        cy.visit("https://ce-qa-school.devstudi.com/teach/whiteboard")
        cy.get(".login-modal-outer").click()

        let otp = "90005";
        for (let i = 0; i < otp.length; i++) {
            cy.get(`#otp-input-${i}`).type(`${otp[i]}`)
        }
    }

    function signout () {
        //signout
        cy.xpath("//span[@class='userimg']").click()
        cy.xpath("//div[@class='mat-body-1']").click()
    }
    it("Flow 1: Login → Open Class → Open Topic → Logout", () => {
        login()
        cy.get('[data-qa="playlist-current-grade-subject-btn"] > span').click()
        cy.xpath("//span[contains(text(),'All My Classes')]").click()
        cy.xpath("//span[normalize-space()='Class 12']").click()
        cy.xpath("//span[normalize-space()='Geography']").click()
        cy.get('[data-qa="playlist-resource-card"] > .resource-card > .image > .foreground-image')
            .should('be.visible')
            .click()

        cy.get('[data-qa="playlist-drawer-btn"]').click()
        cy.get('.close-icon.ng-star-inserted').click()

        //signout
        signout()

        cy.get(".login-modal-outer").should("be.visible")


    })
    it("Flow 2: Login → Recent Classes", () => {
        login()

        cy.get('[data-qa="playlist-current-grade-subject-btn"] > span').click()

        //select 2nd recent class 
        cy.get(':nth-child(2) > .mdc-button__label > :nth-child(2) > .class-name').click()

        signout()
        cy.get(".login-modal-outer").should("be.visible")
        

    })

})
