"use client";
import { useState, useEffect } from "react";
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

    // fetch all assessment record
    const fetchAssessment = async () => {
        const res = await fetch("http://localhost:3000/api/organization/dashboardAssessment");
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getAssessmentData = async () => {
            const assessData = await fetchAssessment();
            setAssessmentData(assessData.randAsessment);
        };
        getAssessmentData();
    }, []);

    
    // fetch user
    const fetchEmployee = async () => {
        const res = await fetch("http://localhost:3000/api/organization/dashboardEmployee");
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
        const res = await fetch("http://localhost:3000/api/organization/dashboardFeedbacks");
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
        const res = await fetch("http://localhost:3000/api/organization/dashboardOrganizations");
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


    const gaugeValue = 70;
    const gaugeMaxValue = 100;

    return (
        <div>
              {/* {assessmentData.length > 0 ? (
                <OverallCard assessmentData={assessmentData}/>
            ): ('no data') } */}

            <WelcomePanel organizations={organizations}/>
            <OverallCard assessmentData={assessmentData} employee={employee}/>
            
          

            <div className="flex flex-col flex-wrap gap-6">
                <div className="flex max-w-full gap-6">
                    <div className="w-1/4">
                    <WorkplaceWellbeing
                        assessmentData={assessmentData}
                        employee={employee}
                    />
                    </div>
                    <div className="w-3/4">
                        <MonthlyAssessment assessmentData={assessmentData}/>
                    </div>
                </div>
                <div className="flex max-w-full  gap-6">
                    <AssessmentTrendsChart assessmentData={assessmentData}  />
                    <Feedbacks feedbacks={feedbacks}/>
                </div>
            </div>
            
        </div>
    );
}
