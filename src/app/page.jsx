import { UserButton } from "@clerk/nextjs";
import OrganizationSidebar from "@/components/base/OrganizationSidebar";
import EmployeeSidebar from "@/components/base/EmployeeSidebar";
export default function Home() {
    return (
        <>
            <div>
                <UserButton afterSignOutUrl="/" />
            </div>
            <div>
                <h1>Organization</h1>
                <OrganizationSidebar />
            </div>
            <div>
                <h1>Employees</h1>
                <EmployeeSidebar />
            </div>
        </>
    );
}
