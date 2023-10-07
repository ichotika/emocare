"use client";
import Notification from "@/components/Notification";
const Header = ({ headertext }) => {
  return (
    <header className="flex justify-between mb-9">
      <h1 className="text-3xl font-bold">{headertext}</h1>
      <Notification />
    </header>
  );
};

export default Header;
