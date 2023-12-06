import Link from "next/link";

export default function PlanCard({ card }) {
    const { title, subtitle, price, description, href } =
        card;

    return (
        <article
            className={
                "flex flex-col items-center gap-10 rounded-lg px-6 py-12 text-center h-full shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_2px_3px_0_rgba(0,0,0,0.06)]"
            }
        >
            <header>
                <p className={"font-manrope text-lg font-semibold"}>
                    {subtitle}
                </p>
                <h2 className="font-archivo text-4xl font-semibold">{title}</h2>
            </header>
            <div>
                <p className={`font-archivo text-[3.375rem] font-semibold text-p-blue-1 ${(typeof price == 'number')?"before:content-['$']":""}`}>
                    {price}
                </p>
                <p className={"font-manrope font-semibold text-xl"}>
                    Monthly / Per employee
                </p>
            </div>
            <p className={"max-w-[258px] text-xl font-semibold"}>
                {description}<br/>Employees
            </p>
            <Link
                href={href}
                className="rounded-lg bg-p-blue-1 px-8 py-4 font-sans text-xl text-g-white-1 mt-auto"
            >
                {(typeof price == 'number')?"Get Started":"Contact Us"}
            </Link>
        </article>
    );
}
