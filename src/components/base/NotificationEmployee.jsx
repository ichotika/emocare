"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsArrowRight, BsEnvelope } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import Link from "next/link";
import Bell from "@/public/assets/Wireframes/bell.svg";





const NotificationEmployee = ({headertext, notification}) => {

    const [notificationCount, setNotificationCount] = useState(notification?.length);

    const [clearNotification, setClearNotification] = useState(true);
    const [clickedNotifications, setClickedNotifications] = useState([]);





    const handleNotificationButtonClick = async (id, index) => {
        try {
            const response = await fetch(`/api/notification/organization/${id}`, {
                method: 'PATCH', 
                headers: {
                'Content-Type': 'application/json',
                },
            });

        const updatedNotification = { ...notification.notification[index], isRead: true };
        const updatedNotifications = [...notification.notification];
        updatedNotifications[index] = updatedNotification;

        // Update the notification count and state
        setNotificationCount(notificationCount - 1);
        setClickedNotifications([...clickedNotifications, index]);

        } catch (error) {
        console.error('Error updating notification:', error);
        }
    };


    console.log('lenght', notification.length)
    console.log('sdnokasdklsd', notification.userid)

    const notify = () => {
        toast(
            <div>
            <div className="flex flex-col">
                <div style={{borderColor:  "#2469F6" , color: "#2469F6"}} className="my-3 w-14 h-14 p-2 rounded-full border ">
                    <div style={{backgroundColor:  "#CFDEF3"}}className="rounded-full w-10 h-10 flex items-center justify-center">
                    <BsEnvelope size={25}  />
                    </div>
                </div>

            {/* dlmfdsl;fm */}
                <p>{notification?.userid}</p>
                <p>{notification?.timestamp}</p>

                <p>Please take a moment to complete your assessment this month.</p>

                <Link href="" >
                    {/* <button className="flex items-center" onClick={() => handleNotificationButtonClick(notification.notification[index]?._id, index)}>
                    <div style={{color: isRead ? "lightgrey" : "#2469F6"}} className="pr-2">{notification.notification[index]?.button}</div>
                    <BsArrowRight size={20} style={{color: isRead ? "lightgrey" : "#2469F6"}}/> */}
            {/* </button> */}
                    <button>
                        <div className="flex items-center mt-5">
                            <p className=" mr-3">Take Assessment</p>
                            <BsArrowRight size={20}/>
                        </div>
                    </button>
                </Link>
            </div>
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
          <Image src={Bell} width={24} height={24} alt="Bell Notification" />

          {notification?.length > 0 ? (
            <div className="notification absolute">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600">
                <span className=" rounded-full text-center text-sm font-semibold text-white">
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
