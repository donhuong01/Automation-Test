class elems_PageHeader {

    static BTN_MENU = '//div[@class="k-appbar k-appbar-top k-appbar-static k-appbar-light Header_app-bar__1D770"]//button[@class="k-button k-flat k-button-icon"]'
    static LIST_MENU = '//div[@class="DrawerContainer_menu__1sfCf"]//ul'
    static LNK_HOME = '//div[@class="k-appbar-section Header_app-bar-section__135yf"]//a'
    static LNK_CHECKEDINAS_USER = '//p[text()="Checked In As:"]/ancestor::div[@class="Header_checked-in-main__3cW-z"]//div/a[1]'
    static LNK_CHECKEDINAS_ID = '//p[text()="Checked In As:"]/ancestor::div[@class="Header_checked-in-main__3cW-z"]//div/a[2]'
    static LNK_VIEWMEMBERSHIPINFO = '//div[@class="Header_checked-in-dropdown-items__2jdV7"]//a[text()="View Membership Info"]'
    static LNK_LOGOUTMEMBER = '//p[text()="Checked In As:"]/ancestor::div[contains(@class,"k-appbar-section Header_checked-in")]//div[contains(@class, "Header_checked-in-dropdown-items")]/a[text()="Logout Member"]'
    static LNK_CHANGE = '//div[@class="k-appbar-section Header_app-bar-section__135yf"]//a[text()="Change"]'
    static BTN_SHOPPINGCART = '(//span[@class="k-avatar-image"]//parent::div//parent::div//following-sibling::div//a)[2]'
    static DRP_USERLINKS = '//div[@class="field-search-button"]'
    static DRP_SHOPPINCART = '//div[@class="ToolBarContainer_container__S01KG"]//span[@class="k-input"]'
    static LBL_PAGETITLE = '//div[@class="page-title"]/h2'
}

export default elems_PageHeader