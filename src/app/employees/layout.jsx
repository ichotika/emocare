import EmployeeSidebar from "@/components/base/EmployeeSidebar";

// import icons
import Dashboard from "@/public/assets/Wireframes/dashboard.svg";
import Assessment from "@/public/assets/Wireframes/assessment.svg";
import Education from "@/public/assets/Wireframes/education.svg";
import Support from "@/public/assets/Wireframes/support.svg"

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

const routesMenu = [
    {
        slug: "/",
        name: "Dashboard",
        image: Dashboard
    },
    {
        slug: "assessment",
        name: "Assessment",
        image: Assessment
    },
    {
        slug: "education",
        name: "Eduction",
        image: Education
    },
    {
        slug: "support",
        name: "Support",
        image: Support
    }
]

const routesSupport = [
    {
        slug: "feedback",
        name: "Feedback"
    },
    {
        slug: "faq",
        name: "FAQ"
    }
]

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex sm:flex-col md:flex min-h-full m-0 p-0 ">
            <aside className="max-w-xs min-h-screen justify-between text-blue-700 ">
                <EmployeeSidebar menuRoutes={routesMenu}supportRoutes={routesSupport} className="sticky top-0"/>
            </aside>
            <div>{children}</div>
        </div>
    );
}
