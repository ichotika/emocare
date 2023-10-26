"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BadCondition from "@/public/assets/organization/badConditionIcon.svg";
import GoodCondition from "@/public/assets/organization/goodConditionIcon.svg";
import MedCondition from "@/public/assets/organization/medConditionIcon.svg";
import EmployeeTable from "@/components/organizations/EmployeeTable";
function AssessmentRecords({ emplist }) {
    const [employeeList, setEmployeeList] = useState([emplist]);
    async function fetchData() {
        const response = await fetch("/api/organization/temp-employees");
        if (!response.ok) {
            console.error("Error fetching data.");
            return;
        }

        const data = await response.json();
        setEmployeeList(data.emplist);
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <div className="flex gap-5">
                <div className="flex grow gap-5 rounded-xl border border-solid border-teal-600 bg-teal-50 p-7">
                    <Image src={GoodCondition} alt="good condition" />
                    <div className="flex flex-col gap-1">
                        <h3 className="block text-start text-2xl font-bold">
                            67%
                        </h3>
                        <p className="block text-start text-xl font-bold">
                            Good Condition
                        </p>
                    </div>
                </div>
                <div className="flex grow gap-5 rounded-xl border border-solid border-yellow-400 bg-yellow-50 p-7">
                    <Image src={MedCondition} alt="decent condition" />
                    <div className="flex flex-col gap-1">
                        <h3 className="block text-start text-2xl font-bold">
                            23%
                        </h3>
                        <p className="block text-start text-xl font-bold">
                            Decent Condition
                        </p>
                    </div>
                </div>
                <div className="flex grow gap-5 rounded-xl border border-solid border-red-600 bg-red-50 p-7">
                    <Image src={BadCondition} alt="critical condition" />
                    <div className="flex flex-col gap-1">
                        <h3 className="block text-start text-2xl font-bold">
                            10%
                        </h3>
                        <p className="block text-start text-xl font-bold">
                            Critical Condition
                        </p>
                    </div>
                </div>
            </div>
            <EmployeeTable employeeList={employeeList} />
        </div>
    );
}

export default AssessmentRecords;
