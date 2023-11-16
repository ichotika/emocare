import OrganizationSidebar from "@/components/base/OrganizationSidebar";

// import icons
import Dashboard from "@/public/assets/Wireframes/dashboard.svg";
import Records from "@/public/assets/Wireframes/assessment.svg";
import Management from "@/public/assets/Wireframes/education.svg";

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

const routesMenu = [
    {
        slug: "",
        name: "Dashboard",
        image: Dashboard
    },
    {
        slug: "/records",
        name: "Assessment Records",
        image: Records
    },
    {
        slug: "/management",
        name: "Management",
        image: Management
    }
]

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex xl:flex-col w-full xl:w-full bg-gradient-org xl:bg-none">
            <div className="flex flex-col justify-between h-screen xl:h-auto text-white w-[320px] xl:w-auto fixed top-0 left-0 xl:static pt-12 xl:pt-0 pb-12 xl:pb-0 px-6 xl:px-0">
                <OrganizationSidebar menuRoutes={ routesMenu } />
            </div>
            <div className="min-h-screen ml-[320px] xl:ml-0 rounded-tl-[40px] xl:rounded-tl-0 grow xl:grow-0 bg-white z-0">{children}</div>
        </div>
    );
}
