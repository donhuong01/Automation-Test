
import FacilitySettingsCalendarDetailForm from '../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Detail'
import FacilitySettingsCalendarListingForm from '../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Listing'



import login from '../fixtures/login';

beforeEach(() => {

  //Set local storage for QA Enviroment
  // cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client)

  /****************************
   * Requestor Testing - Erik *
   ****************************/
  // Set local storage for UAT Enviroment
  // cy.SaveUserInfoInLocalStorageForUAT(login.R_authenticated_user_uat, login.R_active_location_uat, login.R_safra_client_uat)

  /************************
   * Admin Testing - Hung *
   ************************/
  // Set local storage for UAT Enviroment
  cy.SaveUserInfoInLocalStorageForUAT(login.authenticated_user_uat, login.active_location_uat, login.safra_client_uat)


  // cy.SelectPickerItem('//a[text()="Change"]', 'SAFRA HQ')
})

describe('Seed Facility', () => {
  it('loop', () => {
    cy.readFile('cypress/fixtures/FacilityMasterSeeding/id2.json').then((data) => {
      cy.visit('/facilities/calendarListing', { timeout: 30000 });
      // Wait for the loading image to appear
      cy.get('.k-loading-image', { timeout: 10000 }).should('be.visible');

      // Wait for the loading image to disappear
      cy.get('.k-loading-image', { timeout: 30000 }).should('not.exist');

      for (var dataIndex in data) {
        const { Holidays, Periods, CalendarName } = data[dataIndex];

        FacilitySettingsCalendarListingForm.CreateNew();
        FacilitySettingsCalendarDetailForm.EnterCalendarName(data[dataIndex].CalendarName)

        for (var holidayIndex in Holidays) {
          const holiday = Holidays[holidayIndex];
          const formattedHolidayDate = convertToDDMMMYYYY(holiday.Date);
          FacilitySettingsCalendarDetailForm.AddHolidayDates(holiday.HolidayName, formattedHolidayDate);
        }

        for (var periodIndex in Periods) {
          const period = Periods[periodIndex];
          const formattedStartDate = convertToDDMMMYYYY(period.StartDate);
          const formattedEndDate = convertToDDMMMYYYY(period.EndDate);

          FacilitySettingsCalendarDetailForm.ClickPeriodsTab();
          FacilitySettingsCalendarDetailForm.AddPeriods(period.PeriodName, formattedStartDate, formattedEndDate);
        }

        FacilitySettingsCalendarDetailForm.SaveAsDraft();
      }
    });
  });
});

function convertToDDMMMYYYY(rawDate) {
  const [datePart, timePart] = rawDate.split(' '); // Split the date and time
  const [month, day, year] = datePart.split('/').map(part => part.padStart(2, '0'));
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = monthNames[Number(month) - 1];
  return `${day}-${monthName}-${year}`;
}
