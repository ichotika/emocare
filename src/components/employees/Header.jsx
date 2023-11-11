// header employee

"use client";
import NotificationEmployee from "@/components/base/NotificationEmployee";
const Header = ({ headertext, notification }) => {

  return (
    <header className="flex justify-between mb-12 mt-12">
      <h1 className="text-5xl font-bold">{headertext}</h1>
      <NotificationEmployee notification={notification}/>
    </header>
  );
};

export default Header;

