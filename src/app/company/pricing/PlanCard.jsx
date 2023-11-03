export default function PlanCard({ card }) {
    const { title, subtitle, basePrice, discountPrice, description } = card;

    return (
        <article
            className={
                "flex flex-col items-center justify-evenly gap-4 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl"
            }
        >
            <p>{subtitle}</p>
            <h2 className="text-2xl">{title}</h2>
            <p className="text-gray-400 line-through">${basePrice}</p>
            <p className="text-3xl text-blue-600">${discountPrice}</p>
            <p>Monthly/per employee</p>
            <p>{description}</p>
            <button className="bg-blue-600 text-white">Get Started</button>
        </article>
    );
}
