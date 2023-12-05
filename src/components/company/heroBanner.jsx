import Link from "next/link";

export default function HeroBanner() {
    return (
        <header
            className={
                "grid items-center justify-items-center bg-[url('/company_site/heroBackground.svg')] bg-cover py-48 sm:py-20"
            }
        >
            <div className="flex flex-col items-center gap-4 px-10 sm:w-full">
                <h1 className="text-center text-6xl font-semibold sm:text-h-xl">
                    Revolutionize your <span className="text-p-blue-1">Business</span><br/>with a Focus
                    on Employee<br/><span className="text-s-orange-1">Mental Health</span>
                </h1>
                <p className="text-center text-b-lg">
                    Mental Wellness Drives Employee Performance and Company
                    Prosperity
                </p>
                <Link
                    className="rounded-xl bg-blue-700 px-8 py-4 font-extrabold text-white sm:mt-6"
                    href={"/company/contact"}
                >
                    Get Started Now
                </Link>
            </div>
        </header>
    );
}
