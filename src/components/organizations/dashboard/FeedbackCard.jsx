"use client";

export default function FeedbackCard({
    imgSrc,
    author,
    title,
    description,
    children,
}) {
    return (
        <div>
            <div className="flex h-[240px] flex-col">
                <p
                    style={{ color: "#0A285D" }}
                    className="mb-5 mt-6 text-3xl font-semibold"
                >
                    {title}
                </p>
                <p className="text-4xl">{description}</p>
                {children}
            </div>
        </div>
    );
}
