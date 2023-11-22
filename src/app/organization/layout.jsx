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
        image: Dashboard,
    },
    {
        slug: "/records",
        name: "Assessment Records",
        image: Records,
    },
    {
        slug: "/management",
        name: "Management",
        image: Management,
    },
];

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex w-full bg-gradient-org xl:w-full xl:flex-col xl:bg-none">
            <div className="fixed left-0 top-0 flex h-screen w-[320px] flex-col justify-between px-6 pb-12 pt-16 text-white xl:static xl:h-auto xl:w-auto xl:px-0 xl:pb-0 xl:pt-0">
                <OrganizationSidebar menuRoutes={routesMenu} />
            </div>

            <div className="xl:rounded-tl-0 z-0 ml-[320px] min-h-screen grow rounded-tl-[40px] bg-white p-12 pb-[32px] xl:ml-0 xl:grow-0 xl:p-8">
                {children}
            </div>
        </div>
    );
}
