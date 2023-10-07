import Main from "@/components/employers/Main";
import Header from "@/components/employers/Header";
import AuthEmployee from "@/components/employers/AuthEmployee";
import EmployeeTable from "@/components/employers/EmployeeTable";
export default function Home() {
  return (
    <>
      <Header headertext={"Management"} />
      <AuthEmployee />
      <EmployeeTable />
    </>
  );
}
