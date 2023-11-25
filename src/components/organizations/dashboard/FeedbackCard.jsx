"use client";

export default function FeedbackCard({ title, description, children }) {
    return (
        <div>
            <div className="flex h-[240px] flex-col">
                <p
                    style={{ color: "#0A285D" }}
                    className="mb-5 mt-6 text-b-2xl font-bold"
                >
                    {title}
                </p>
                {children}
            </div>
        </div>
    );
}
