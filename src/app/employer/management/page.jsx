import Main from "@/components/employers/Main";
import Header from "@/components/employers/Header";
import AuthEmployeList from "@/components/employers/AuthEmployeList";

export default function Home() {
  return (
    <>
      <Header headertext={"Management"} />
      <AuthEmployeList />
      <AuthEmployeList />
    </>
  );
}
