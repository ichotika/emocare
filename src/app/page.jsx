import { UserButton } from "@clerk/nextjs";
import OrganizationSidebar from "@/components/base/OrganizationSidebar";
import EmployeeSidebar from "@/components/base/EmployeeSidebar";
import Splash from "@/components/base/Splash";
export default function Home() {
    return (
        <div className="items- m-auto flex h-screen items-center justify-center">
            <Splash />
        </div>
    );
}
