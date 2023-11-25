import Link from "next/link";

export default function HeroBanner() {
    return (
        <header className={"bg-[url('/company_site/heroBackground.svg')] bg-cover py-48 grid items-center justify-items-center"}>
            <div className="w-1/2 flex flex-col items-center gap-4">
                <h1 className="text-6xl text-center font-semibold">Revolutionize your <span
                    className="text-p-blue-1">Business</span> with a Focus on Employee <span
                    className="text-s-orange-1">Mental Health</span></h1>
                <p className="text-center text-2xl">Mental Wellness Drives Employee Performance and Company Prosperity</p>
                <Link className="bg-blue-700 text-white text-2xl py-4 px-8 rounded-xl" href={"/company/contact"}>Get Started Now</Link>
            </div>
        </header>
    )
}