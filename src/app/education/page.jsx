"use client";
import DoughnutChart from "@/components/employees/DoughnutChart";
import HeaderTab from "@/components/base/HeaderTab";
import ResourceTable from "@/components/educations/ResourceTable";
import { useEffect, useState } from "react";
import EducationProgress from "@/components/educations/EducationProgress";
import { useUser } from "@clerk/nextjs";


export default function Home() {
    const [edulist, setEdulist] = useState([]);
    const [userEdulist, setUserEdulist] = useState([]);
    // fetching current user Id
    const { user } = useUser();
    const currentUserId = user ? user.id : null;

    useEffect(() => {
        const getEdu = async () => {
            const list = await fetchEdu();
            setEdulist(list.education);

            const edu = await fetchEduRes();
            setUserEdulist(edu.length > 0 ? edu.filter((e) => e.userId === currentUserId): [])
            console.log("edu response:", edu.length > 0 ? edu.filter((e) => e.userId === currentUserId): [])
        };
        getEdu();
    }, [currentUserId]);

    async function fetchEdu() {
        const res = await fetch("http://localhost:3000/api/education");
        const data = await res.json();
        return data;
    }

    async function fetchEduRes() {
        const res = await fetch(
            "http://localhost:3000/api/education/responses"
        );
        const data = await res.json();
        return data.eduresponse;
    }

    return (
        <>
            <div>
                <EducationProgress currentUser={currentUserId} />

                <div className="py-6">
                    {/* <div className="pb-4">
                        <HeaderTab
                            tabNames={[
                                "All",
                                "Resource",
                                "Depression",
                                "Anxiety",
                                "Burnout",
                            ]}
                        />
                    </div> */}
                    <div>
                        <ResourceTable educationList={edulist} userEdu={userEdulist} />
                    </div>
                </div>
            </div>
        </>
    );
}
