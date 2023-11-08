const ListingSMCMSRoleListing = () => {
    it('Role Listing Performance', function () {
        const t0 = performance.now(); // Set t0 before the cy.visit

        cy.visit('/admin/smcmsRoleList');
        cy.get("div[class='page-title'] h2").then(() => {
            cy.get('.k-loading-image', { timeout: 30000 }).should('not.exist');
            cy.wrap(performance.now()).then(t1 => {
                const loadTimeInMilliseconds = t1 - t0;
                const loadTimeInSeconds = (loadTimeInMilliseconds / 1000).toFixed(2); // Convert to seconds and format to 2 decimal places
                cy.log(`/admin/smcmsRoleList \n Listing load took ${loadTimeInSeconds} seconds.`);
            });
        });
    });

}

export default ListingSMCMSRoleListing
