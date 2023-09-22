
import FacilitySettingsCalendarDetailForm from '../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Detail'
import FacilitySettingsCalendarListingForm from '../page-objects/SMCMS/PageActions/FS-010-Clubs(Facilites)/FS-010-Facility-Settings-Calendar/Facility-Settings-Calendar-Listing'



import login from '../fixtures/login';

describe('Seed Facility', () => {
  before(() => {
    //set appropriate env
    cy.SaveUserInfoInLocalStorage(login.authenticated_user, login.active_location, login.safra_client);

    //moved visit logic to before() method
    cy.visit('/facilities/calendarListing', { timeout: 20000 });
    FacilitySettingsCalendarListingForm.CreateNew();
  });

  it('loop', () => {
    //read file
    //ran twice because of memory issues, update accordingly
    cy.readFile('cypress/fixtures/FacilityMasterSeeding/id2.json').then((data) => {
      for (const dataIndex in data) {
        if (data.hasOwnProperty(dataIndex)) {

          //access objects at current index
          const { Holidays, Periods, CalendarName } = data[dataIndex];

          // Enter the calendar name before processing holidays and periods
          FacilitySettingsCalendarDetailForm.EnterCalendarName(CalendarName);

          // Process holidays
          Holidays.forEach((holiday) => {
            const formattedHolidayDate = convertToDDMMMYYYY(holiday.Date);
            FacilitySettingsCalendarDetailForm.AddHolidayDates(holiday.HolidayName, formattedHolidayDate);
          });

          // Process periods
          Periods.forEach((period) => {
            const formattedStartDate = convertToDDMMMYYYY(period.StartDate);
            const formattedEndDate = convertToDDMMMYYYY(period.EndDate);
            FacilitySettingsCalendarDetailForm.ClickPeriodsTab();
            FacilitySettingsCalendarDetailForm.AddPeriods(period.PeriodName, formattedStartDate, formattedEndDate);
          });
          //save
          FacilitySettingsCalendarDetailForm.SaveAsDraft();
        }
      }
    });
  });

});

function convertToDDMMMYYYY(rawDate) {
  const [datePart] = rawDate.split(' '); // Split the date and time
  const [month, day, year] = datePart.split('/').map(part => part.padStart(2, '0'));
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = monthNames[Number(month) - 1];
  return `${day}-${monthName}-${year}`;
}
