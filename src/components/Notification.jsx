"use client";
import Image from "next/image";

import { useState } from "react";
import Profile from "@/public/assets/Wireframes/UserProDraft.jpg";
import Bell from "@/public/assets/Wireframes/bell.svg";
const Notification = () => {
  const [notificationCount, setnNotificationCount] = useState(2);
  const [clearNotification, setClearNotification] = useState(true);
  function handleShowNotification() {
    setClearNotification(() => !clearNotification);
    setnNotificationCount(() => "");
  }
  return (
    <div className="flex justify-center items-center gap-4">
      <Image
        className="rounded-full"
        src={Profile}
        width={48}
        height={48}
        alt="Profile picture"
      />
      <div className="relative cursor-pointer" onClick={handleShowNotification}>
        <Image src={Bell} width={24} height={24} alt="Bell Notification" />
        <div
          className={
            clearNotification === true
              ? "absolute notification"
              : "absolute notification hidden"
          }>
          <div className="flex rounded-full bg-red-600 w-5 h-5 justify-center items-center">
            <span className=" text-xs text-white font-semibold text-center rounded-full">
              {notificationCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
