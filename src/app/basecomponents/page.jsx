import MainBtn from "@/components/base/MainBtn";
import Notification from "@/components/base/Notification";
import RoundedBtn from "@/components/base/RoundedBtn";
export default function Basecomponent() {
  return (
    <>
      <h2>MainBtn</h2>
      <MainBtn
        buttontext={"Confirm"}
        bgColor={"bg-blue-700"}
        textColor={"text-white"}
      />
      <h2>Notification</h2>
      <Notification />
      <h2>RoundedBtn</h2>
      <RoundedBtn
        buttontext={"Confirm"}
        bgColor={"bg-blue-700"}
        textColor={"text-white"}
      />
    </>
  );
}
