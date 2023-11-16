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
    const [notification, setNotification] = useState([]);
    const [notiAssesment, setNotiAssesment] = useState([]);

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
            setNotiAssesment(assessData);
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

    // fetch organizations
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

    // fetch notification
    const fetchNotification = async () => {
        const res = await fetch("/api/notification/organization");
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getNotification = async () => {
            const notification = await fetchNotification();
            setNotification(notification);
        };

        getNotification();
    }, []);

    const gaugeValue = 70;
    const gaugeMaxValue = 100;
    return (
        <>
            <div className="flex flex-col pl-1">
                <p style={{marginBottom: "-10px"}} className="text-1xl pt-5">
                    WELCOME
                </p>

                {notification?.notification?.length >= 0 ? (
                    <Header 
                        headertext={organizations[0]?.orgName}
                        notification={notification}
                        assessment={notiAssesment}
                    />
                ) : (
                    <></>
                )}

                <OverallCard
                    assessmentData={assessmentData}
                    employee={employee}
                />

                <div className="flex flex-col flex-wrap gap-6 sm:items-center ">
                    <div className="flex items-center gap-6 sm:flex-col">
                        <WorkplaceWellbeing
                            assessmentData={assessmentData}
                            employee={employee}
                        />

                        <MonthlyAssessment assessmentData={assessmentData} />
                    </div>
                    <div className="flex max-w-full items-center gap-6 sm:flex-col">
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
