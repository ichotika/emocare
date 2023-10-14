import Navbar from "@/components/Navbar";
import "@/styles/global.css";
import StyledComponentsRegistry from "@/libs/registry";
import {Inter} from "next/font/google";
// import {ClerkProvider} from '@clerk/nextjs';

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

export default function RootLayout({children}) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        // <ClerkProvider>
            <html lang="en">
            <body className={inter.className}>
            <div className="max-w-screen-lg mx-auto p-4">
                <Navbar/>
                <StyledComponentsRegistry className="mt-8">
                    {children}
                </StyledComponentsRegistry>
            </div>
            </body>
            </html>
        // </ClerkProvider>
    );
}
