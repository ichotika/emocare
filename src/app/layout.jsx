import "@/styles/global.css";
import StyledComponentsRegistry from "@/libs/registry";
import { Archivo, Manrope } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
    title: "EmoCare",
    description:
        "Web App to manage mental health in your company for better organization",
};

export default function RootLayout({ children }) {
    // Uncomment <ClerkProvider> to enable user account system
    return (
        <ClerkProvider
            appearance={{
                layout: {
                    socialButtonsPlacement: "bottom",
                },
            }}
        >
            <html lang="en">
                <body>
                    <div
                        className={`${archivo.variable} ${manrope.variable}  h-screen w-screen`}
                    >
                        <StyledComponentsRegistry className="mt-8">
                            {children}
                        </StyledComponentsRegistry>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
