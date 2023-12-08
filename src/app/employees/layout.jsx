import EmployeeSidebar from "@/components/base/EmployeeSidebar";

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

const routesMenu = [
    {
        slug: "",
        name: "Dashboard",
    },
    {
        slug: "/assessment",
        name: "Assessment",
    },
    {
        slug: "/education",
        name: "Education",
    },
    {
        slug: "/support",
        name: "Support",
    },
];

const routesSupport = [
    {
        slug: "/feedback",
        name: "Feedback",
    },
    {
        slug: "/faq",
        name: "FAQ",
    },
];

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="box-border flex xl:flex-col xl:bg-p-blue-6">
            {/* navbar(until xl) & sidebar*/}
            <div className="fixed left-0 top-0 box-border flex h-screen w-[320px] grow flex-col justify-between px-6 pb-12 pt-16 xl:static xl:h-auto xl:w-auto xl:px-0 xl:pb-0 xl:pt-0">
                <EmployeeSidebar
                    menuRoutes={routesMenu}
                    supportRoutes={routesSupport}
                />
            </div>
            <div className="xl:rounded-tl-0 z-0 ml-[320px] box-border min-h-screen w-auto grow rounded-tl-[40px] bg-p-blue-6 px-12 py-[44px] xl:ml-0 xl:max-w-5xl xl:grow-0 xl:self-center xl:px-6 xl:py-10 lg:w-full md:py-4 sm:px-4 sm:py-10">
                {children}
            </div>
        </div>
    );
}
