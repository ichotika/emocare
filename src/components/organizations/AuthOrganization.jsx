"use client";
import AuthOrganizationList from "@/components/organizations/AuthOrganizationList";
import EmployeeTable from "@/components/organizations/EmployeeTable";
import { useState, useEffect } from "react";
import getClerkData from "@/utils/fetchClerkUsers";

function AuthOrganization({ emplist }) {
    const [employeeList, setEmployeeList] = useState(emplist);

    async function fetchData() {
        const response = await getClerkData();
        setEmployeeList(response);
    }

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
