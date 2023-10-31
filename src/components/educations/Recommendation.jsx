import Link from "next/link";

function Recommendations({ category, topic, topicId }) {
    return (
        <>
            <p>{category}</p>
            <Link
                href={{
                    pathname: `module`,
                    query: { topicId: topicId },
                }}
                className="text-sm font-bold"
            >
                {topic}
            </Link>
        </>
    );
}

export default Recommendations;
