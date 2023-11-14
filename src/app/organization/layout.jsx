import OrganizationSidebar from "@/components/base/OrganizationSidebar";

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex min-h-full w-screen">
            <div className="h-screen w-1/5">
                <OrganizationSidebar />
            </div>
            <div className="w-4/5">{children}</div>
        </div>
    );
}
