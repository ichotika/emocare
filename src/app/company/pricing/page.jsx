import PlanCard from "./PlanCard";

const cards = [
    {
        title: "Startup Wellness",
        subtitle: "Small Business",
        basePrice: 12.99,
        discountPrice: 11.99,
        description: "For Companies with 300 or fewer Employees",
    },
    {
        title: "Mid-Size Partner",
        subtitle: "Mid-Size Company",
        basePrice: 11.99,
        discountPrice: 10.99,
        description: "For Companies with over 300 to 1000 Employees",
    },
    {
        title: "Organization",
        subtitle: "Large Corporation",
        basePrice: 10.99,
        discountPrice: 9.99,
        description: "For Companies with over 1000 Employees",
    },
];

export default function Page() {
    return (
        <>
            <header className="flex flex-col items-center">
                <p className="text-center">Join Emocare</p>
                <h1 className="text-center text-5xl">
                    Find the{" "}
                    <strong className="text-blue-500">Right Plan</strong>
                </h1>
                <ul className="grid grid-cols-3 content-center gap-8 sm:grid-cols-1">
                    {cards.map((card, index) => (
                        <li key={index}>
                            <PlanCard card={card}></PlanCard>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    );
}
