import MainBtn from "@/components/base/MainBtn";
import Notification from "@/components/base/Notification";
import RoundedBtn from "@/components/base/RoundedBtn";
import HeaderTab from "@/components/base/HeaderTab";

export default function Basecomponent() {
  return (
    <>
      <h2>HeaderTab</h2>
      <HeaderTab />
      <br />
      <h2>MainBtn</h2>
      <MainBtn
        buttontext={"Confirm"}
        bgColor={"bg-blue-700"}
        textColor={"text-white"}
      />
      <br />
      <br />
      <h2>Notification</h2>
      <Notification />
      <br />
      <h2>RoundedBtn</h2>
      <RoundedBtn
        buttontext={"Notify"}
        bgColor={"bg-blue-700"}
        textColor={"text-white"}
      />
    </>
  );
}
