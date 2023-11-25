import Link from "next/link";

export default function PlanCard({ card }) {
    const { title, subtitle, basePrice, discountPrice, description, href } =
        card;

    return (
        <article
            className={
                "flex flex-col items-center justify-evenly gap-10 rounded-lg px-6 py-12 text-center shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_2px_3px_0_rgba(0,0,0,0.06)]"
            }
        >
            <header>
                <p className={"font-manrope text-lg font-semibold"}>
                    {subtitle}
                </p>
                <h2 className="font-archivo text-4xl font-semibold">{title}</h2>
            </header>
            <div>
                <p className="font-archivo text-4xl leading-10 text-[#A2A9B0] line-through">
                    ${basePrice}
                </p>
                <p className="font-archivo text-[3.375rem] font-semibold text-p-blue-1">
                    ${discountPrice}
                </p>
                <p className={"font-manrope font-semibold"}>
                    Monthly/per employee
                </p>
            </div>
            <p className={"max-w-[258px] text-lg font-semibold"}>
                {description}
            </p>
            <Link
                href={href}
                className="rounded-lg bg-p-blue-1 px-8 py-4 font-sans text-xl text-g-white-1"
            >
                Get Started
            </Link>
        </article>
    );
}
