import OrganizationSidebar from "@/components/base/OrganizationSidebar";

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex w-screen bg-gradient-org">
            <div className="flex max-h-full min-h-screen w-1/5 flex-col items-center text-g-white-1 sm:invisible">
                <OrganizationSidebar />
            </div>
            <div className="w-4/5 rounded-tl-[40px] bg-g-white-1 ps-12">
                {children}
            </div>
        </div>
    );
}
