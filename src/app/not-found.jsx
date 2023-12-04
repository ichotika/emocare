"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ErrScreen from "@/public/assets/404.svg";
const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/company");
        }, 2500);
    }, [router]);

    return (
        <div className="not-found flex h-screen w-screen flex-col items-center justify-center gap-2">
            <Image src={ErrScreen} alt="404" />
            <p className="text-b-2xl">
                Redirecting to{" "}
                <Link href="/" className="text-p-blue-1">
                    Homepage
                </Link>
            </p>
        </div>
    );
};

export default NotFound;
