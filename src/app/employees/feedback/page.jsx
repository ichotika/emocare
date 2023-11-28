"use client";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const handleSubmit = (event) => {
        // action="/api/feedback" method="post"
        event.preventDefault();
        const formData = new URLSearchParams(new FormData(event.target));

        fetch("/api/feedback", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.status === 201) {
                    router.push("/employees");
                } else {
                    console.error(
                        "Feedback submission failed with status:",
                        response.status
                    );
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className={"flex flex-col items-center"}>
            <h1 className={"text-4xl"}>Feedback</h1>
            <div className={"mx-auto"}>
                <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
                    <h2>Anonymous Feedback</h2>
                    <label
                        htmlFor="category"
                        className={"flex flex-col items-start"}
                    >
                        Category
                        <select
                            name="category"
                            id=""
                            required
                            className={"w-full bg-gray-200 p-2 shadow-xl"}
                            defaultValue={"Choose category"}
                        >
                            <option value="depression">Depression</option>
                            <option value="anxiety">Anxiety</option>
                            <option value="burnout">Burnout</option>
                        </select>
                    </label>
                    <label
                        htmlFor="comment"
                        className={"flex flex-col items-start"}
                    >
                        Comment
                        <textarea
                            name="comment"
                            id=""
                            rows="10"
                            cols="120"
                            placeholder={"Write your comment here"}
                            className={"bg-gray-200 p-2 shadow-xl w-full"}
                            required
                        ></textarea>
                    </label>
                    <div className={"flex flex-row justify-end gap-4"}>
                        <input
                            type="reset"
                            value="Cancel"
                            className={
                                "cursor-pointer rounded-xl border border-slate-200 px-4 py-2 shadow-md"
                            }
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className={
                                "cursor-pointer rounded-xl bg-blue-700 px-4 py-2 text-white shadow-md"
                            }
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
