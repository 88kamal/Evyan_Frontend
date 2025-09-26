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
import ViewProductQueries from "./ViewProductQueries"; // ✅ new component

export default function ViewUserAndAministration() {
    const [activeTab, setActiveTab] = React.useState("View Administration");

    return (
        <div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none bg-transparent p-0 mb-4 overflow-x-auto sm:overflow-x-hidden whitespace-nowrap scrollbar-hide bg-purple-100 border border-purple-300"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-purple-500 shadow-none rounded-none",
                    }}
                >
                    {/* View Administration */}
                    <Tab
                        key={"View Administration"}
                        value={"View Administration"}
                        onClick={() => setActiveTab("View Administration")}
                        className={`${
                            activeTab === "View Administration" ? "text-purple-700" : ""
                        } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View Administration
                    </Tab>

                    {/* View User */}
                    <Tab
                        key={"View User"}
                        value={"View User"}
                        onClick={() => setActiveTab("View User")}
                        className={`${
                            activeTab === "View User" ? "text-purple-700" : ""
                        } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View User
                    </Tab>

                    {/* View Contact Queries (renamed) */}
                    <Tab
                        key={"View Contact Queries"}
                        value={"View Contact Queries"}
                        onClick={() => setActiveTab("View Contact Queries")}
                        className={`${
                            activeTab === "View Contact Queries" ? "text-purple-700" : ""
                        } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View Contact Queries
                    </Tab>

                    {/* View Product Queries (new) */}
                    <Tab
                        key={"View Product Queries"}
                        value={"View Product Queries"}
                        onClick={() => setActiveTab("View Product Queries")}
                        className={`${
                            activeTab === "View Product Queries" ? "text-purple-700" : ""
                        } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View Product Queries
                    </Tab>
                </TabsHeader>

                <TabsBody className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap">
                    <TabPanel
                        className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap -p-9"
                        key={"View Administration"}
                        value={"View Administration"}
                    >
                        <ViewAdministration />
                    </TabPanel>

                    <TabPanel key={"View User"} value={"View User"} className="-p-9">
                        <ViewUser />
                    </TabPanel>

                    <TabPanel
                        key={"View Contact Queries"}
                        value={"View Contact Queries"}
                        className="-p-9"
                    >
                        <ViewQueries />
                    </TabPanel>

                    <TabPanel
                        key={"View Product Queries"}
                        value={"View Product Queries"}
                        className="-p-9"
                    >
                        <ViewProductQueries />
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    );
}
