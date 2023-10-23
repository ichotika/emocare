import Main from "@/components/organizations/Main";
import OrganizationSidebar from "@/components/base/OrganizationSidebar";

export default function Home() {
  return (
    <>
    {/* Organization Sidebar */}
      <div className="">
        <OrganizationSidebar>
        </OrganizationSidebar>
      </div>

      <Main />
    </>
  );
}
