"use client";
import ResourceTable from "@/components/educations/ResourceTable";
import { useEffect, useState } from "react";
import EducationProgress from "@/components/educations/EducationProgress";
import { useUser } from "@clerk/nextjs";
import HeaderTab from "@/components/base/HeaderTab";
import Header from "@/components/employees/Header";

export default function Home() {
    const [edulist, setEdulist] = useState([]);
    const [userEdulist, setUserEdulist] = useState([]);
    const [activeTab, setActiveTab] = useState("All");
    const [curNumber, setCurNumber] = useState(1);

    // fetching current user Id
    const { user } = useUser();
    const currentUserId = user ? user.id : null;

    useEffect(() => {
        const getEdu = async () => {
            const list = await fetchEdu();
            setEdulist(list.education);
        };
        getEdu();
    }, []);
    useEffect(() => {
        const getUserEduList = async () => {
            const edu = await fetchEduRes();
            setUserEdulist(
                edu.length > 0
                    ? edu.filter((e) => e.userId === currentUserId)
                    : []
            );
        };
        getUserEduList();
    }, [currentUserId]);

    async function fetchEdu() {
        const res = await fetch("/api/education");
        const data = await res.json();
        return data;
    }
    async function fetchEduRes() {
        const res = await fetch("/api/education/responses");
        const data = await res.json();
        return data.eduresponse;
    }

    return (
        <>
            <Header headertext={"Education"} isHidden={true} />
            <div className="m-4">
                <div className="py-8">
                    <div className="pb-4">
                        <HeaderTab
                            tabNames={[
                                "All",
                                "Resource",
                                "Depression",
                                "Anxiety",
                                "Burnout",
                            ]}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            setCurNumber={setCurNumber}
                        />
                    </div>
                    <EducationProgress
                        currentUser={currentUserId}
                        pageTitle={"education"}
                        currentTab={activeTab}
                    />
                    <div>
                        <ResourceTable
                            educationList={
                                activeTab === "All"
                                    ? edulist
                                    : edulist.filter(
                                          (edu) => edu.category === activeTab
                                      )
                            }
                            userEdu={userEdulist}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
