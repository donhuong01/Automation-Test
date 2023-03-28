import login from "../fixtures/login";






// afterEach(() => {


//     // Set local storage for UAT Enviroment

//     cy.visit('/membership/customerCheckin')
//     cy.wait(15000)

// })



describe('[TS01] FS-013&39 In-House Sales and Merchandise Item Management', function () {


    it('[TC01] To be able to test creating and updating a Merchandise Item.', function () {

        cy.visit('/membership/customerCheckin')
        cy.wait(15000)

        cy.xpath('//h2').should('contain', 'Customer Check-In')

        
        cy.xpath('//h2').then($LBL =>{

        const MemberID = $LBL.text().trim()

        expect(MemberID).to.equal("Customer Check-In")

    })


     
    })
    
    // it('[TC02] To be able to test creating and updating a Merchandise Item.', function () {

    //     cy.visit('/membership/memberList')
    //     cy.wait(3000)


     
    // })

});