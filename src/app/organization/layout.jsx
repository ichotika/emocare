import OrganizationSidebar from "@/components/base/OrganizationSidebar";

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex w-screen">
            <div className="flex max-h-full min-h-screen w-1/5 flex-col items-center bg-gradient-org text-g-white-1 sm:invisible">
                <OrganizationSidebar />
            </div>
            <div className="w-4/5">{children}</div>
        </div>
    );
}
