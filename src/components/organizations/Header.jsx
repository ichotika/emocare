"use client";
import { useState, useEffect } from "react";
import Notification from "@/components/base/Notification";
const Header = ({
    headertext,
    isHidden = false,
    color = "#0066FF",
    emplist,
}) => {
    const [notification, setNotification] = useState([]);

    const [notiAssesment, setNotiAssesment] = useState([]);

    const [pendingEmployee, setPendingEmployee] = useState(0);
    const [latestJoinDate, setLatestJoinDate] = useState([]);

    useEffect(() => {
        if (emplist) {
            const { count, latestJoinDate } = emplist.reduce(
                (result, cur) => {
                    if (!cur.pending) {
                        result.count++;
    
                        // Find the latest join date
                        if (!result.latestJoinDate || cur.joinDate > result.latestJoinDate) {
                            result.latestJoinDate = cur.joinDate;
                        }
                    }
    
                    return result;
                },
                { count: 0, latestJoinDate: null }
            );
    
            setPendingEmployee(count);
            setLatestJoinDate(latestJoinDate);
        }
    }, [emplist]);
    

    // fetch all assessment record
    const fetchAssessment = async () => {
        const res = await fetch("/api/organization/dashboardAssessment");
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getAssessmentData = async () => {
            const assessData = await fetchAssessment();
            setNotiAssesment(assessData);
        };
        getAssessmentData();
    }, []);

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
    return (
        <div
            className={
                isHidden
                    ? "hidden justify-between xl:visible xl:flex"
                    : "flex justify-between xl:hidden"
            }
        >
            <h1 className="text-h-2xl font-bold md:text-[26px]">
                {headertext}
            </h1>
            {notification?.notification?.length >= 0 ? (
                <Notification
                    notification={notification}
                    assessment={notiAssesment}
                    pendingEmployee={pendingEmployee}
                    latestJoinDate={latestJoinDate}
                    color={color}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Header;
