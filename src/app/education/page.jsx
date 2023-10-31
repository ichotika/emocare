"use client";
import DoughnutChart from "@/components/employees/DoughnutChart";
import HeaderTab from "@/components/base/HeaderTab";
import ResourceTable from "@/components/educations/ResourceTable";
import { useEffect, useState } from "react";

async function getEduData() {
    const res = await fetch("http://localhost:3000/api/education");
    const data = await res.json();
    return data;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
    const [edulist, setEdulist] = useState([]);

    useEffect(() => {
        const getEdu = async () => {
            const list = await fetchEdu();
            setEdulist(list.education);
        };
        getEdu();
    }, []);

    async function fetchEdu() {
        const res = await fetch("http://localhost:3000/api/education");
        const data = await res.json();
        return data;
    }

    return (
        <>
            <div>
                <div className="flex gap-6 rounded-lg bg-white">
                    <DoughnutChart
                        healthPercent={55}
                        categoryTitle={"All"}
                        percentCompleted={55}
                    />
                    <DoughnutChart
                        healthPercent={89}
                        categoryTitle={"Resources"}
                        percentCompleted={89}
                    />
                    <DoughnutChart
                        healthPercent={47}
                        categoryTitle={"Depression"}
                        percentCompleted={47}
                    />
                    <DoughnutChart
                        healthPercent={15}
                        categoryTitle={"Anxiety"}
                        percentCompleted={15}
                    />
                    <DoughnutChart
                        healthPercent={63}
                        categoryTitle={"Burnout"}
                        percentCompleted={63}
                    />
                </div>

                <div className="pt-6">
                    <div className="pb-4">
                        <HeaderTab
                            tabNames={[
                                "All",
                                "Resource",
                                "Depression",
                                "Anxiety",
                                "Burnout",
                                "Saved",
                            ]}
                        />
                    </div>
                    <div>
                        <ResourceTable educationList={edulist} />
                    </div>
                </div>
            </div>
        </>
    );
}
