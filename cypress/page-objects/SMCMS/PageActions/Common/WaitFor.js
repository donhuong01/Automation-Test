/*****************************************************
 * @author: fshahzada 
 *****************************************************/

const WaitFor = (wait) => {

describe('[FS-000] Wait to restore memory', function () {


    it('[TC00] Wait to restore memory', function () {

        cy.visit('/membership/customerCheckin')
        cy.wait(wait)

    })

})

}

export default WaitFor