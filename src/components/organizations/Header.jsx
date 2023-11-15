"use client";
import Notification from "@/components/base/Notification";
const Header = ({ headertext, notification, assessment }) => {
    return (
        <div className="flex justify-between">
            <h1 className="text-h-3xl font-bold md:text-h-xl">{headertext}</h1>
            <Notification notification={notification} assessment={assessment} />
        </div>
    );
};

export default Header;
