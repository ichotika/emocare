"use client";
import Image from "next/image";
import { useState } from "react";
import Bell from "@/public/assets/Wireframes/bell.svg";
import { UserButton } from "@clerk/nextjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsArrowRight, BsEnvelope } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import Link from "next/link";

const Notification = ({ headertext, notification, assessment }) => {
    const [notificationCount, setnNotificationCount] = useState(
        notification.notification.length
    );
    const [clearNotification, setClearNotification] = useState(true);

    const targetYear = 2023;
    const month10 = 9; // Month 10

    const assessmentsInTargetMY = assessment.assessment?.filter(
        (assessment) => {
            const assessmentTimestamp = new Date(assessment.timestamp);
            return (
                assessmentTimestamp.getMonth() === month10 &&
                assessmentTimestamp.getFullYear() === targetYear
            );
        }
    );

    // function handleShowNotification() {
    //     setClearNotification(() => !clearNotification);
    //     setnNotificationCount(() => "");
    // }

    const notify = () =>
        toast(
            <div className="flex flex-col items-center">
                <div className="border-b pb-5">
                    <AiOutlineUserAdd size={20} />
                    <p className="text-2xl">
                        {notification.notification[0]?.title}
                    </p>
                    <p>{notification.notification[0]?.description}</p>
                    <div className="flex justify-between">
                        <Link href="http://localhost:3000/">
                            <button className="flex items-center">
                                <div className="pr-2">
                                    {notification.notification[0]?.button}
                                </div>
                                <BsArrowRight size={20} />
                            </button>
                        </Link>

                        <p
                            style={{
                                backgroundColor: "#FEFAF4",
                                borderColor: "#EF7E49",
                                color: "#EF7E49",
                            }}
                            className="rounded-full border px-3 py-1 "
                        >
                            {notification.notification[0]?.time}
                        </p>
                    </div>
                </div>

                <div className="pt-5">
                    <BsEnvelope size={20} />
                    <p className="text-2xl">
                        {notification.notification[1]?.title}
                    </p>
                    <p>
                        {assessmentsInTargetMY?.length}
                        {notification.notification[1]?.description}
                    </p>
                    <div className="flex justify-between">
                        <Link href="http://localhost:3000/">
                            <button className="flex items-center">
                                <div className="pr-2">
                                    {notification.notification[1]?.button}
                                </div>
                                <BsArrowRight size={20} />
                            </button>
                        </Link>

                        <p
                            style={{
                                backgroundColor: "#CFDEF3",
                                borderColor: "#2469F6",
                                color: "#2469F6",
                            }}
                            className="rounded-full border px-3 py-1 "
                        >
                            {notification.notification[1]?.time}
                        </p>
                    </div>
                </div>
            </div>,

            {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        );

    return (
        <div className="flex items-center justify-center gap-4">
            <UserButton afterSignOutUrl="/" />
            <div
                className="relative cursor-pointer"
                // onClick={handleShowNotification}
                onClick={notify}
            >
                <Image
                    src={Bell}
                    width={24}
                    height={24}
                    alt="Bell Notification"
                />
                <div
                    className={
                        clearNotification === true
                            ? "notification absolute"
                            : "notification absolute hidden"
                    }
                >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600">
                        <span className=" rounded-full text-center text-sm font-semibold text-white">
                            {notificationCount}
                        </span>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Notification;
