import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import ViewAdministration from "./ViewAdministartion";
import ViewUser from "./ViewUsers";
import ViewQueries from "./ViewQueries";


// import ViewUserTable from "./ViewUserTable";
// import ViewShopOwnerTable from "./ViewShopOwnerTable";

export default function ViewUserAndAministration() {
    const [activeTab, setActiveTab] = React.useState("View Administration");

    return (
        <div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none  bg-transparent p-0 mb-4 overflow-x-auto sm:overflow-x-hidden whitespace-nowrap scrollbar-hide bg-purple-100 border border-purple-300  "
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-purple-500 shadow-none rounded-none",
                    }}
                >
                
                    <Tab
                        key={'View Administration'}
                        value={"View Administration"}
                        onClick={() => setActiveTab('View Administration')}
                        className={`${activeTab === 'View Administration' ? 'text-purple-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View Administration
                    </Tab>

                    <Tab
                        key={'view User'}
                        value={"View User"}
                        onClick={() => setActiveTab('View User')}
                        className={`${activeTab === 'View User' ? 'text-purple-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2  font-bold`}
                    >
                        View User
                    </Tab>


                    <Tab
                        key={'view Queries'}
                        value={"View Queries"}
                        onClick={() => setActiveTab('View Queries')}
                        className={`${activeTab === 'View Queries' ? 'text-purple-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2  font-bold`}
                    >
                        View Queries
                    </Tab>

                </TabsHeader>

                <TabsBody className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap">
                   
                    <TabPanel className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap -p-9"
                        key={'View Administration'} value={"View Administration"}>
                        <ViewAdministration/>
                    </TabPanel>

                    <TabPanel key={'view User'} value={"View User"} className="-p-9">
                        <ViewUser/>
                    </TabPanel>

                    <TabPanel key={'view Queries'} value={"View Queries"} className="-p-9">
                        <ViewQueries/>
                    </TabPanel>


                </TabsBody>
            </Tabs>
        </div>
    );
}