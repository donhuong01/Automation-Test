const ListingSMCMSUserListing = () => {
    it('User Listing Performance', function () {
        const t0 = performance.now(); // Set t0 before the cy.visit
        cy.visit('/admin/smcmsUserList');
        cy.get("div[class='page-title'] h2").then(() => {
            cy.get('.k-loading-image', { timeout: 30000 }).should('not.exist').then(() => {
                const t1 = performance.now();
                const loadTimeInMilliseconds = t1 - t0;
                const loadTimeInSeconds = (loadTimeInMilliseconds / 1000).toFixed(2); // Convert to seconds and format to 2 decimal places
                cy.log(`\n Listing load took ${loadTimeInSeconds} seconds.`);
            });
        });
    });

}

export default ListingSMCMSUserListing
