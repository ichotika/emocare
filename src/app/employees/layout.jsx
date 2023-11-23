import EmployeeSidebar from "@/components/base/EmployeeSidebar";

// import icons
import Dashboard from "@/public/assets/Wireframes/dashboard.svg";
import Assessment from "@/public/assets/Wireframes/assessment.svg";
import Education from "@/public/assets/Wireframes/education.svg";
import Support from "@/public/assets/Wireframes/support.svg";
import FAQ from "@/public/assets/Wireframes/faq.svg";
import Feedback from "@/public/assets/Wireframes/feedback.svg";

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
        slug: "/assessment",
        name: "Assessment",
        image: Assessment,
    },
    {
        slug: "/education",
        name: "Education",
        image: Education,
    },
    {
        slug: "/support",
        name: "Support",
        image: Support,
    },
];

const routesSupport = [
    {
        slug: "/feedback",
        name: "Feedback",
        image: Feedback,
    },
    {
        slug: "/faq",
        name: "FAQ",
        image: FAQ,
    },
];

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex xl:flex-col">
            {/* navbar(until xl) & sidebar*/}
            <div className="fixed left-0 top-0 flex h-screen w-[320px] grow flex-col justify-between px-6 pb-12 pt-12 xl:static xl:h-auto xl:w-auto xl:px-0 xl:pb-0 xl:pt-0">
                <EmployeeSidebar
                    menuRoutes={routesMenu}
                    supportRoutes={routesSupport}
                />
            </div>

            <div className="xl:rounded-tl-0 z-0 ml-[320px] min-h-screen grow rounded-tl-[40px] bg-p-blue-6 p-12 xl:ml-0 xl:grow-0 xl:bg-g-gray-5 xl:p-8">
                {children}
            </div>
        </div>
    );
}
