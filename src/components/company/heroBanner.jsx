// import Link from "next/link";

export default function HeroBanner() {
    return (
        <header className={"bg-[url('/company_site/heroBackground.svg')] h-96 grid items-center justify-items-center"}>
            <div className="w-1/2 flex flex-col items-center">
            <h1 className="text-5xl text-center">Revolutize your <strong className="text-blue-500">Business</strong> with a Focus on Employee <strong className="text-orange-500">Mental Health</strong></h1>
            <p className="text-center">Mental Welness Drives Employee Performance and Company Posperity</p>
            <button className="bg-blue-700 text-white">Get Started Now</button>
            </div>
        </header>
    )
}