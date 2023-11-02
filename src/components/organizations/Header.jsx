"use client";
import Notification from "@/components/base/Notification";
const Header = ({ headertext, notification, assessment}) => {
  return (
    <header className="flex justify-between mb-12 mt-12">
      <h1 className="text-5xl font-bold">{headertext}</h1>
      <Notification notification={notification} assessment={assessment}/>
    </header>
  );
};

export default Header;
