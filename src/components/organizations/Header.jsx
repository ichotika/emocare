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

    useEffect(() => {
        if (emplist) {
            const count = emplist.reduce((acc, cur) => {
                if (cur.pending === false) {
                    return acc + 1;
                }
                return acc;
            }, 0);
            setPendingEmployee(count);
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
                    color={color}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Header;
