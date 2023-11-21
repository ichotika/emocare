"use client";
import { useState, useEffect } from "react";
import Header from "@/components/organizations/Header";
import OverallCard from "@/components/organizations/dashboard/OverallCard";
import WorkplaceWellbeing from "@/components/organizations/dashboard/WorkplaceWellbeing";
import MonthlyAssessment from "@/components/organizations/dashboard/MonthlyAssessment";
import AssessmentTrendsChart from "@/components/organizations/dashboard/AssessmentTrendsChart";
import Feedbacks from "@/components/organizations/dashboard/Feedbacks";

export default function Home() {
    const [assessmentData, setAssessmentData] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const fetchOrganizations = async () => {
        const res = await fetch("/api/organization/dashboardOrganizations");
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getOrganizations = async () => {
            const organizations = await fetchOrganizations();

            setOrganizations(organizations.organizations);
        };

        getOrganizations();
    }, []);
    // fetch all assessment record
    const fetchAssessment = async () => {
        const res = await fetch("/api/organization/dashboardAssessment");
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getAssessmentData = async () => {
            const assessData = await fetchAssessment();
            setAssessmentData(assessData.assesshistory);
        };
        getAssessmentData();
    }, []);

    // employee
    async function fetchEmployee() {
        try {
            const response = await fetch("/api/fetchclerk", {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setEmployee(data.emplist);
        } catch (error) {
            console.error("Could not fetch data", error);
        }
    }
    useEffect(() => {
        fetchEmployee();
    }, []);

    // fetch feedbacks
    const fetchFeedbacks = async () => {
        const res = await fetch("/api/organization/dashboardFeedbacks");
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getFeedbacks = async () => {
            const feedbacks = await fetchFeedbacks();
            setFeedbacks(feedbacks.feedbacks);
        };
        getFeedbacks();
    }, []);

    const gaugeValue = 70;
    const gaugeMaxValue = 100;
    return (
        <>
            <div className="-mt-4 flex flex-col items-stretch pl-1 xl:items-center">
                <div className="flex w-full grow flex-col">
                    <p
                        style={{ marginBottom: "-10px" }}
                        className="text-1xl font-semibold"
                    >
                        WELCOME
                    </p>

                    {/* {notification?.notification?.length >= 0 ? ( */}
                    <div>
                        <Header headertext={organizations[0]?.orgName} />
                    </div>

                    {/* ) : (
                        <></>
                    )} */}
                </div>
                <OverallCard
                    assessmentData={assessmentData}
                    employee={employee}
                />

                <div className="max-width-org-mobile flex flex-col flex-wrap gap-6 xl:items-center">
                    <div className="flex max-h-[346px] w-full gap-6 xl:max-h-full xl:flex-col">
                        <WorkplaceWellbeing
                            assessmentData={assessmentData}
                            employee={employee}
                        />

                        <MonthlyAssessment assessmentData={assessmentData} />
                    </div>
                    <div className="flex gap-6 xl:max-h-full xl:flex-col">
                        <AssessmentTrendsChart
                            assessmentData={assessmentData}
                        />

                        <Feedbacks feedbacks={feedbacks} />
                    </div>
                </div>
            </div>
        </>
    );
}
