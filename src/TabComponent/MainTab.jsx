import Tab from "./Tab";

function MainTab() {
    const tabData = [
        {
            title: "Profile",
            content: "This page is for profile section"
        },
        {
            title: "Dashboard",
            content: "This page is for Dashboard section"
        },
        {
            title: "Accounts",
            content: "This page is for Accounts section"
        },
        {
            title: "Cards",
            content: "This page is for Cards section"
        },
    ]
    return (
        <>
            <p>Tab Component Learning!!</p>
            <Tab tabs={tabData}></Tab>
        </>
    )
}

export default MainTab;