
import FacilitySettingsCalendarDetailForm from '../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Detail'
import FacilitySettingsCalendarListingForm from '../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Listing'



import login from '../fixtures/login';
beforeEach(() => {

  //Set local storage for QA Enviroment
  cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

  /****************************
   * Requestor Testing - Erik *
   ****************************/
  // Set local storage for UAT Enviroment
  // cy.SaveUserInfoInLocalStorageForUAT(login.R_authenticated_user_uat, login.R_active_location_uat, login.R_safra_client_uat)

  /************************
   * Admin Testing - Hung *
   ************************/
  // Set local storage for UAT Enviroment
  // cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)

  cy.visit('/membership/customerCheckin')
  cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
})

function convertToDDMMMYYYY(rawDate) {
  const [datePart, timePart] = rawDate.split(' '); // Split the date and time
  const [month, day, year] = datePart.split('/').map(part => part.padStart(2, '0'));
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = monthNames[Number(month) - 1];
  return `${day}-${monthName}-${year}`;
}

describe('Seed Facility', () => {
  it('loop', () => {
    cy.readFile('cypress/fixtures/FacilityMasterSeeding/FaciliyMaster.json').then((data) => {

      for (var dataIndex in data) {

        const holidays = data[dataIndex].Holidays;
        const periods = data[dataIndex].Periods;

        cy.log(`Calendar level ${data[dataIndex].CalendarName}`);

        cy.visit('/facilities/calendarListing', { timeout: 20000 });
        FacilitySettingsCalendarListingForm.CreateNew()
        FacilitySettingsCalendarDetailForm.EnterCalendarName(data[dataIndex].CalendarName)


        for (var holidayIndex in holidays) {
          const holiday = holidays[holidayIndex];

          // Format the holiday date before passing it
          const formattedHolidayDate = convertToDDMMMYYYY(holiday.Date);
          FacilitySettingsCalendarDetailForm.AddHolidayDates(holiday.HolidayName, formattedHolidayDate)


          cy.log(`Data Index: ${dataIndex}, Holiday Index: ${holidayIndex}`);
          // cy.log(`Holiday Date: ${holiday.HolidayName}`);
          // cy.log(`Holiday Name: ${holiday.Date}`);
        }

        for (var periodIndex in periods) {
          const period = periods[periodIndex];
          cy.log(`Data Index: ${dataIndex}, Period Index: ${periodIndex}`);
          // cy.log(`PeriodName: ${period.PeriodName}`);
          // cy.log(`Period Start Date: ${period.StartDate}`);
          // cy.log(`Period End Date: ${period.EndDate}`);
        }
      }

    });
  });
});
