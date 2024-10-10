// Cypress Common Custom Commands Library
/// <reference types="cypress-xpath" />
import Table from './libraries/lib_table.js'
import PageHeader from '../page-objects/SMCMS/Elements/Common/PageHeader.js'
import Picker from '../page-objects/SMCMS/Elements/Common/Picker.js'

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
 *
 * @param {string} locator Element Locator
 * @param {string} item Item Value in text
 *****************************************************/
Cypress.Commands.add('SelectDropDownItem', (locator, item) => {
    cy.log('------ Select Drop Down Item : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator + '//span[@class="k-icon k-i-arrow-s"]').click()
    cy.xpath(locator).invoke('attr', 'aria-owns').then(value => {
        cy.xpath('//ul[@id="' + value + '"]/li[text()="' + item + '"]').click()
    })
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

    if(value.toUpperCase() == 'CHECK'){
        cy.xpath(locator).check()
    }
    else if(value.toUpperCase() == 'UNCHECK'){
        cy.xpath(locator).uncheck()
    }
    else{
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
    cy.xpath(locator).scrollIntoView()
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
    cy.xpath(locator).scrollIntoView()
    new Table().verifyTableEntry(locator, targetColumn, expectedValue, columnReference1, rowReference1)
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
    cy.get("button.k-calendar-title").click();
    cy.get(".k-calendar-navigation .k-content.k-calendar-content.k-scrollable").scrollTo('top');
    cy.wait(100);
    let scrollY = 0;
    let scroller = 0;
    let searchYear = () => {
        cy.get(".k-calendar-navigation .k-content.k-calendar-content.k-scrollable").scrollTo(0, scrollY);
        cy.wait(100);
        cy.xpath("count(//ul/li/span[text()='" + year + "'])").then($count => {
            scroller = $count;
            if (scroller > 0) {
                cy.xpath("//ul/li/span[text()='" + year + "']").click();

            } else {
                scrollY += 200;
                searchYear();
            }

        });
    }
    searchYear();
    cy.get("td[title='" + year + " " + month + "'] span.k-link").click();
    cy.get("td[title*='" + monthFull + " " + day + ", " + year + "'] span.k-link").click();
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

    for(let increaseClickCount = 0; increaseClickCount < increaseAmount; increaseClickCount++){
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

    for(decreaseAmount; decreaseAmount > 0; decreaseAmount--){
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
    cy.xpath(locator +"/ancestor::div[@class='k-widget k-split-button k-button-group k-state-focused']/button").invoke('attr', 'aria-owns').then(value => {
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
    cy.xpath(Picker.TXT_ITEM).type(item)
    cy.xpath(Picker.BTN_SEARCH).click()
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