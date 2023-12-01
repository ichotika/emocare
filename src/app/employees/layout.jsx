import EmployeeSidebar from "@/components/base/EmployeeSidebar";

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

const routesMenu = [
    {
        slug: "",
        name: "Dashboard"
    },
    {
        slug: "/assessment",
        name: "Assessment"
    },
    {
        slug: "/education",
        name: "Education"
    },
    {
        slug: "/support",
        name: "Support"
    },
];

const routesSupport = [
    {
        slug: "/feedback",
        name: "Feedback"
    },
    {
        slug: "/faq",
        name: "FAQ"
    },
];

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex xl:flex-col box-border xl:bg-p-blue-6">
            {/* navbar(until xl) & sidebar*/}
            <div className="fixed left-0 top-0 flex h-screen w-[320px] grow flex-col justify-between px-6 pb-12 pt-12 xl:static xl:h-auto xl:w-auto xl:px-0 xl:pb-0 xl:pt-0 box-border">
                <EmployeeSidebar
                    menuRoutes={routesMenu}
                    supportRoutes={routesSupport}
                />
            </div>
            <div className="xl:rounded-tl-0 z-0 ml-[320px] min-h-screen box-border rounded-tl-[40px] bg-p-blue-6 px-12 py-10 xl:ml-0 grow xl:grow-0 xl:px-6 xl:py-10 w-auto xl:max-w-5xl lg:w-full xl:self-center md:py-4 sm:p-4">
                {children}
            </div>
        </div>
    );
}
