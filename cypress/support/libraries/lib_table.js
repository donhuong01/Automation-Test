import Const from "../../constants/constants-com"
import Misc from "../../page-objects/SMCMS/Elements/Common/Miscelaneous"

class Table {

    /*****************************************************
     * Method: verifyTableEntry
     * Description: Verifies a Table Entry with/witout
     * column and row references.
     *
     * @param {string} locator Element Locator
     * @param {string} expectedValueColumn Column name of the expected value to be tested
     * @param {string} expectedValue Expected Value
     * @param {string} columnReference1 Column Name of the Row Reference Value - 1
     * @param {string} rowReference1 Row Reference Value - 1
     * @param {string} columnReference2 Column Name of the Row Reference Value - 2
     * @param {string} rowReference2 Row Reference Value - 2
     *****************************************************/
    verifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1, columnReference2, rowReference2) {

        // Verify Table Entry when all Column/Row References are not supplied
        if (columnReference1 === undefined && rowReference1 === undefined && columnReference2 === undefined && rowReference2 === undefined) {
            cy.xpath(locator + '//thead//th').then(($columnHeaderElements) => {
                let columnHeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                cy.xpath(Misc.TABLE_LOADING, { timeout: 30000 }).should('not.exist')
                cy.xpath(locator + '//tbody//td[' + columnHeaderIndex + ']').should(($columnItems) => {
                    let columnItemTexts = Cypress._.map($columnItems, 'innerText')
                    let columnItemIndex = Cypress._.map($columnItems, 'innerText').indexOf(expectedValue)
                    expect(columnItemTexts[columnItemIndex], 'Expected Column Item').to.equal(expectedValue)
                })
            })

            // Verify Table Entry when 1 Column/Row References are supplied
        } else if (columnReference1 !== undefined && rowReference1 !== undefined && columnReference2 === undefined && rowReference2 === undefined) {
            cy.xpath(locator + '//thead//th').then(($columnHeaderElements) => {
                let targetColumnIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                let columnReference1Index = Cypress._.map($columnHeaderElements, 'innerText').indexOf(columnReference1) + 1
                cy.xpath(Misc.TABLE_LOADING, { timeout: 30000 }).should('not.exist')
                cy.xpath(locator + '//tbody/tr/td[' + columnReference1Index + ']').then(($referenceColumn1Items) => {
                    let targetRowIndex = Cypress._.map($referenceColumn1Items, 'innerText').indexOf(rowReference1) + 1
                    cy.xpath(locator + '//tbody/tr[' + targetRowIndex + ']/td[' + targetColumnIndex + ']', { timeout: 30000 }).should('have.text', expectedValue)
                })
            })

            // Verify Table Entry when 2 Column/Row References are supplied
        } else if (columnReference1 !== undefined && rowReference1 !== undefined && columnReference2 !== undefined && rowReference2 !== undefined) {
            throw new Error(
                "'Table.verifyTableEntry' parameter error. VerifyTable Entry with 2 pair of column row references still on development\n \
                Accepted Usage Format:\n \
                cy.VerifyTableEntry(locator, targetColumn, expectedValue)\n \
                cy.VerifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1)\n"
            )

            // Fail Safe Routine
        } else {
            throw new Error(
                "'Table.verifyTableEntry' parameter error. Check paramaters used\n \
                    Accepted Usage Format:\n \
                    cy.VerifyTableEntry(locator, targetColumn, expectedValue)\n \
                    cy.VerifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1)\n"
            )
        }
    }

    /*****************************************************
     * Method: selectTableItem
     * Description: Selects a Table Entry using
     * column and row references. Selects all items if 'ALL'
     * is supplied on columnReference1. Selects first item
     * if 'FIRST' is supplied on columnReference1.
     *
     * @param {string} locator Element Locator
     * @param {string} columnReference1 Column Name of the Row Reference Value - 1
     * @param {string} rowReference1 Row Reference Value - 1
     * @param {string} columnReference2 Column Name of the Row Reference Value - 2
     * @param {string} rowReference2 Row Reference Value - 2
     *****************************************************/
    selectTableItem(locator, columnReference1, rowReference1, columnReference2, rowReference2) {
        // Select all items when columnReference1 = ALL and other references are undefined
        if (columnReference1.toUpperCase() === 'ALL' && rowReference1 === undefined && columnReference2 === undefined && rowReference2 === undefined) {
            cy.xpath(locator + '//thead//th/input', { timeout: 30000 }).click()

        }
        // Selects first item if columnReference1 = FIRST and other references are undefined
        else if (columnReference1.toUpperCase() === 'FIRST' && rowReference1 === undefined && columnReference2 === undefined && rowReference2 === undefined) {
            cy.xpath(locator + '//tbody/tr[1]/td[1]/input', { timeout: 30000 }).click({ timeout: 30000 })
        }
        // Select Table Entry when 1 Column/Row References are supplied
        else if (columnReference1 !== undefined && rowReference1 !== undefined && columnReference2 === undefined && rowReference2 === undefined) {
            cy.xpath(locator + '//thead//th', { timeout: 30000 }).then(($columnHeaderElements) => {
                let columnReference1Index = Cypress._.map($columnHeaderElements, 'innerText').indexOf(columnReference1) + 1
                cy.xpath(Misc.TABLE_LOADING, { timeout: 30000 }).should('not.exist')
                cy.xpath(locator + '//tbody//td[' + columnReference1Index + ']', { timeout: 30000 }).then(($referenceColumn1Items) => {
                    let targetRowIndex = Cypress._.map($referenceColumn1Items, item => item.innerText.trim()).indexOf(item => item.innerText.trim()) + 1
                    if (targetRowIndex === 0)
                        targetRowIndex += 1;
                    cy.xpath(locator + '//tbody/tr[' + targetRowIndex + ']/td[1]/input', { timeout: 10000 }).should('be.visible').click()
                })
            })

        }
        // Select Table Entry when 2 Column/Row References are supplied
        else if (columnReference1 !== undefined && rowReference1 !== undefined && columnReference2 !== undefined && rowReference2 !== undefined) {
            throw new Error(
                "'Table.SelectTableItem' parameter error. 2 Column/Row References is still for development\n \
                  Accepted Usage Format:\n \
                  cy.SelectTableItem(locator, columnReference1)\n \
                  cy.SelectTableItem(locator, columnReference1, rowReference1)\n"
            )


        }
        // Fail Safe Routine
        else {
            throw new Error(
                "'Table.SelectTableItem' parameter error. Check paramaters used\n \
                    Accepted Usage Format:\n \
                    cy.SelectTableItem(locator, columnReference1)\n \
                    cy.SelectTableItem(locator, columnReference1, rowReference1)\n"
            )
        }
    }

    /*****************************************************
     * Method: ClickTableLink
     * Description: Clicks a link on a table
     *
     * @param {string} locator Element Locator
     * @param {string} targetColumn Column Name which contains the link to be clicked
     * @param {string} textValue Text Value of the link
     * @param {string} columnReference1 Column Name of the Row Reference Value - 1
     * @param {string} rowReference1 Row Reference Value - 1
     *****************************************************/
    clickTableLink(locator, targetColumn, textValue, columnReference1, rowReference1) {

        // Select all items when columnReference1 = ALL and other references are undefined
        if (targetColumn !== undefined && textValue !== undefined && columnReference1 === undefined && rowReference1 === undefined) {
            cy.xpath(locator + '//thead//th')
                .then(($columnHeaderElements) => {
                    let columnHeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                    cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                    cy.xpath(locator + '//tbody//td[' + columnHeaderIndex + ']').then(($columnItems) => {
                        let columnItemIndex = Cypress._.map($columnItems, 'innerText').indexOf(textValue) + 1
                        cy.xpath(locator + '//tbody/tr[' + columnItemIndex + ']/td[' + columnHeaderIndex + ']').click()
                    })
                })

            // Verify Table Entry when 1 Column/Row References are supplied
        } else if (targetColumn !== undefined && textValue !== undefined && columnReference1 !== undefined && rowReference1 !== undefined) {
            cy.xpath(locator + '//thead//th')
                .then(($columnHeaderElements) => {
                    let targetColumnHeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                    let columnReference1HeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(columnReference1) + 1
                    cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                    cy.xpath(locator + '//tbody//td[' + columnReference1HeaderIndex + ']').then(($columnReference1Items) => {
                        let rowIndex = Cypress._.map($columnReference1Items, 'innerText').indexOf(rowReference1) + 1
                        cy.xpath(locator + '//tbody/tr[' + rowIndex + ']/td[' + targetColumnHeaderIndex + ']').should('have.text', textValue)
                        cy.xpath(locator + '//tbody/tr[' + rowIndex + ']/td[' + targetColumnHeaderIndex + ']').click()
                    })
                })

            // Fail Safe Routine
        } else {
            throw new Error(
                "'Table.SelectTableItem' parameter error. Check paramaters used\n \
                    Accepted Usage Format:\n \
                    cy.clickTableLink(locator, targetColumn, textValue)\n \
                    cy.clickTableLink(locator, targetColumn, textValue, columnReference1, rowReference1)"
            )
        }
    }

    /*****************************************************
     * Method: ClickTableLink
     * Description: Clicks a link on a table
     *
     * @param {string} locator Element Locator
     * @param {string} targetColumn Column Name which contains the link to be clicked
     * @param {string} textValue Text Value of the link
     * @param {string} columnReference1 Column Name of the Row Reference Value - 1
     * @param {string} rowReference1 Row Reference Value - 1
     *****************************************************/
    clickTableLinkItem(locator, targetColumn, textValue, columnReference1, rowReference1) {

        // Select all items when columnReference1 = ALL and other references are undefined
        if (targetColumn !== undefined && textValue !== undefined && columnReference1 === undefined && rowReference1 === undefined) {
            cy.xpath(locator + '//thead//th')
                .then(($columnHeaderElements) => {
                    let columnHeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                    cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                    cy.xpath(locator + '//tbody//td[' + columnHeaderIndex + ']').then(($columnItems) => {
                        let columnItemIndex = Cypress._.map($columnItems, 'innerText').indexOf(textValue) + 1
                        cy.xpath(locator + '//tbody/tr[' + columnItemIndex + ']/td[' + columnHeaderIndex + ']//a').click()
                    })
                })

            // Verify Table Entry when 1 Column/Row References are supplied
        } else if (targetColumn !== undefined && textValue !== undefined && columnReference1 !== undefined && rowReference1 !== undefined) {
            cy.xpath(locator + '//thead//th')
                .then(($columnHeaderElements) => {
                    let targetColumnHeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                    let columnReference1HeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(columnReference1) + 1
                    cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                    cy.xpath(locator + '//tbody//td[' + columnReference1HeaderIndex + ']').then(($columnReference1Items) => {
                        let rowIndex = Cypress._.map($columnReference1Items, 'innerText').indexOf(rowReference1) + 1
                        cy.xpath(locator + '//tbody/tr[' + rowIndex + ']/td[' + targetColumnHeaderIndex + ']').should('have.text', textValue)
                        cy.xpath(locator + '//tbody/tr[' + rowIndex + ']/td[' + targetColumnHeaderIndex + ']//a').click()
                    })
                })

            // Fail Safe Routine
        } else {
            throw new Error(
                "'Table.SelectTableItem' parameter error. Check paramaters used\n \
                    Accepted Usage Format:\n \
                    cy.clickTableLink(locator, targetColumn, textValue)\n \
                    cy.clickTableLink(locator, targetColumn, textValue, columnReference1, rowReference1)"
            )
        }
    }

    /*****************************************************
     * Method: navigateTablePage
     * Description: Navigates Table Pages
     *
     * @param {string} locator Element Locator
     * @param {string} pageNavigation Desired Page Navigation
     *****************************************************/
    navigateTablePage(locator, pageNavigation) {

        // Navigates to Table's Next Page when next page button is not disabled
        if (pageNavigation.toUpperCase() === Const.TABLE_NAVI.NEXT) {
            cy.xpath(locator + Misc.TABLE_PAGE_BUTTONS.NEXT)
                .should('not.have.attr', 'class', 'k-state-disabled')
            cy.xpath(locator + Misc.TABLE_PAGE_BUTTONS.NEXT).click()

            // Navigates to Table's Previous Page when previous page button is not disabled
        } else if (pageNavigation.toUpperCase() === Const.TABLE_NAVI.PREV) {
            cy.xpath(locator + Misc.TABLE_PAGE_BUTTONS.PREVIOUS)
                .should('not.have.attr', 'class', 'k-state-disabled')
            cy.xpath(locator + Misc.TABLE_PAGE_BUTTONS.PREVIOUS).click()

            // Navigates to Table's First Page when first page button is not disabled
        } else if (pageNavigation.toUpperCase() === Const.TABLE_NAVI.FIRST) {
            cy.xpath(locator + Misc.TABLE_PAGE_BUTTONS.FIRST_PAGE)
                .should('not.have.attr', 'class', 'k-state-disabled')
            cy.xpath(locator + Misc.TABLE_PAGE_BUTTONS.FIRST_PAGE).click()

            // Navigates to Table's Last Page when last page button is not disabled
        } else if (pageNavigation.toUpperCase() === Const.TABLE_NAVI.LAST) {
            cy.xpath(locator + Misc.TABLE_PAGE_BUTTONS.LAST_PAGE)
                .should('not.have.attr', 'class', 'k-state-disabled')
            cy.xpath(locator + Misc.TABLE_PAGE_BUTTONS.LAST_PAGE).click()

            // Error Catch
        } else {
            throw new Error(
                "'Table.SavigateTablePage' parameter error. Check paramaters used\n \
                Accepted pageNavigation Values:\n \
                NEXT\n \
                PREVIOUS\n\
                FIRST_PAGE\n\
                LAST_PAGE\n\
                "
            )
        }

    }

    /*****************************************************
     * Method: deleteTableItem
     * Description: Deletes an item on a table by clicking
     * the 'trash' icon
     *
     * @param {string} locator Element Locator
     * @param {string} columnReference1 Column Name of the Row Reference Value - 1
     * @param {string} rowReference1 Row Reference Value - 1
     * @param {string} columnReference1 Column Name of the Row Reference Value - 1
     * @param {string} rowReference1 Row Reference Value - 1
     *****************************************************/
    deleteTableItem(locator, columnReference1, rowReference1, columnReference2, rowReference2) {

        // Delete Table Entry when 1 Column/Row Reference is supplied
        if (columnReference1 !== undefined && rowReference1 !== undefined && columnReference2 === undefined && rowReference2 === undefined) {
            cy.xpath(locator + '//thead//th').then(($columnHeaderElements) => {
                let columnReference1Index = Cypress._.map($columnHeaderElements, 'innerText').indexOf(columnReference1) + 1
                cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                cy.xpath(locator + '//tbody/tr/td[' + columnReference1Index + ']').then(($referenceColumn1Items) => {
                    let rowReference1Index = Cypress._.map($referenceColumn1Items, 'innerText').indexOf(rowReference1) + 1
                    cy.xpath(locator + '//tbody/tr[' + rowReference1Index + ']/td[1]').click()
                })
            })
        }

        // Delete Table Entry when 2 Column/Row References are supplied
        else if (columnReference1 !== undefined && rowReference1 !== undefined && columnReference2 !== undefined && rowReference2 !== undefined) {
            throw new Error(
                "'Table.SeleteTableItem' parameter error. 2 Column/Row References is still for development\n \
                  Accepted Usage Format:\n \
                  cy.SelectTableItem(locator, columnReference1)\n"
            )
        }

        // Fail Safe Routine
        else {
            throw new Error(
                "'Table.SelectTableItem' parameter error. Check paramaters used\n \
                    Accepted Usage Format:\n \
                    cy.SelectTableItem(locator, columnReference1)\n"
            )
        }
    }

    /*****************************************************
     * Method: tickTableCheckbox
     * Description: Chec
     *
     * @param {string} locator Element Locator
     * @param {string} columnReference1 Column Name of the Row Reference Value - 1
     * @param {string} rowReference1 Row Reference Value - 1
     * @param {string} columnReference2 Column Name of the Row Reference Value - 2
     *****************************************************/
    tickTableCheckbox(locator, status, columnReference1, rowReference1, columnReference2) {

        // Tick Table Checkbox when 1 Column/Row Reference are supplied
        if (columnReference1 !== undefined && rowReference1 !== undefined && columnReference2 !== undefined) {
            cy.xpath(locator + '//thead//th').then(($columnHeaderElements) => {
                let rowReferenceColumnIdex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(columnReference1) + 1
                let targetColumnIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(columnReference2) + 1
                cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                cy.xpath(locator + '//tbody/tr/td[' + rowReferenceColumnIdex + ']').then(($referenceColumnItems) => {
                    let targetRowIndex = Cypress._.map($referenceColumnItems, 'innerText').indexOf(rowReference1) + 1
                    if (status.toUpperCase() == 'CHECK') {
                        cy.xpath(locator + '//tbody/tr[' + targetRowIndex + ']/td[' + targetColumnIndex + ']//input').check()
                    }
                    else if (status.toUpperCase() == 'UNCHECK') {
                        cy.xpath(locator + '//tbody/tr[' + targetRowIndex + ']/td[' + targetColumnIndex + ']//input').uncheck()
                    }
                    else {
                        throw new Error("tickTableCheckbox: status value is not accepted, please use 'CHECK' or 'UNCHECK'")
                    }
                })
            })
        }
        // Fail Safe Routine
        else {
            throw new Error(
                "'Table.tickTableCheckbox' parameter error. Check paramaters used\n \
                    Accepted Usage Format:\n \
                    cy.TickTableCheckbox(locator, status, columnReference1, rowReference1, columnReference2)"
            )
        }
    }

    /*****************************************************
     * Method: ClickTableDropDownLink
     * Description: Clicks a link on a table
     *
     * @param {string} locator Element Locator
     * @param {string} targetColumn Column Name which contains the link to be clicked
     * @param {string} textValue Text Value of the link
     * @param {string} columnReference1 Column Name of the Row Reference Value - 1
     * @param {string} rowReference1 Row Reference Value - 1
     *****************************************************/
    clickTableDropDownLink(locator, targetColumn, textValue, columnReference1, rowReference1) {

        // Select all items when columnReference1 = ALL and other references are undefined
        if (targetColumn !== undefined && textValue !== undefined && columnReference1 === undefined && rowReference1 === undefined) {
            cy.xpath(locator + '//thead//th')
                .then(($columnHeaderElements) => {
                    let columnHeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                    cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                    cy.xpath(locator + '//tbody//td[' + columnHeaderIndex + ']').then(($columnItems) => {
                        let columnItemIndex = Cypress._.map($columnItems, 'innerText').indexOf(textValue) + 1
                        cy.xpath(locator + '//tbody/tr[' + columnItemIndex + ']/td[' + columnHeaderIndex + ']').click()
                    })
                })

            // Verify Table Entry when 1 Column/Row References are supplied
        } else if (targetColumn !== undefined && textValue !== undefined && columnReference1 !== undefined && rowReference1 !== undefined) {
            cy.xpath(locator + '//thead//th')
                .then(($columnHeaderElements) => {
                    let targetColumnHeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                    let columnReference1HeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(columnReference1) + 1
                    cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                    cy.xpath(locator + '//tbody//td[' + columnReference1HeaderIndex + ']').then(($columnReference1Items) => {
                        let rowIndex = Cypress._.map($columnReference1Items, 'innerText').indexOf(rowReference1) + 1
                        cy.xpath(locator + '//tbody/tr[' + rowIndex + ']/td[' + targetColumnHeaderIndex + ']').should('have.text', textValue)
                        cy.xpath(locator + '//tbody/tr[' + rowIndex + ']/td[' + targetColumnHeaderIndex + ']').click()
                    })
                })

            // Fail Safe Routine
        } else {
            throw new Error(
                "'Table.clickTableDropDownLink' parameter error. Check paramaters used\n \
                    Accepted Usage Format:\n \
                    cy.clickTableDropDownLink(locator, targetColumn, textValue)\n \
                    cy.clickTableDropDownLink(locator, targetColumn, textValue, columnReference1, rowReference1)"
            )
        }
    }

    /*****************************************************
     * Method: ClickTableDropDownButton
     * Description: Clicks dropdown button of link on a table
     *
     * @param {string} locator Table Locator
     * @param {string} targetColumn Column Name which contains the link to be clicked
     * @param {string} textValue Text Value of the link
     * @param {string} columnReference1 Column Name of the Row Reference Value - 1
     * @param {string} rowReference1 Row Reference Value - 1
     *****************************************************/
    clickTableDropDownButton(locator, targetColumn, textValue, columnReference1, rowReference1) {

        // Select all items when columnReference1 = ALL and other references are undefined
        if (targetColumn !== undefined && textValue !== undefined && columnReference1 === undefined && rowReference1 === undefined) {
            cy.xpath(locator + '//thead//th')
                .then(($columnHeaderElements) => {
                    let columnHeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                    cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                    cy.xpath(locator + '//tbody//td[' + columnHeaderIndex + ']').then(($columnItems) => {
                        let columnItemIndex = Cypress._.map($columnItems, 'innerText').indexOf(textValue) + 1
                        cy.xpath(locator + '//tbody/tr[' + columnItemIndex + ']/td[' + columnHeaderIndex + ']//span[@class="k-icon k-i-collapse"]').click()
                    })
                })

            // Verify Table Entry when 1 Column/Row References are supplied
        } else if (targetColumn !== undefined && textValue !== undefined && columnReference1 !== undefined && rowReference1 !== undefined) {
            cy.xpath(locator + '//thead//th')
                .then(($columnHeaderElements) => {
                    let targetColumnHeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(targetColumn) + 1
                    let columnReference1HeaderIndex = Cypress._.map($columnHeaderElements, 'innerText').indexOf(columnReference1) + 1
                    cy.xpath(Misc.TABLE_LOADING).should('not.exist')
                    cy.xpath(locator + '//tbody//td[' + columnReference1HeaderIndex + ']').then(($columnReference1Items) => {
                        let rowIndex = Cypress._.map($columnReference1Items, 'innerText').indexOf(rowReference1) + 1
                        cy.xpath(locator + '//tbody/tr[' + rowIndex + ']/td[' + targetColumnHeaderIndex + ']').should('have.text', textValue)
                        cy.xpath(locator + '//tbody/tr[' + rowIndex + ']/td[' + targetColumnHeaderIndex + ']//span[@class="k-icon k-i-collapse"]').click()
                    })
                })

            // Fail Safe Routine
        } else {
            throw new Error(
                "'Table.SelectTableItem' parameter error. Check paramaters used\n \
                    Accepted Usage Format:\n \
                    cy.clickTableDropDownButton(locator, targetColumn, textValue)\n \
                    cy.clickTableDropDownButton(locator, targetColumn, textValue, columnReference1, rowReference1)"
            )
        }
    }
}

export default Table