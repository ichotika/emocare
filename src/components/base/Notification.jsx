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

const Notification = ({ headertext, notification, assessment }) => {
    const unreadNotifications = notification.notification.filter((notif) => !notif.isRead);
    const [notificationCount, setNotificationCount] = useState(unreadNotifications.length);

  const [clearNotification, setClearNotification] = useState(true);
  const [clickedNotifications, setClickedNotifications] = useState([]);

  const targetYear = 2023;
  const month10 = 9; // Month 10

  const assessmentsInTargetMY = assessment.assessment?.filter((assessment) => {
    const assessmentTimestamp = new Date(assessment.timestamp);
    return (
      assessmentTimestamp.getMonth() === month10 &&
      assessmentTimestamp.getFullYear() === targetYear
    );
  });

    
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


  
  const renderNotification = (index) => {
    const isRead = notification.notification[index]?.isRead || clickedNotifications.includes(index);
  
    const timeColor = isRead ? 'lightgrey' : index === 0 ? 'orange' : 'blue';
  
    const timeStyles = index === 0
      ? {
        backgroundColor: isRead ? 'lightgrey' : '#FEFAF4',
        borderColor: isRead ? 'lightgrey' : '#EF7E49',
        color: isRead ? 'lightgrey' : '#EF7E49',
      }
      : {
        backgroundColor: isRead ? 'lightgrey' : '#CFDEF3',
        borderColor: isRead ? 'lightgrey' : '#2469F6',
        color: isRead ? 'lightgrey' : '#2469F6',
      };
  
    return (
      <div key={index} className="border-b pb-5" style={{ color: isRead ? 'lightgrey' : 'black' }}>
        {index === 0 ? (
          <div 
          style={{borderColor: isRead ? "lightgrey" : "#2469F6" , color: isRead ? "lightgrey" : "#2469F6" }} className="mb-3 w-14 h-14 p-2 rounded-full border ">
          <div style={{ backgroundColor: isRead ? "lightgrey" : "#CFDEF3" }} className="rounded-full w-10 h-10 flex items-center justify-center">
            <AiOutlineUserAdd size={30}  />
          </div>
      </div>
        ) : (
          <div style={{borderColor: isRead ? "lightgrey" : "#2469F6" , color: isRead ? "lightgrey" : "#2469F6"}} className="my-3 w-14 h-14 p-2 rounded-full border ">
            <div style={{backgroundColor: isRead ? "lightgrey" : "#CFDEF3"}}className="rounded-full w-10 h-10 flex items-center justify-center">
              <BsEnvelope size={25}  />
            </div>
        </div>
        )}
        
        <p className="text-2xl">{notification.notification[index]?.title}</p>
        <p>{notification.notification[index]?.description}</p>
        <div className="flex justify-between items-center mt-3">
          <Link href="" >
            <button className="flex items-center" onClick={() => handleNotificationButtonClick(notification.notification[index]?._id, index)}>
              <div style={{color: isRead ? "lightgrey" : "#2469F6"}} className="pr-2">{notification.notification[index]?.button}</div>
              <BsArrowRight size={20} style={{color: isRead ? "lightgrey" : "#2469F6"}}/>
            </button>
          </Link>
          <p
            style={{
              ...timeStyles, 
            }}
            className="rounded-full border px-3 py-1"
          >
            {notification.notification[index]?.time}
          </p>
        </div>
      </div>
    );
  };
  



  const notify = () => {
    toast(
      <div className="flex flex-col items-center">
        {notification.notification.map((_, index) => renderNotification(index))}
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
        {unreadNotifications.length > 0 ? (
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

export default Notification;
