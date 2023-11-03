import EmployeeSidebar from "@/components/base/EmployeeSidebar";

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
                <EmployeeSidebar />
            </div>
            <div>{children}</div>
        </div>
    );
}
