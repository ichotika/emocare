"use client";
import { useState, useEffect } from "react";
import Header from "@/components/organizations/Header";
import WelcomePanel from "@/components/organizations/dashboard/WelcomePanel";
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
            setAssessmentData(assessData.randAsessment);
            setNotiAssesment(assessData);
        };
        getAssessmentData();
    }, []);

    // fetch user
    const fetchEmployee = async () => {
        const res = await fetch("/api/organization/dashboardEmployee");
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getEmployee = async () => {
            const employee = await fetchEmployee();
            setEmployee(employee.employee);
        };
        getEmployee();
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
            <div className="flex flex-col">
                <p style={{top: '2rem'}} className="text-1xl absolute">WELCOME</p>
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
                    employee={employee}/>

                
                <div className="flex flex-col flex-wrap gap-6 sm:items-center ">
                    <div className="flex gap-6 sm:flex-col items-center">
                        <WorkplaceWellbeing
                            assessmentData={assessmentData}
                            employee={employee}
                        />
                       
                        <MonthlyAssessment
                            assessmentData={assessmentData}
                        />
                    </div>
                    <div className="flex max-w-full gap-6 sm:flex-col items-center">
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
