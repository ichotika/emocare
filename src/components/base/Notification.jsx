"use client";
import Image from "next/image";
import { useState } from "react";
import Bell from "@/public/assets/Wireframes/bell.svg";
import { UserButton } from "@clerk/nextjs";

const Notification = () => {
    const [notificationCount, setnNotificationCount] = useState(2);
    const [clearNotification, setClearNotification] = useState(true);
    function handleShowNotification() {
        setClearNotification(() => !clearNotification);
        setnNotificationCount(() => "");
    }
    return (
        <div className="flex items-center justify-center gap-4">
            <UserButton afterSignOutUrl="/" />
            <div
                className="relative cursor-pointer"
                onClick={handleShowNotification}
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
        </div>
    );
};

export default Notification;
