describe("CEP Testing",() => {
    it("Login with valid Credentials",() => {
        cy.visit("https://ce-qa-school.devstudi.com/teach/whiteboard")
        cy.get(".login-modal-outer").click()
        // otp-input-0

        let otp = "90005";
        for (let i = 0; i < otp.length; i++) {
            cy.get(`#otp-input-${i}`).type(`${otp[i]}`)
        }

        cy.get(".userimg").should("be.visible")
        .click()

        
    })
})