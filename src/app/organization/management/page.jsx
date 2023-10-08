
import Header from "@/components/organizations/Header";
import AuthOrganization from "@/components/organizations/AuthOrganization";
import EmployeeTable from "@/components/organizations/EmployeeTable";

export default function Home() {
  return (
    <>
      <Header headertext={"Management"} />
      <AuthOrganization />
      <EmployeeTable />
    </>
  );
}
