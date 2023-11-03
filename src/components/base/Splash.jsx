"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "@/public/icons/logo_main.svg";
import { motion, AnimatePresence } from "framer-motion";

function Splash() {
    const router = useRouter();
    const { isLoaded, user } = useUser();

    useEffect(() => {
        if (user) {
            const userRole = user?.unsafeMetadata?.role;
            if (userRole === "employee") {
                router.push("/employees");
            } else if (userRole === "organization") {
                router.push("/organization");
            }
        }
    }, [user, router]);

    return (
        <AnimatePresence mode="animate">
            {!isLoaded ? (
                <motion.div
                    key="splash"
                    className="splash-container m-auto flex"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        repeat: 1,
                    }}
                >
                    <Image src={Logo} alt="logo" />
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}

export default Splash;
