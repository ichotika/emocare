import Main from "@/components/organizations/Main";
import OrganizationSidebar from "@/components/base/OrganizationSidebar";

export default function Home() {
    return (
        <>
            <div className="flex min-h-full">
                {/* Organization Sidebar */}
                <div className="min-h-full">
                    <OrganizationSidebar />
                </div>
                <div>
                    <Main />
                </div>
            </div>
        </>
    );
}
