// header employee

"use client";
import NotificationEmployee from "@/components/base/NotificationEmployee";
import { useEffect, useState } from "react";
const Header = ({ headertext, user }) => {
    const [notification, setNotification] = useState("");
    useEffect(() => {
        async function updateUser() {
            const notiData = await fetchNoti();

            const filteredNoti = await notiData.filter(
                (noti) => user === noti.userid && noti.isRead === false
            );
            setNotification(filteredNoti);
        }
        updateUser();
    }, [user]);
    const fetchNoti = async () => {
        const res = await fetch("/api/notification/employee");
        const data = await res.json();
        return data.notiEmp;
    };
    return (
        <header className="mb-12 mt-12 flex justify-between">
            <h1 className="text-5xl font-bold">{headertext}</h1>
            <NotificationEmployee notification={notification} />
        </header>
    );
};

export default Header;
