"use client";
import AuthOrganizationList from "@/components/organizations/AuthOrganizationList";
import EmployeeTable from "@/components/organizations/EmployeeTable";
import { useState, useEffect } from "react";
function AuthOrganization({ emplist }) {
    const [employeeList, setEmployeeList] = useState(emplist);

    async function fetchData() {
        const response = await fetch("/api/organization/temp-employees");
        if (!response.ok) {
            console.error("Error fetching data.");
            return;
        }

        const data = await response.json();
        setEmployeeList(data);
    }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <>
            <div>
                <h2 className="mb-6 text-lg font-semibold">
                    Authorize Request!
                </h2>
                <AuthOrganizationList
                    employeeList={employeeList}
                    fetchData={fetchData}
                />
            </div>
            <EmployeeTable employeeList={employeeList} fetchData={fetchData} />
        </>
    );
}

export default AuthOrganization;
