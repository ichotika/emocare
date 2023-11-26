"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsArrowRight, BsEnvelope } from "react-icons/bs";
import Link from "next/link";
import Bell from "@/public/icons/BellOrg";

const Notification = ({ notification, assessment, color }) => {
    const unreadNotifications = notification.notification.filter(
        (notif) => !notif.isRead
    );
    const [notificationCount, setNotificationCount] = useState(
        unreadNotifications.length
    );

    const [clearNotification, setClearNotification] = useState(true);
    const [clickedNotifications, setClickedNotifications] = useState([]);

    const targetYear = 2023;
    const month10 = 9; // Month 10


    const handleNotificationButtonClick = async (id, index) => {
        try {
            const response = await fetch(
                `/api/notification/organization/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const updatedNotification = {
                ...notification.notification[index],
                isRead: true,
            };
            const updatedNotifications = [...notification.notification];
            updatedNotifications[index] = updatedNotification;

            // Update the notification count and state
            setNotificationCount(notificationCount - 1);
            setClickedNotifications([...clickedNotifications, index]);
        } catch (error) {
            console.error("Error updating notification:", error);
        }
    };


    // noti time
    // ------------------------------------------------------------
    // let largestUnit = 0; 
    if (assessment && assessment.assesshistory && assessment.assesshistory.length > 0) {
        const timestampsWithIds = assessment?.assesshistory?.map(item => ({
            timestamp: new Date(item.createdAt).getTime(),
            _id: item._id
        }));
        

        const maxTimestamp = Math.max(...timestampsWithIds?.map(item => item.timestamp));
        
     
        const timeDiff = maxTimestamp - new Date();

        const formatTimeDifference = (timeDiff) => {
            const seconds = Math.abs(Math.floor(timeDiff / 1000) % 60);
            const minutes = Math.abs(Math.floor(timeDiff / (1000 * 60)) % 60);
            const hours = Math.abs(Math.floor(timeDiff / (1000 * 60 * 60)) % 24);
            const days = Math.abs(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
            return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        };



        const timeDiffFormatted = formatTimeDifference(timeDiff);
        const largestUnit = getLargestNonZeroUnit(timeDiffFormatted);
        console.log('largestUnit', largestUnit)
        
        function getLargestNonZeroUnit(timeDiffFormatted) {
            const units = timeDiffFormatted.match(/\d+\s\w+/g);
            if (!units) {
                return "No time difference";
            }
            const unitPriorities = ["days", "hours", "minutes", "seconds"];
            let largestUnit;
        
            for (const priority of unitPriorities) {
                const unit = units.find(u => u.includes(priority) && parseInt(u) > 0);
                if (unit) {
                    largestUnit = unit;
                    break;
                }
            }
            return largestUnit || "Unknown unit";
        }
        console.log('largestUnit inside if:', largestUnit);
    }
    // console.log('largestUnit outside if:', largestUnit);
    // ------------------------------------------------------------

    const renderNotification = (index) => {
        const isRead =
            notification.notification[index]?.isRead ||
            clickedNotifications.includes(index);

        const timeColor = isRead
            ? "lightgrey"
            : index === 0
            ? "orange"
            : "blue";

        const timeStyles =
            index === 0
                ? {
                      backgroundColor: isRead ? "lightgrey" : "#FEFAF4",
                      borderColor: isRead ? "lightgrey" : "#EF7E49",
                      color: isRead ? "lightgrey" : "#EF7E49",
                  }
                : {
                      backgroundColor: isRead ? "lightgrey" : "#CFDEF3",
                      borderColor: isRead ? "lightgrey" : "#2469F6",
                      color: isRead ? "lightgrey" : "#2469F6",
                  };

        return (
            <div
                key={index}
                className="border-b pb-5"
                style={{ color: isRead ? "lightgrey" : "black" }}
            >
                {index === 0 ? (
                    <div
                        style={{
                            borderColor: isRead ? "lightgrey" : "#2469F6",
                            color: isRead ? "lightgrey" : "#2469F6",
                        }}
                        className="mb-3 h-14 w-14 rounded-full border p-2 "
                    >
                        <div
                            style={{
                                backgroundColor: isRead
                                    ? "lightgrey"
                                    : "#CFDEF3",
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <AiOutlineUserAdd size={30} />
                        </div>
                    </div>
                ) : (
                    <div
                        style={{
                            borderColor: isRead ? "lightgrey" : "#2469F6",
                            color: isRead ? "lightgrey" : "#2469F6",
                        }}
                        className="my-3 h-14 w-14 rounded-full border p-2 "
                    >
                        <div
                            style={{
                                backgroundColor: isRead
                                    ? "lightgrey"
                                    : "#CFDEF3",
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <BsEnvelope size={25} />
                        </div>
                    </div>
                )}

                <p className="text-xl pb-2 font-bold">
                    {notification.notification[index]?.title}
                </p>
                <p>{notification.notification[index]?.description}</p>
                <div className="mt-3 flex items-center justify-between">
                    {index === 0 ? (
                        <Link href="../organization/management">
                            <button
                                className="flex items-center"
                                onClick={() =>
                                    handleNotificationButtonClick(
                                        notification.notification[index]?._id,
                                        index
                                    )
                                }
                            >
                                <div
                                    style={{
                                        color: isRead ? "lightgrey" : "#2469F6",
                                    }}
                                    className="pr-2"
                                >
                                    {notification.notification[index]?.button}
                                </div>
                                <BsArrowRight
                                    size={20}
                                    style={{
                                        color: isRead ? "lightgrey" : "#2469F6",
                                    }}
                                />
                            </button>
                        </Link>
                    ) : (
                        <Link href="../organization/records">
                            <button
                                className="flex items-center"
                                onClick={() =>
                                    handleNotificationButtonClick(
                                        notification.notification[index]?._id,
                                        index
                                    )
                                }
                            >
                                <div
                                    style={{
                                        color: isRead ? "lightgrey" : "#2469F6",
                                    }}
                                    className="pr-2"
                                >
                                    {notification.notification[index]?.button}
                                </div>
                                <BsArrowRight
                                    size={20}
                                    style={{
                                        color: isRead ? "lightgrey" : "#2469F6",
                                    }}
                                />
                            </button>
                        </Link>
                    )}
                    <p
                        style={{
                            ...timeStyles,
                        }}
                        className="rounded-full border px-3 py-1"
                    >
                        {/* {notification.notification[index]?.time} */}
                        {index === 0 ? 'largestUnit' : 0}
                    </p>
                </div>
            </div>
        );
    };

    const notify = () => {
        toast(
            <div className="flex flex-col items-center">
                {notification.notification.map((_, index) =>
                    renderNotification(index)
                )}
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
        <div className="flex items-center justify-center gap-4 px-12 xl:px-0">
            <UserButton afterSignOutUrl="/" />
            <div className="relative cursor-pointer" onClick={notify}>
                <Bell color={color} />
                {unreadNotifications.length > 0 ? (
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

export default Notification;
