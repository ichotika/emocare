// header employee

"use client";
import NotificationEmployee from "@/components/base/NotificationEmployee";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
const Header = ({ headertext }) => {
    const [notification, setNotification] = useState([]);
    const { user, isLoaded } = useUser();

    useEffect(() => {
        async function updateUser() {
            if (user) {
                try {
                    const notiData = await fetchNoti();
                    if (notiData && Array.isArray(notiData)) {
                        const filteredNoti = notiData.filter(
                            (noti) =>
                                user.id === noti.userid && noti.isRead === false
                        );
                        setNotification(filteredNoti);
                    }
                } catch (error) {
                    console.error("Error fetching notifications:", error);
                }
            }
        }
        updateUser();
    }, [user]);

    const fetchNoti = async () => {
        const res = await fetch("/api/notification/employee");
        const data = await res.json();
        return data.notiEmp;
    };
    if (!isLoaded) {
        return null;
    }

    return (
        <header className="mb-12 mt-12 flex justify-between">
            <h1 className="text-5xl font-bold">{headertext}</h1>
            <NotificationEmployee notification={notification} />
        </header>
    );
};

export default Header;
