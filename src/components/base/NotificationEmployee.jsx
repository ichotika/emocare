"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Bell from "@/public/icons/bell.svg";

const NotificationEmployee = ({ notification }) => {
    const [notificationCount, setNotificationCount] = useState(
        notification.length
    );

    useEffect(() => {
        setNotificationCount(notification?.length);
    }, [notification]);

    const [clickedNotifications, setClickedNotifications] = useState([]);

    const handleNotificationClick = async (id, index) => {
        try {
            const response = await fetch(
                `/api/notification/employeeAssessment/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const updatedNotification = {
                ...notification[index],
                isRead: true,
            };
            const updatedNotifications = [...notification];
            updatedNotifications[index] = updatedNotification;

            // Update the notification count and state
            setNotificationCount(notificationCount - 1);
            setClickedNotifications([...clickedNotifications, index]);
        } catch (error) {
            console.error("Error updating notification:", error);
        }
    };

    const notify = () => {
        const unreadNotifications = notification
            .filter((noti) => !noti.isRead)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        toast(
            <div>
                {unreadNotifications.map((noti, index) => (
                    <Link key={index} href="/employees/assessment">
                        <div
                            className={`mb-2 pb-2 ${
                                index === unreadNotifications.length - 1 ||
                                unreadNotifications.length === 1
                                    ? ""
                                    : "border-b border-gray-300"
                            }`}
                            onClick={() =>
                                handleNotificationClick(noti?._id, index)
                            }
                        >
                            <p>{noti.timestamp}</p>
                            <p>{noti.message}</p>
                            <p>
                                Please take a moment to complete your{" "}
                                {noti.assessmentType} assessment this month.
                            </p>
                        </div>
                    </Link>
                ))}
            </div>,
            {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        );
    };

    return (
        <div className="flex items-center justify-center gap-4">
            <UserButton afterSignOutUrl="/" />
            <div className="relative cursor-pointer" onClick={notify}>
                <Image
                    src={Bell}
                    width={24}
                    height={24}
                    alt="Bell Notification"
                />
                {notification?.length > 0 ? (
                    <div className="notification absolute">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-s-orange-1">
                            <span className="text-center text-b-xs text-white">
                                {notificationCount}
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className=""></div>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default NotificationEmployee;
