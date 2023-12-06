import PlanCard from "./PlanCard";

const cards = [
    {
        title: "Startup Wellness",
        subtitle: "Small Business",
        price: 9.99,
        description: "For 300 or fewer",
        href: "/company/contact/small"
    },
    {
        title: "Mid-Size Partner",
        subtitle: "Mid-Size Company",
        price: 6.99,
        description: "For over 300 to 1000",
        href: "/company/contact/medium"
    },
    {
        title: "Enterprise",
        subtitle: "Large Corporation",
        price: "Custom",
        description: "For over 1000",
        href: "/company/contact/large"
    },
];

export default function Page() {
    return (
        <main className={"px-20 pb-20 pt-10 flex flex-col gap-y-12"}>
            <header className="flex flex-col items-center gap-2">
                <p className="text-center font-manrope text-xl font-bold">
                    Join Emocare
                </p>
                <h1 className="text-center text-5xl font-semibold font-archivo">
                    Find the{" "}
                    <span className="text-p-blue-1">Right Plan</span>
                </h1>
            </header>
            <section>
                <ul className="grid grid-cols-3 content-stretch gap-8 xl:grid-cols-2 lg:grid-cols-1">
                    {cards.map((card, index) => (
                        <li key={index}>
                            <PlanCard card={card}></PlanCard>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
