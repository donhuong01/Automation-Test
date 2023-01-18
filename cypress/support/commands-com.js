// Cypress Common Custom Commands Library
/// <reference types="cypress-xpath" />
import Table from './libraries/lib_table.js'
import elems_FacilityOperatingPeriodDetail from '../page-objects/SMCMS/Elements/Facilities/FS-010-CLUBS(FACILITIES)/FacilityOperatingPeriodDetail'
import PageHeader from '../page-objects/SMCMS/Elements/Common/PageHeader.js'
import Picker from '../page-objects/SMCMS/Elements/Common/Picker.js'
import "cypress-localstorage-commands";

/*****************************************************
 * Command: GoToWebPage
 * Description: Navigates to web page defined at the 
 * Cypres 'env'
 *
 * @param {string} pageName Web Page Name
 *****************************************************/

Cypress.Commands.add('GoToWebPage', (url) => {
    cy.log('------ Go To WebPage : ' + url + ' ------')
    cy.visit(url)
})

/*****************************************************
 * Command: Click
 * Description: Clicks an element
 *
 * @param {string} locator Element Locator
 *****************************************************/
Cypress.Commands.add('Click', (locator) => {
    cy.log('------ Click : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
})

/*****************************************************
 * Command: EnterText
 * Description: Enters text on an Element
 *
 * @param {string} locator Element Locator
 * @param {string} text Text to be entered
 *****************************************************/
Cypress.Commands.add('EnterText', (locator, text) => {
    cy.log('------ Enter Text : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).type(text)
})

/*****************************************************
 * Command: SelectDropDownItem
 * Description: Selects a List(Dropdown) Item
 * @param {string} locator Element Locator
 * @param {string} item Item Value in text
 *****************************************************/
Cypress.Commands.add('SelectDropDownItem', (locator, item) => {
    cy.log('------ Select Drop Down Item : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator + '//span[@class="k-icon k-i-arrow-s"]').click()
    // cy.wait(2000)
    // cy.xpath(locator).invoke('attr', 'aria-owns').then(value => {
    //     cy.xpath('//ul[@id="' + value + '"]/li[text()="' + item + '"]').click()
    // })

    cy.xpath('//li[text()="' + item + '"]').click()
})

/*****************************************************
 * Command: TickRadioButton
 * Description: Ticks a radio button
 *
 * @param {string} locator Element Locator
 *****************************************************/
Cypress.Commands.add('TickRadioButton', (locator) => {
    cy.log('------ Tick Radio Button : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
})

/*****************************************************
 * Command: TickCheckBox
 * Description: Checks of Unchecks a check box
 *
 * @param {string} locator Element Locator
 * @param {binary} value Value: true=Checked
 *                              false=Unchecked
 *****************************************************/
Cypress.Commands.add('TickCheckBox', (locator, value) => {
    cy.log('------ Checks/Unchecks a Checkbox : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()

    if (value.toUpperCase() == 'CHECK') {
        cy.xpath(locator).check()
    }
    else if (value.toUpperCase() == 'UNCHECK') {
        cy.xpath(locator).uncheck()
    }
    else {
        throw new Error("cy.TickCheckBox error on 'value' argument./n\
                            Accepted 'value' values: UNCHECK")
    }
})

/*****************************************************
 * Command: ValidateElementText
 * Description: Validate element text value by supplying
 * an expected text value
 *
 * @param {string} locator Element Locator
 * @param {binary} expectedText Expected Text Value
 *****************************************************/
Cypress.Commands.add('ValidateElementText', (locator, expectedText) => {
    cy.log('------ Validate Element Text : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).should('have.text', expectedText)
})

/*****************************************************
 * Command: VerifyTableEntry
 * Description: Verifies a Table Entry with/witout
 * column and row references.
 *
 * @param {string} locator Element Locator
 * @param {string} targetColumn Column name of the expected value to be tested
 * @param {string} expectedValue Expected Value
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('VerifyTableEntry', (locator, targetColumn, expectedValue, columnReference1, rowReference1) => {
    cy.log('------ Verify Table Entry : ' + locator + ' ------')
    cy.xpath(locator).first().scrollIntoView()
    new Table().verifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1)
})


Cypress.Commands.add('VerifyFilterEntryInTable', (locator, targetColumn, expectedValue, columnReference1, rowReference1) => {
    cy.log('------ Verify Table Entry : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    new Table().selectTableItem(locator, targetColumn, expectedValue, 'FIRST')
})

/*****************************************************
 * Command: SelectTableItem
 * Description: Verifies a Table Entry using
 * column and row references. Selects all items if all
 * is supplied on columnReference1.
 *
 * @param {string} locator Element Locator
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('SelectTableItem', (locator, columnReference1, rowReference1) => {
    cy.log('------ Select Table Item : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    new Table().selectTableItem(locator, columnReference1, rowReference1)
})

/*****************************************************
 * Command: ClickTableLink
 * Description: Clicks a link on a table
 *
 * @param {string} locator Element Locator
 * @param {string} targetColumn Column Name which contains the link to be clicked
 * @param {string} textValue Text Value of the link
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('ClickTableLink', (locator, targetColumn, textValue, columnReference1, rowReference1) => {
    cy.log('------ Click Table Link : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    new Table().clickTableLink(locator, targetColumn, textValue, columnReference1, rowReference1)
})

/*****************************************************
 * Command: ClickTableLinkItem
 * Description: Clicks a link on a table
 *
 * @param {string} locator Element Locator
 * @param {string} targetColumn Column Name which contains the link to be clicked
 * @param {string} textValue Text Value of the link
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('ClickTableLinkItem', (locator, targetColumn, textValue, columnReference1, rowReference1) => {
    cy.log('------ Click Table Link : ' + locator + ' ------')
    // cy.xpath(locator).scrollIntoView()
    new Table().clickTableLinkItem(locator, targetColumn, textValue, columnReference1, rowReference1)
})

/*****************************************************
 * Command: UploadFile
 * Description: Uploads a File
 *
 * @param {string} locator Element Locator
 * @param {string} fileName name of the file saved at
 *                          cypress/fixtures/upload
 *****************************************************/
Cypress.Commands.add('UploadFile', (locator, fileName) => {
    cy.log('------ Upload File : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).attachFile(Cypress.env('FIXTURE_UPLOAD_PATH') + fileName)
    cy.xpath(locator + '/ancestor::div[@class="k-widget k-upload"]//span[@class="k-file-name"]').should('have.text', fileName)
})

/*****************************************************
 * Command: NavigateTablePage
 * Description: Navigates Table Pages
 *
 * @param {string} locator Element Locator
 * @param {string} pageNavigation Desired Page Navigation
 *   Page Navigation Values:
 *      Const.TABLE_NAVI.NEXT - Navigates to Next Page
 *      Const.TABLE_NAVI.PREV - Navigates to Previous Page
 *      Const.TABLE_NAVI.LAST - Navigates to Last Page
 *      Const.TABLE_NAVI.FRST - Navigates to First Page
 *****************************************************/
Cypress.Commands.add('NavigateTablePage', (locator, pageNavigation) => {
    cy.log('------ Navigate Table Page : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    new Table().navigateTablePage(locator, pageNavigation)
})

/*****************************************************
 * Command: Display Data Description
 * Description: Logs the value of the 'objLabel' from
 * the test data. This will serve as the description
 * of the test data. 
 *
 * @param {string} description Web Page Name
 *****************************************************/
Cypress.Commands.add('DisplayDataDescription', (testdata) => {

    cy.log('################################################################')
    cy.log(testdata.ObjLabel)
    cy.log('################################################################')

})

/*****************************************************
 * Command: GetElementText
 * Description: Get the text value of an element
 *
 * @author: jricohermoso
 * @param {string} locator Element locator
 *****************************************************/
Cypress.Commands.add("GetElementText", (locator) => {
    cy.log('------ GetElementText : ' + locator + ' ------');

    //Get Element from <div> <span> <button> <label> <p> <a>
    cy.xpath(locator).invoke('text').then((elementValue) => {
        if (elementValue.length <= 0) {
            //Element value is not found.
            getFromInputField();
        } else {
            cy.wrap(elementValue)
        }
    });

    //Get Element from HTML Inputs
    function getFromInputField() {
        cy.xpath(locator).invoke('val').then((inputFieldValue) => {
            cy.wrap(inputFieldValue)
        });
    }

})

/*****************************************************
 * Command: Generate Test Data
 * Description: Generates a Unique Test Data
 *
 * @param {string} arrayPrefix Array of Prefixes
 *****************************************************/
Cypress.Commands.add('GenerateTextTestData', (arrayPrefix) => {
    let systemGenData = [];

    arrayPrefix.forEach(element => {
        systemGenData.push(
            element +
            new Date().getFullYear().toString() +
            new Date().getDate().toString() +
            new Date().getDay().toString() +
            new Date().getTime().toString()
        )
    });

    return systemGenData
})

/*****************************************************
 * Command: DeleteTableItem
 * Description: Deletes an item on a table by clicking
 * the 'trash' icon
 *
 * @param {string} locator Element Locator
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('DeleteTableItem', (locator, columnReference1, rowReference1, columnReference2, rowReference2) => {
    cy.log('------ Delete Table Item : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    new Table().deleteTableItem(locator, columnReference1, rowReference1, columnReference2, rowReference2)
})

/*****************************************************
 * Command: VerifyElementText
 * Description: Verify the text value of an element
 *
 * @param {string} locator Element locator
 *****************************************************/
Cypress.Commands.add("VerifyElementText", (locator, expectedValue) => {
    cy.log('------ VerifyElementText : ' + locator + ' ------');

    // Verify Element from <div> <span> <button> <label> <p> <a>
    cy.xpath(locator).invoke('text').then((elementValue) => {
        if (elementValue.length <= 0) {
            //Element value is not found.
            verifyInputFieldText();
        } else {
            expect(expectedValue, 'Expected Text Value').to.equal(elementValue)
        }
    });

    // Verify Element from HTML Inputs
    function verifyInputFieldText() {
        cy.xpath(locator).invoke('val').should((inputFieldValue) => {
            expect(expectedValue, 'Expected Text Value').to.equal(inputFieldValue)
        });
    }
})

/*****************************************************
 * Command: SelectDate
 * Description: Select date from date picker
 *
 * @author: jricohermoso
 * @param {string} locator Element locator (xpath)
 * @param {string} date Date input, values should comply to the form date field's format "20-Jan-2021"
 *****************************************************/
Cypress.Commands.add("SelectDate", (locator, date) => {

    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = date.split("-")[0];

    if (day[0] == 0) {
        let removeZero = day.substring(1);
        day = removeZero;
    }

    let month = date.split("-")[1];
    let monthFull = monthArray.filter((dateList => dateList.startsWith(month)));
    let year = date.split("-")[2];

    cy.log('------ SelectDate : ' + locator + ' ------');
    cy.xpath(locator + "/ancestor::span[@class='k-widget k-datepicker']//a[@class='k-select k-select']").click();
    cy.xpath(locator).scrollIntoView();
    cy.get("button.k-calendar-title").click({ force: true });
    cy.get(".k-calendar-navigation .k-content.k-calendar-content.k-scrollable")//.scrollTo('top');
    cy.wait(1000);
    let scrollY = 0;
    let scroller = 0;
    let searchYear = () => {
        cy.get(".k-calendar-navigation .k-content.k-calendar-content.k-scrollable").scrollTo(0, scrollY);
        cy.wait(1000);
        cy.xpath("count(//ul/li/span[text()='" + year + "'])").then($count => {
            scroller = $count;
            if (scroller > 0) {
                cy.xpath("//ul/li/span[text()='" + year + "']").click({ force: true });

            } else {
                scrollY += 300;
                searchYear();
            }

        });
    }
    searchYear();
    cy.get("td[title='" + year + " " + month + "'] span.k-link").click({ force: true });
    cy.get("td[title*='" + monthFull + " " + day + ", " + year + "'] span.k-link").click({ force: true });
})

/*****************************************************
 * Command: VerifyFormDisplayed
 * Description: Verifies the title of the form
 *
 * @author: jricohermoso
 * @param {string} formTitle Text values to compare with the actual form title
 *****************************************************/
Cypress.Commands.add("VerifyFormDisplayed", (formTitle) => {
    cy.log('------ VerifyFormDisplayed ------')
    cy.xpath(PageHeader.LBL_PAGETITLE).should(($element) => {
        expect($element).to.have.text(formTitle)
    })
})

/*****************************************************
 * Command: SelectDateTime
 * Description: Select date and time from date picker
 *
 * @author: jricohermoso
 * @param {string} locator Element locator (xpath)
 * @param {string} datetime Date input, values should comply to the form date field's format "20-Dec-1900 13:59:59"
 *****************************************************/
Cypress.Commands.add("SelectDateTime", (locator, datetime) => {


    /* locator = "//input[@id='dtiPublishDate']";
     datetime = "07-Dec-1900 13:59:35"; */
    let date = datetime.split(" ")[0];


    let time = datetime.split(" ")[1];

    let hour = time.split(":")[0];
    let minute = time.split(":")[1];
    let second = time.split(":")[2];

    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = date.split("-")[0];

    if (day[0] == 0) {
        let removeZero = day.substring(1);
        day = removeZero;
    }

    let month = date.split("-")[1];
    let monthFull = monthArray.filter((dateList => dateList.startsWith(month)));
    let year = date.split("-")[2];

    cy.log('------ SelectDateTime : ' + locator + ' ------');
    cy.xpath(locator + "/ancestor::div[@class='k-widget k-datetimepicker']//span[@class='k-select']").click();

    cy.xpath(locator).scrollIntoView();
    cy.get("button.k-calendar-title").click();
    cy.get("button.k-calendar-title").click();

    /*** YEAR SELECTION COMMAND ****/
    cy.get(".k-calendar-view.k-calendar-decadeview .k-content.k-calendar-content.k-scrollable").scrollTo('top');
    cy.wait(100);
    let scrollY = 0;
    let scroller = 0;
    let searchYear = () => {
        cy.get(".k-calendar-view.k-calendar-decadeview .k-content.k-calendar-content.k-scrollable").scrollTo(0, scrollY);
        cy.wait(100);
        cy.xpath("count(//tr/td/span[text()='" + year + "'])").then($count => {
            scroller = $count;
            if (scroller > 0) {
                cy.xpath("//tr/td/span[text()='" + year + "']").click();

            } else {
                scrollY += 200;
                searchYear();
            }
        });
    }
    searchYear();
    /*** END OF YEAR SELECTION COMMAND ****/

    cy.get("td[title='" + year + " " + month + "'] span.k-link").click();
    cy.get("td[title*='" + monthFull + " " + day + ", " + year + "'] span.k-link").click();


    //COMMAND TO SET TIME
    cy.get(".k-time-list").then($element => {
        cy.get($element[0]).find('li.k-item span').contains(hour).scrollIntoView({ offset: { top: -90 } });
        cy.get($element[1]).find('li.k-item span').contains(minute).scrollIntoView({ offset: { top: -90 } });
        cy.get($element[2]).find('li.k-item span').contains(second).scrollIntoView({ offset: { top: -90 } });
    });

    cy.xpath('//button[@class="k-time-accept k-button k-primary"]').click();
})

/*****************************************************
* Command: VerifyFieldError
* Description: Verify Field Error Message
*
* @param {string} locator Element locator
* @param {string} expectedMsg Expected Error Message
*****************************************************/
Cypress.Commands.add("VerifyFieldError", (locator, expectedMsg) => {
    cy.log('------ VerifyFieldError : ' + locator + ' ------');

    cy.xpath(locator + '/ancestor::div[@class="k-form-field"]//div[@role="alert"][contains(@class,"k-form-error")]')
        .invoke('text').then((actualMsg) => {
            expect(actualMsg, 'Verify Field Error').to.equal(expectedMsg)
        });
})

/*****************************************************
* Command: IncreaseFieldValue
* Description: Increases field by value by ticking the
* increase button of the field
*
* @param {string} locator Element locator
* @param {int} increaseAmount Increase Amount
*****************************************************/
Cypress.Commands.add("IncreaseFieldValue", (locator, increaseAmount) => {
    cy.log('------ IncreaseFieldValue : ' + locator + ' ------');

    for (let increaseClickCount = 0; increaseClickCount < increaseAmount; increaseClickCount++) {
        cy.xpath(locator + '/parent::span//span[@aria-label="Increase value"]').click()
    }
})

/*****************************************************
* Command: DecreaseFieldValue
* Description: Decreases field by value by ticking the
* increase button of the field
*
* @param {string} locator Element locator
* @param {int} decreaseAmount Decrease Amount
*****************************************************/
Cypress.Commands.add("DecreaseFieldValue", (locator, decreaseAmount) => {
    cy.log('------ DecreaseFieldValue : ' + locator + ' ------');

    for (decreaseAmount; decreaseAmount > 0; decreaseAmount--) {
        cy.xpath(locator + '/parent::span//span[@aria-label="Decrease value"]').click()
    }
})

/*****************************************************
 * Command: SelectBtnDropdownItem
 * Description: Select item on button dropdown
 *
 * @author: jricohermoso
 * @param {string} locator Button Dropdown Element locator
 * @param {string} item value to select in the button dropdown
 *****************************************************/
Cypress.Commands.add("SelectBtnDropdownItem", (locator, item) => {
    cy.log('------ SelectBtnDropdownItem : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
    cy.xpath(locator + "/ancestor::div[@class='k-widget k-split-button k-button-group k-state-focused']/button").invoke('attr', 'aria-owns').then(value => {
        cy.xpath('//ul[@id="' + value + '"]/li[text()="' + item + '"]').click();
    });
})

/*****************************************************
 * Command: SelectPickerItem
 * Description: Selects an item on an Item Picker
 *
 * @param {string} locator Item Picker Element locator
 * @param {string} item value to select in item picker
 *****************************************************/
Cypress.Commands.add("SelectPickerItem", (locator, item) => {
    cy.log('------ SelectPickerItem : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
    cy.wait(2000)
    cy.xpath(Picker.TXT_ITEM).type(item)
    cy.xpath(Picker.BTN_SEARCH).click()
    cy.wait(2000)
    new Table().selectTableItem(Picker.TBL_PICKERITEMS, 'FIRST')
    cy.xpath(Picker.BTN_SELECT).click()
})

/*****************************************************
 * Command: TickTableCheckbox
 * Description: Ticks a checkbox on a table
 *
 * @param {string} locator Table Element locator
 * @param {string} status Checkbox state: 'CHECK' or 'UNCHECK'
 * @param {string} columnReference1 Column Reference where rowReference1 is
 * @param {string} rowReference1 Row Reference where the checkbox is
 * @param {string} columnReference2 Column Reference where the checkbox is
 *****************************************************/
Cypress.Commands.add("TickTableCheckbox", (locator, status, columnReference1, rowReference1, columnReference2) => {
    cy.log('------ TickTableCheckbox : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
    new Table().tickTableCheckbox(locator, status, columnReference1, rowReference1, columnReference2)
})

/*****************************************************
 * Command: SelectSectionTab
 * Description: Selects a tab on a section
 *
 * @param {string} locator Element Locator
 * @param {string} tabName Tab Name
 *****************************************************/
Cypress.Commands.add('SelectSectionTab', (locator, tabName) => {
    cy.log('------ SelectSectionTab : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator + '/li/span[text()="' + tabName + '"]').click()
})

/*****************************************************
 * Command: Selection in Pop-Up
 * Description: Selects a tab on a section
 *
 * @param {string} locator Element Locator
 * @param {string} Option Option name (Yes,No or cancel) 
 *****************************************************/

Cypress.Commands.add('SelectPopUpOption', (Locator, option) => {

    cy.Click(Locator, option)

})

/*****************************************************
* Command: SearchFieldSelectTableItem
* Description: Selects an item in a table when Search icon field is clicked.
* @param {string} searchFieldLocator
* @param {string} tableLocator Element Locator
* @param {string} columnReference1 Column Name of the Row Reference Value - 1
* @param {string} rowReference1 Row Reference Value - 1
* @param {string} selectButtonLocator locator of select button when the table item is selected.
*****************************************************/
Cypress.Commands.add("SearchFieldSelectTableItem", (searchFieldLocator, tableLocator, columnReference1, rowReference1, selectButtonLocator) => {
    cy.Click(searchFieldLocator)
    cy.SelectTableItem(tableLocator, columnReference1, rowReference1);
    cy.Click(selectButtonLocator);
});

/*****************************************************
 * Command: VerifyTableEntryShoppingCart
 * Description: Verifies a Table Entry with/witout
 * column and row references.
 *
 * @param {string} locator Element Locator
 * @param {string} targetColumn Column name of the expected value to be tested
 * @param {string} expectedValue Expected Value
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('VerifyTableEntryShoppingCart', (locator, targetColumn, expectedValue, columnReference1, rowReference1) => {
    cy.log('------ Verify Table Entry Shopping Cart : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    new Table().verifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1)

})
/*****************************************************
 * Command: VerifyTableEntryPayment
 * Description: Verifies a Table Entry with/witout
 * column and row references.
 *
 * @param {string} locator Element Locator
 * @param {string} targetColumn Column name of the expected value to be tested
 * @param {string} expectedValue Expected Value
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('VerifyTableEntryPayment', (locator, targetColumn, expectedValue, columnReference1, rowReference1) => {
    cy.log('------ Verify Table Entry Payment : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    new Table().verifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1)

})

/*****************************************************
 * Command: PickerFieldwithTwoFieldsSearchFilter
 * Description: Type LoginEmail and Name, click filter button
 * @author: fshahzada
 * @param {string} locator Element Locator
 * @param {string} FieldLocator1 FieldLocator1
 * @param {string} FieldValue1 FieldValue1
 * @param {string} FieldLocator2 FieldLocator2
 * @param {string} FieldValue2 FieldValue2
 * @param {string} NameValue Field Value
 * @param {string} columnReference Column reference
 * @param {string} rowReference1 Row reference
*****************************************************/
Cypress.Commands.add("PickerFieldwithTwoFieldsSearchFilter", (locator, FieldLocator1, FieldValue1,
    FieldLocator2, FieldValue2, columnReference, rowReference1) => {

    cy.Click(locator)
    // cy.wait(5000)
    cy.EnterText(FieldLocator1, FieldValue1);
    cy.EnterText(FieldLocator2, FieldValue2);
    cy.Click(Picker.BTN_SEARCH);

    new Table().selectTableItem(Picker.TBL_PICKERITEMS, columnReference, rowReference1)

    cy.Click(Picker.BTN_SELECT);
});

/*****************************************************
 * Command: SelectPickerDifferentItems
 * Description: Selects an item on an Item Picker
 *
 * @param {string} locator Item Picker Element locator
 * @param {string} textField value to select in item picker
 * @param {string} item value to select in item picker
 *****************************************************/
Cypress.Commands.add("SelectPickerDifferentItems", (locator, textField, item) => {
    cy.log('------ SelectPickerDifferentItems : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
    cy.wait(5000)
    cy.xpath(textField).type(item)
    cy.Click(Picker.BTN_SEARCHFILTERS);

    new Table().selectTableItem(Picker.TBL_PICKERITEMS, 'FIRST')
    cy.xpath(Picker.BTN_SELECT).first().click();
})
/*****************************************************
 * Command: SelectPickerWithNoFields
 * Description: Selects an item on an Item Picker
 *
 * @param {string} locator Item Picker Element locator
 * @param {string} item value to select in item picker
 *****************************************************/
Cypress.Commands.add("SelectPickerWithoutFields", (locator, item) => {
    cy.log('------ SelectPickerWithNoFields : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
    cy.wait(3000)
    cy.SelectTableItem(Picker.TBL_PICKERITEMS, 'Name', item)
    cy.xpath(Picker.BTN_SELECT).first().click();
})


/*****************************************************
 * Command: SearchAndDeleteUser
 * Description: search an item on an search field
 * @param {string} searchField search field locator
 * @param {string} searchText value to search in seach field
 * @param {string} tableLocator table locator
 * @param {string} columnReference1 Column reference
 * @param {string} rowReference1 Row reference
 * @param {string} SearchFilter Search Filter button locator
 *****************************************************/
Cypress.Commands.add("SearchAndDeleteUser", (searchField, searchText, tableLocator, columnReference1, rowReference1) => {

    cy.xpath(searchField).type(searchText)
    cy.xpath(Picker.BTN_SEARCH).click();

    cy.SelectTableItem(tableLocator, columnReference1, rowReference1);

})

/***************************************************** 
 * Command: VerifyTextFieldValue  
 * Description: Validate element value by supplying 
 * an expected text value
 * @param {string} locator Element Locator 
 * @param {binary} expectedTextFieldValue Expected Text Value 
 
*****************************************************/
Cypress.Commands.add('VerifyTextFieldValue', (locator, expectedTextFieldValue) => {
    cy.log('------ Validate Element Value: ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()    
    cy.xpath(locator).should('have.value', expectedTextFieldValue)
})


/*****************************************************
 * Command: SaveUserInfoInLocalStorage
 * Description: This function store user information in local storage
 *
 * @param {string} AuthenticatedUser Authenticated User ID
 * @param {string} ActiveLocation Active Location Name and ID
 * @param {string} SafraClient Safra Client Token ID
 *****************************************************/
Cypress.Commands.add('SaveUserInfoInLocalStorage', (AuthenticatedUser, ActiveLocation, SafraClient) => {

    cy.log('------ Save User ID, Location and Safra Client ID in Local Storage ------')

    window.localStorage.setItem('azqafj_smcms|authenticated_user', AuthenticatedUser)
    window.localStorage.setItem('azqafj_smcms|active_location', ActiveLocation)
    window.localStorage.setItem('oidc.user:https://login.qa-smcms.safra.sg:safra.client', SafraClient)

})

/*****************************************************
 * Command: SaveUserInfoInLocalStorageForUAT
 * Description: This function store user information in local storage for Uat envoriment
 *
 * @param {string} AuthenticatedUser Authenticated User ID
 * @param {string} ActiveLocation Active Location Name and ID
 * @param {string} SafraClient Safra Client Token ID
 *****************************************************/
Cypress.Commands.add('SaveUserInfoInLocalStorageForUAT', (AuthenticatedUser, ActiveLocation, SafraClient) => {

    cy.log('------ Save User ID, Location and Safra Client ID in Local Storage ------')

    window.localStorage.setItem('azuatsf_smcms|authenticated_user', AuthenticatedUser)
    window.localStorage.setItem('azuatsf_smcms|active_location', ActiveLocation)
    window.localStorage.setItem('oidc.user:https://login-uat-smcms.safra.sg:safra.client', SafraClient)

})

/*****************************************************
 * Command: GlobalNavTo
 * Description: This function naviagtes to a form
 *
 * @param {string} firstMenu first menu value eg Admin 
 * @param {string} secondMenu second menu value eg System Administration
 * @param {string} thirdMenu third menu value eg Code Type
 * @param {string} ExpectedPage Verify expected page
 *****************************************************/
Cypress.Commands.add('GlobalNavTo', (firstMenu, secondMenu, thirdMenu, ExpectedPage) => {

    //Visit Check-in page
    cy.visit('https://qa-smcms.safra.sg/membership/customerCheckin')

    //wait for 2 sec 
    cy.wait(5000)

    const selector = '//li[@aria-label'
    cy.Click('//span[@class="k-icon k-i-menu"]')

    if (firstMenu !== undefined) {
        cy.Click(`${selector}="${firstMenu}"]`)
    }
    if (secondMenu !== undefined) {
        cy.Click(`${selector}="${secondMenu}"]`)
    }
    if (thirdMenu !== undefined) {
        cy.Click(`${selector}="${thirdMenu}"]`)
    }
    if (ExpectedPage !== undefined) {
        cy.ValidateElementText(PageHeader.LBL_PAGETITLE, ExpectedPage)
    }
})
/*****************************************************
 * Command: ClickFirstColumnButton //td[@aria-selected="false" and contains(.,"Monday")]
 * Description: This function click on first column plus button
 * @param {string} value select dropdown value 
 *****************************************************/
Cypress.Commands.add('ClickTablePlusButton', (value) => {

    cy.Click(`//td[@aria-selected="false" and contains(.,"${value}")]//parent::tr//td[2]//preceding-sibling::td`)

})

/*****************************************************
 * Command: Add a single Drop Down in a table
 * Description: This function add operating hour
 * @param {string} locator // Table locator
 * @param {string} rowRef // Row reference
 * @param {string} tdata //Table data reference
 * @param {string} Value //Dropdown value
 *****************************************************/
Cypress.Commands.add('SelectSingleDropdownInTable', (locator, rowRef, tdata, Value) => {

    cy.xpath(locator + `//tr[${rowRef}]//td[${tdata}]` + '//span[@class="k-icon k-i-arrow-s"]').click()
    cy.xpath(`//li[text()="${Value}"]`).click()

})

/*****************************************************
 * Command: SelectListBoxItem
 * Description: This function select the allowed format and transfer formats From/To selected or selection box
 * @param {string} BoxListLocator // Table locator
 * @param {string} FormatName // Allowed Format Name
 * @param {string} Transfer // Passed Title of Transfer button
 *****************************************************/
Cypress.Commands.add('SelectListBoxItem', (BoxListLocator, FormatName, Transfer) => {

    cy.xpath(BoxListLocator + `//li[text()="${FormatName}"]`).click({ force: true })
    cy.xpath(`//a[@title="${Transfer}"]`).click({ force: true })

})

Cypress.Commands.add('EnterTextInTable', (locator, rowRef, colRef, Text) => {

    cy.xpath(locator + `//tr[${rowRef}]//td[${colRef}]` + '//input[@class="k-textbox"]')
        .click()
        .clear()
        .type(Text)
})

/*****************************************************
 * Command: Select First Drop Down in Popup Table
 * Description: This function is for add operating hour
 * @param {string} locator // Table locator
 * @param {string} colref //Column reference
 * @param {string} Value //Dropdown value
 *****************************************************/
Cypress.Commands.add('SelectFirstDropdownInPopupTable', (locator, colref, Value) => {

    cy.xpath(locator + `//tr//td[${colref}]` + '//span[@class="k-icon k-i-arrow-s"]').click()
    cy.wait(2000)
    cy.xpath(`//li[text()="${Value}"]`).click()

})

/*****************************************************
 * Command: Checkbox in a table 
 * Description: This function checks/unchecks in a table 
 * @param {string} locator // Table locator
 * @param {string} rowRef // Row reference number
 * @param {string} colRef //Table data reference number
 * @param {string} value //Check or uncheck 
 *****************************************************/
Cypress.Commands.add('CheckboxInTable', (locator, rowRef, colRef, value) => {

    if (value.toUpperCase() == 'CHECK') {
        cy.xpath(locator + `//tr[${rowRef}]//td[${colRef}]` + '//input[@class="k-checkbox"]')
            .check({ force: true })
    }
    else if (value.toUpperCase() == 'UNCHECK') {
        cy.xpath(locator + `//tr[${rowRef}]//td[${colRef}]` + '//input[@class="k-checkbox"]')
            .uncheck({ force: true })
    }
    else {
        throw new Error("cy.TickCheckBox error on 'value' argument./n\
                            Accepted 'value' values: UNCHECK")
    }
})

/*****************************************************
* Command: EnterDate
* Description: Type Date in the Date Picker
*
* @author: mfaisal
* @param {string} locator Element locator (xpath)
* @param {string} Date example date "10-Mar-2019"
*****************************************************/
Cypress.Commands.add("EnterDate", (locator, Date) => {
    var datearr = Date.split('-')
    var DD = datearr[0]
    var MMM = datearr[1]
    var YYYY = datearr[2]

    // cy.log(DD)
    // cy.log(Month)
    // cy.log(Year)

    cy.xpath(locator).eq(0).clear({ force: true })
        .type(DD).wait(500)
        .type('{rightArrow}').wait(2000)
        .type(MMM).wait(2000)
        .type('{rightArrow}').wait(1000)
        .type(YYYY)
})

/*****************************************************
* Command: EnterDateWithCSS
* Description: Type Date in the Date Picker
*
* @author: mfaisal
* @param {string} locator Element locator (xpath)
* @param {string} Date example date "10-Mar-2019"
*****************************************************/
Cypress.Commands.add("EnterDateWithCSS", (locator, Date) => {
    var datearr = Date.split('-')
    var DD = datearr[0]
    var MMM = datearr[1]
    var YYYY = datearr[2]

    // cy.log(DD)
    // cy.log(Month)
    // cy.log(Year)

    cy.get(locator).eq(0).clear({ force: true })
        .type(DD).wait(2000)
        .type('{rightArrow}').wait(2000)
        .type(MMM).wait(2000)
        .type('{rightArrow}').wait(2000)
        .type(YYYY).wait(2000)
})

/*****************************************************
 * Command: Types text in a table 
 * Description: This function types text in table.
 * 
 * @author: jricohermoso
 * @param {string} locator // Table locator
 * @param {string} rowReference // Row reference number
 * @param {string} columnHeaderTitle //Title of the header in the table
 * @param {string} value // text to type
 *****************************************************/
Cypress.Commands.add('TypeInTableTextBox', (locator, columnHeaderTitle, rowReference, value) => {

    /* locator = '//h3[text()="Periods"]//following-sibling::div//table';
    columnHeaderTitle = "Period Name";
    rowReference = "1";
     value = "Lorem ipsum dolor sit amet"; */
    cy.xpath(`string(${locator}//th//span[text()="${columnHeaderTitle}"]/ancestor::th/@aria-colindex)`).then($ColumnHeaderIndex => {

        cy.xpath(`${locator}//tr[contains(@class,"k-master-row")][${rowReference}]//input[@class="k-textbox"]`).clear();
        cy.xpath(`${locator}//tr[contains(@class,"k-master-row")][${rowReference}]//input[@class="k-textbox"]`).type(value);
    });
})

Cypress.Commands.add('SelectTableDropdownWithHeaderGroup', (locator, columnHeaderTitle, fieldHeaderTitle, val) => {

    /* locator = '//h3[text()="Periods"]//following-sibling::div//table';
    columnHeaderTitle = "Start Date";
    fieldHeaderTitle = "Month";
     val = "February"; */

    cy.xpath(`string(${locator}//th//span[text()="${columnHeaderTitle}"]/ancestor::th/@aria-colindex)`).then($ColumnHeaderIndex => {
        cy.xpath(`count(${locator}//th//span[text()="${fieldHeaderTitle}"]//ancestor::th[@aria-colindex="${$ColumnHeaderIndex}"])`).then($elementCount => {
            if ($elementCount <= 0) {
                $ColumnHeaderIndex++;
            }
            cy.xpath(`string(${locator}//th//span[text()="${fieldHeaderTitle}"]//ancestor::th[@aria-colindex="${$ColumnHeaderIndex}"]/@aria-colindex)`).then($fieldHeaderIndex => {
                cy.xpath(`${locator}//tr[@class="k-master-row k-grid-edit-row"]//td[${$fieldHeaderIndex}]//span[@class="k-icon k-i-arrow-s"]`).click();
                cy.xpath(`//li[text()="${val}"]`).click();
            });
        });

    });
})

//For Button:
/*****************************************************
 * Command: StyleRichTextButtons
 * Description: Selects formatting of the text in style toolbar buttons of rich text box 
 * Cypres 'env'
 *
 * @param {string} locator //form locator 
 * @param {string} styleProperty //Button
 * @param {string} styleValue
 * For buttons: Bold, Italic,  Underline, Strikethrough, Undo, Align text left, Align text right, Align text center
 * 
 *****************************************************/
Cypress.Commands.add("StyleRichTextButtons", (locator, styleProperty, styleValue) => {
    cy.log('------ StyleRichTextButtons : ' + locator + styleProperty + ':' + styleValue + ' ------')

    // cy.xpath(`//label[text()="${styleProperty}"]/parent::div//span[@class="k-textbox-container"]//button[@title="${styleValue}"]`).click()

    // var stylePropertyLocator = locator + `//button[@title="${styleValue}"]`
    // if (styleProperty == "Button") {
    // cy.xpath(stylePropertyLocator).scrollIntoView();
    cy.xpath(locator + `//button[@title="${styleValue}"]`).click()
    //    }


})

/*****************************************************
 * Command: StyleRichText
 * Description: Selects formatting of the text in style  toolbar of rich text box 
 * Cypres 'env'
 *
 * @param {string} locator //form locator 
 * @param {string} styleProperty
 * VALUES: Font Size, Font Name, Paragraph
 * @param {string} styleValue
 * VALUES:
 * For Font Size: 1 (8pt), 2 (10 pt), 3 (12pt)
 * For Font Name:  Arial, Courier New, Georgia
 * For Paragraph: Heading 1, Heading 2, Heading 3, Heading 4
 * 
 *****************************************************/
Cypress.Commands.add("StyleRichText", (locator, styleProperty, styleValue) => {
    cy.log('------ StyleRichText : ' + styleProperty + ':' + styleValue + ' ------')

    //cy.xpath(Locator).scrollIntoView()
    if (styleProperty == "Font Name") {
        cy.xpath(locator + `//span[text()="${styleProperty}"]`).click()
        cy.xpath(`//span[text()='${styleValue}']`).click()
        cy.wait(1000)
    }

    if (styleProperty == "Font Size") {
        cy.xpath(locator + `//span[text()="${styleProperty}"]`).click()
        cy.xpath(`//li[text()='${styleValue}']`).click()
    }

    if (styleProperty == "Paragraph") {
        cy.xpath(locator + `//span[text()="${styleProperty}"]`).click()
        cy.xpath(`//span[text()='${styleValue}']`).click()
        cy.wait(1000)
    }


});

/*****************************************************
 * Command: ClickTableDropDownLink
 * Description: Clicks a link on a table with dropdown tree
 *
 * @author: asadol
 * @param {string} locator Table Locator
 * @param {string} targetColumn Column Name which contains the link to be clicked
 * @param {string} textValue Text Value of the link
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('ClickTableDropDownLink', (locator, targetColumn, textValue, columnReference1, rowReference1) => {

    /* locator = '//h2[text()="Code Set Master Listing"]/ancestor::div//table'
    targetColumn = 'Code Set Name'
    textValue = 'FABS Category' */

    cy.log('------ Click Table Dropdown Link : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    new Table().clickTableDropDownLink(locator, targetColumn, textValue, columnReference1, rowReference1)
})

/*****************************************************
 * Command: ClickTableDropDownLinkButton
 * Description: Clicks a dropdown button of link on a table with dropdown tree
 * 
 * @author: asadol
 * @param {string} locator Table Locator
 * @param {string} targetColumn Column Name which contains the button/link to be clicked
 * @param {string} textValue Text Value of the link
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('ClickTableDropDownButton', (locator, targetColumn, textValue, columnReference1, rowReference1) => {

    /* locator = '//h2[text()="Code Set Master Listing"]/ancestor::div//table'
    targetColumn = 'Code Set Name'
    textValue = 'FABS Category' */

    cy.log('------ Click Table Dropdown Link Button : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    new Table().clickTableDropDownButton(locator, targetColumn, textValue, columnReference1, rowReference1)
})

/*****************************************************
 * Command: SelectPickerFilter
 * Description: Selects an item on an Item Picker with uniwue locator for Search Filters button
 *
 * @author: asadol
 * @param {string} locator Item Picker Element locator
 * @param {string} textField value to select in item picker
 * @param {string} searchButton Locator of Search Filters button
 * @param {string} item value to select in item picker
 *****************************************************/
Cypress.Commands.add("SelectPickerFilter", (locator, textField, item, searchButton) => {
    cy.log('------ SelectPickerFilter : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
    cy.xpath(textField).type(item)
    cy.Click(searchButton)
    cy.wait(3000)
    new Table().selectTableItem(Picker.TBL_PICKERITEMS, 'FIRST')
    cy.Click(Picker.BTN_SELECT);
})

/*****************************************************
* Command: EnterDateTime
* Description: Type Date in the Date Picker
*
* @author: mfaisal
* @param {string} locator Element locator (xpath)
* @param {string} Date
* @param {string} Time 
*****************************************************/
Cypress.Commands.add("EnterDateTime", (locator, Date, Time) => {
    let datearr = Date.split('-')
    let DD = datearr[0]
    let MMM = datearr[1]
    let YYYY = datearr[2]

    let timearr = Time.split(':')
    let Hour = timearr[0]
    let Minute = timearr[1]
    let Second = timearr[2]

    cy.xpath(locator).eq(0).clear({ force: true })
        .type(DD).wait(1000)
        .type('{rightArrow}').wait(1000)
        .type(MMM).wait(1000)
        .type('{rightArrow}').wait(1000)
        .type(YYYY).wait(1000)
        .type('{rightArrow}').wait(1000)
        .type(Hour).wait(1000)
        .type('{rightArrow}').wait(1000)
        .type(Minute).wait(1000)
        .type('{rightArrow}').wait(1000)
        .type(Second).wait(1000)
})

/*****************************************************
 * Command: SelectTenureDuration
 * Description: This function select tenure duration
 *
 * @author: Fshahzada
 * @param {string} locator table locator
 * @param {string} columnValue  target value
 * @param {string} TenureDuration Tenure duration
 *****************************************************/
Cypress.Commands.add("TenureSelection", (locator, columnValue, TenureDuration) => {

    cy.Click(`${locator}//tr[contains(@class, "k-master-row")]//td[text()="${columnValue}"]//following-sibling::td//span[@class="k-dropdown-wrap"]`)
    cy.Click(`//li[text()="${TenureDuration}"]`)

})

/*****************************************************
 * Command: AddOperatingHour
 * Description: This function add operating hour
 * @param {string} tableLocator // Table locator
 * @param {string} rowRef // Row reference
 * @param {string} tdata //Table data reference
 * @param {string} Value //Dropdown value
 *****************************************************/
Cypress.Commands.add('SelectMenuInTable', (tableLocator, rowRef, tdata, Value) => {

    cy.xpath(tableLocator + `//tr[${rowRef}]//td[${tdata}]` + '//span[@class="k-icon k-i-arrow-s"]').click()
    cy.xpath(`//li[text()="${Value}"]`).click()

})

/*****************************************************
 * Command: SelectPickerDifferentItems
 * Description: Selects an item on an Item Picker
 *
 * @param {string} locator Item Picker Element locator
 * @param {string} textField value to select in item picker
 * @param {string} item value to select in item picker
 * @param {string} SearchFilter 
 * @param {string} wait Custom wait 
 *****************************************************/
Cypress.Commands.add("SelectPickerDifferentItemsWait", (locator, wait, textField, item, SearchFilter) => {
    cy.log('------ SelectPickerDifferentItemsWait : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
    cy.wait(wait)
    cy.xpath(textField).type(item)
    cy.Click(SearchFilter);

    new Table().selectTableItem(Picker.TBL_PICKERITEMS, 'FIRST')
    cy.Click(Picker.BTN_SELECT);
})
/*****************************************************
 * Command: SelectPickerDifferentItems
 * Description: Selects an item on an Item Picker
 *
 * @param {string} locator Item Picker Element locator
 * @param {string} textField value to select in item picker
 * @param {string} item value to select in item picker
 * @param {string} SearchFilter Locator search filter button
 *****************************************************/
Cypress.Commands.add("SelectPickerDifferentItemsSeachBTN", (locator, textField, item, SearchFilter) => {
    cy.log('------ SelectPickerDifferentItemsSeachBTN : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
    cy.wait(2000)
    cy.xpath(textField).type(item)
    cy.Click(SearchFilter);

    new Table().selectTableItem(Picker.TBL_PICKERITEMS, 'FIRST')
    cy.Click(Picker.BTN_SELECT);
})

/*****************************************************
 * Command: VerifyTableEntry for Deferment form
 * Description: Verifies a Table Entry with/witout
 * column and row references.
 *
 * @param {string} locator Element Locator
 * @param {string} targetColumn Column name of the expected value to be tested
 * @param {string} expectedValue Expected Value
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1
 *****************************************************/
Cypress.Commands.add('VerifyTableEntryDeferment', (locator, targetColumn, expectedValue, columnReference1, rowReference1) => {
    cy.log('------ Verify Table Entry : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    new Table().verifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1)
})

/*****************************************************

 * Command: VerifyTableContent
 * Description: Verifies a Table Content with/witout
 * column and row references.
 * @param {string} locator Element Locator
 * @param {string} targetColumn Column name of the expected value to be tested
 * @param {string} expectedValue Expected Value
 * @param {string} columnReference1 Column Name of the Row Reference Value - 1
 * @param {string} rowReference1 Row Reference Value - 1

 *****************************************************/

Cypress.Commands.add('VerifyTableContent', (locator, targetColumn, expectedValue, columnReference1, rowReference1) => {
    cy.log('------ Verify Table Content : ' + locator + ' ------')
    new Table().verifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1)
})

/*****************************************************
* Command: VerifyTableEntryWaiverForm
* Description: Verifies a Table Entry with/witout
* column and row references.
*
* @param {string} locator Element Locator
* @param {string} targetColumn Column name of the expected value to be tested
* @param {string} expectedValue Expected Value
* @param {string} columnReference1 Column Name of the Row Reference Value - 1
* @param {string} rowReference1 Row Reference Value - 1
*****************************************************/
Cypress.Commands.add('VerifyTableEntryWaiver', (locator, targetColumn, expectedValue, columnReference1, rowReference1) => {
    cy.log('------ Verify Table Entry : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    new Table().verifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1)
})