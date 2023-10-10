"use client";
import Image from "next/image";
import ProRequest from "@/public/assets/Wireframes/ProRequest.svg";
import MainBtn from "../base/MainBtn";
const AuthOrganizationList = () => {
  function testConfirm() {
    alert("confirm");
  }
  function testDecline() {
    alert("decline");
  }
  return (
    <div className="flex justify-between p-5 bg-slate-400 rounded-md mb-7">
      <div className="flex justify-between gap-6">
        <Image src={ProRequest} alt="Profile of User" />
        <div className="flex flex-col justify-between">
          <h3 className="font-semibold">Jane Doe</h3>
          <p className="font-light pb-4">Senior Deisnger</p>
          <p className="font-semibold">Employee ID- hhh@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-between gap-6 items-center">
        <MainBtn
          buttontext={"Confirm"}
          bgColor={"bg-blue-700"}
          textColor={"text-white"}
          handleClick={testConfirm}
        />
        <MainBtn
          buttontext={"Decline"}
          bgColor={"bg-white"}
          textColor={"text-blue-700"}
          handleClick={testDecline}
        />
      </div>
    </div>
  );
};

export default AuthOrganizationList;
