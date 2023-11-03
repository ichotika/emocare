import OrganizationSidebar from "@/components/base/OrganizationSidebar";

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <div className="flex min-h-full">
            <div className="h-screen">
                <OrganizationSidebar />
            </div>
            <div>{children}</div>
        </div>
    );
}
