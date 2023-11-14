import EmployeeSidebar from "@/components/base/EmployeeSidebar";

// import icons
import Dashboard from "@/public/assets/Wireframes/dashboard.svg";
import Assessment from "@/public/assets/Wireframes/assessment.svg";
import Education from "@/public/assets/Wireframes/education.svg";
import Support from "@/public/assets/Wireframes/support.svg"
import FAQ from "@/public/assets/Wireframes/faq.svg";
import Feedback from "@/public/assets/Wireframes/feedback.svg";

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
        name: "Feedback",
        image: Feedback
    },
    {
        slug: "faq",
        name: "FAQ",
        image: FAQ
    }
]

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex xl:flex-col relative">
            {/* navbar(until xl) & sidebar*/}
            <div class="flex flex-col justify-between h-full xl:h-auto w-[320px] xl:w-auto fixed top-0 left-0 xl:static pt-12 xl:pt-0 pb-12 xl:pb-0 px-6 xl:px-0">
                <EmployeeSidebar menuRoutes={routesMenu} supportRoutes={routesSupport} />
            </div>
            <div className="relative left-[320px] xl:static">{children}</div>
        </div>
    );
}


//aside:    className=" xl:min-h-screen flex justify-between xl:text-blue-700 sm:bg-blue-700"