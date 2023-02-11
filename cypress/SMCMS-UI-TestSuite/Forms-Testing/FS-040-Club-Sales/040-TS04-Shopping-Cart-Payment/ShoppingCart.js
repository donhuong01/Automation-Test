import ShoppingCartPayments from "../../../../page-objects/SMCMS/PageActions/ShoppingCartandPayment/ShoppingCartandPayment";
import elems_SMCMSShoppingCartAndPayment from "../../../../../page-objects/SMCMS/Elements/Club-Sales/FS040_ShoppingCart-Payment/SMCMSShoppingCartAndPayment";
import elems_CustomerCheckInPage from '../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/CustomerCheckInPage'
import data from '../../../../../fixtures/Data_Module/FS-040-Club-Sales/040-data'
import elems_MemberInformation from "../../../../../page-objects/SMCMS/Elements/Membership/FS014_Membership-Master-Registration-Renewal/MemberInformation";
import elems_Landing from "../../../../../page-objects/SMCMS/Elements/Common/Customer_LandingPage";
import MembershipTenureSelection from '../../../../page-objects/SMCMS/PageActions/FS-014-Membership-Master-Registration-Renewal/FS-014-MembershipTenureSelection/MembershipTenureSelection'


describe('Sample test for the page actions',function(){

    const ShoppingCart = new ShoppingCartPayments
    const MembershipTenure = new MembershipTenureSelection
    var today = new Date(); 
    //var month = ('0' + (today.getMonth() + 1)).slice(-2);
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const d = new Date();
    let name = month[d.getMonth()];
    var date = ('0' + today.getDate()).slice(-2);
    var year = today.getFullYear();
    var shortDate = date + '-' + name + '-' + year;

    it('Shopping Cart and Payments form', function(){

        cy.visit('/membership/customerCheckin')  //Visit web page for checkin 
        
        cy.EnterText(elems_CustomerCheckInPage.TXT_MEMBERID,data.checkin.value) //memberId
        cy.Click(elems_CustomerCheckInPage.BTN_CHECKIN) //click checkin
        cy.wait(5000)
        cy.Click(elems_MemberInformation.BTN_CONTINUE)//customer landing page
        cy.Click(elems_Landing.SAFRA_Member)
        cy.Click(elems_Landing.Membership_Renewal,'Membership Renewal')

        MembershipTenure.principalTenureSelection(data.memberRenewPrincipal.PrincipalTenureSelection) //Select tenure for pricipal
        MembershipTenure.dependentTenureSelection(data.memberRenewDependent.DependentTenureSelection) //Select tenure for dependent

        MembershipTenure.addToCart() //Add to cart 
        const ShoppingCart_tbl_locator = elems_SMCMSShoppingCartAndPayment.ShoppingCartItems.TBL_SHOPPINGCARTITEMS
       
        const lblText = elems_SMCMSShoppingCartAndPayment.ShoppingCartItems.LBL_TOTAL

        ShoppingCart.verifyShoppingCartitems(ShoppingCart_tbl_locator,data.ShoppingCart,lblText) //Verify table entries
        
        const Mode = data.Payment.PAYMENT_MODE
        const Amount = data.Payment.AMOUNT

        ShoppingCart.fillOutandApplyPayments(Mode,Amount)

        ShoppingCart.VerifyBalance(data.Payment.Remaining_balance)
        
        const Payments_tbl_locator = elems_SMCMSShoppingCartAndPayment.Payments.TBL_PAYMENTS
        ShoppingCart.VerifyPayments(Payments_tbl_locator,data.Payment)


        const MemberId = data.memberinfo.MemberID
        const NRIC = data.memberinfo.NRIC
        const PaidTill = data.memberinfo.PaidTill
        const TotalPoints = data.memberinfo.TotalPoints

        
        ShoppingCart.VerifyMemberInfo(MemberId,NRIC,PaidTill,TotalPoints)
        
       // ShoppingCart.ViewDetails() //Click Member info
        
        ShoppingCart.VerifyReceiptDate(shortDate) //verify receipt date 

        ShoppingCart.ResetCart() //Reset Cart

        cy.wait(2000)

        //ShoppingCart.Paynow('Customer Landing') //Click pay now button

        ShoppingCart.LogoutUser('Customer Check-in')

    })



})

