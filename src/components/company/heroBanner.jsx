import Link from "next/link";

export default function HeroBanner() {
    return (
        <header className={"bg-[url('/company_site/heroBackground.svg')] bg-cover py-48 grid items-center justify-items-center"}>
            <div className="w-1/2 flex flex-col items-center gap-4">
                <h1 className="text-6xl text-center font-semibold">Revolutionize your <strong
                    className="text-blue-500">Business</strong> with a Focus on Employee <strong
                    className="text-orange-500">Mental Health</strong></h1>
                <p className="text-center text-2xl">Mental Wellness Drives Employee Performance and Company Prosperity</p>
                <Link className="bg-blue-700 text-white text-2xl py-4 px-8 rounded-xl" href={"/company/contact"}>Get Started Now</Link>
            </div>
        </header>
    )
}