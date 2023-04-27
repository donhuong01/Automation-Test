import login from "../../../fixtures/login"
import AccommodationClosureDetail from "../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomClosure/AccommodationClosureDetail"
import AccommodationClosureListing from '../../../page-objects/SMCMS/PageActions/FS-012-Accomodation/AccommodatiomClosure/AccommodationClosureListing'
import Common from '../../../page-objects/SMCMS/PageActions/Common/Common'
import data from "../../../fixtures/Data_Module/FS-012-Accommodation/data"

const common = new Common()



const { AccommodationType, Reason, PermanentTermination, StartDate, StartTime, EndDate, EndTime,
        AddRecurringDate,RecurringType, RecurEvery, RecurStartDate, TimeFrom, TimeTo, EndAfter } = data.AccommodationClosure

const AccommodationClosureManagement = () => {

describe('FS-012 Accommodation Closure Management', function () {

    it('Creating and Cancelling a Accommodation Closure', function () {

        cy.visit('/accommodation/closureListing').wait(4000)

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Listing')

        AccommodationClosureListing.CreateNew()

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Detail')

        AccommodationClosureDetail.SelectAccommodationType(AccommodationType)

        AccommodationClosureDetail.EnterReason(Reason)

        if(PermanentTermination === "No")
        {
            AccommodationClosureDetail.CheckedPermanentTermination(EndDate)

        }else
        {

            AccommodationClosureDetail.AddCloserPeriod(StartDate, StartTime, EndDate, EndTime)

            if(AddRecurringDate === "No"){

            AccommodationClosureDetail.AddRecurringDate( RecurringType, RecurEvery, RecurStartDate, TimeFrom, TimeTo, EndAfter)
            }
        }


        
        AccommodationClosureDetail.Cancel()


    })

    it('Creating and Save as Draft a Accommodation Closure', function () {

        cy.visit('/accommodation/closureListing').wait(4000)

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Listing')

        AccommodationClosureListing.CreateNew()

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Detail')

        AccommodationClosureDetail.SelectAccommodationType(AccommodationType)

        AccommodationClosureDetail.EnterReason(Reason)

        if(PermanentTermination === "No")
        {
            AccommodationClosureDetail.CheckedPermanentTermination(EndDate)

        }else
        {

            AccommodationClosureDetail.AddCloserPeriod(StartDate, StartTime, EndDate, EndTime)

            if(AddRecurringDate === "No"){

            AccommodationClosureDetail.AddRecurringDate( RecurringType, RecurEvery, RecurStartDate, TimeFrom, TimeTo, EndAfter)
            }
        }


        
        AccommodationClosureDetail.SaveAsDraft()


    })
    it('Creating and Submit for Approval a Accommodation Closure', function () {

        cy.visit('/accommodation/closureListing').wait(4000)

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Listing')

        AccommodationClosureListing.CreateNew()

        AccommodationClosureListing.verifyPageTitle('Accommodation Closure Detail')

        AccommodationClosureDetail.SelectAccommodationType(AccommodationType)

        AccommodationClosureDetail.EnterReason(Reason)

        if(PermanentTermination === "No")
        {
            AccommodationClosureDetail.CheckedPermanentTermination(EndDate)

        }else
        {

            AccommodationClosureDetail.AddCloserPeriod(StartDate, StartTime, EndDate, EndTime)

            if(AddRecurringDate === "No"){

            AccommodationClosureDetail.AddRecurringDate( RecurringType, RecurEvery, RecurStartDate, TimeFrom, TimeTo, EndAfter)
            }
        }


        
        AccommodationClosureDetail.SubmitForApproval()

        common.ApprovalWorkFlow("A-CLO", "Accommodation Closure Approval Workflow", "Approval", "Testing Accommodation Closure Approval Workflow")


    })

})

}

export default AccommodationClosureManagement