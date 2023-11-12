"use client";
import Notification from "@/components/base/Notification";
const Header = ({ headertext, notification, assessment }) => {
    return (
        <div className="mb-12 mt-12 flex justify-between">
            <h1 className="text-5xl font-bold">{headertext}</h1>
            <Notification notification={notification} assessment={assessment} />
        </div>
    );
};

export default Header;
