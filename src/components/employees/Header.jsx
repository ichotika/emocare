// header employee

"use client";
import NotificationEmployee from "@/components/base/NotificationEmployee";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
const Header = ({
    headertext,
    fontSize = "text-h-2xl",
    marginTB = "mb-12 mt-12 ",
    isHidden = false,
}) => {
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
        <header className={`${marginTB} flex w-full justify-between `}>
            <h1 className={`${fontSize} font-bold`}>{headertext}</h1>
            <div className={isHidden ? "xl:invisible xl:w-0" : ""}>
                <NotificationEmployee notification={notification} />
            </div>
        </header>
    );
};

export default Header;
