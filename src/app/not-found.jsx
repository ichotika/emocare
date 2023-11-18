"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 4000);
    }, [router]);

    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Oops! That page cannot be found :(</h2>
            <p>
                Redirecting to <Link href="/">Homepage</Link>
            </p>
        </div>
    );
};

export default NotFound;
