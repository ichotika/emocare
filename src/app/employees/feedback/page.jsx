export default function Page() {
    return (
        <div className={"flex flex-col items-center"}>
            <h1 className={"text-4xl"}>Feedback</h1>
            <div className={"mx-auto"}>
                <form action="/api/feedback" method="post" className={"flex flex-col gap-4"}>
                    <h2>
                        Anonymous Feedback
                    </h2>
                    <label htmlFor="category" className={"flex flex-col items-start"}>
                        Category
                        <select name="category" id="" required className={"bg-gray-200 p-2 shadow-xl w-full"} defaultValue={"Choose category"}>
                            <option value="depression">Depression</option>
                            <option value="anxiety">Anxiety</option>
                            <option value="burnout">Burnout</option>
                        </select>
                    </label>
                    <label htmlFor="comment" className={"flex flex-col items-start"}>
                        Comment
                        <textarea name="comment" id="" cols="120" rows="10"
                                  placeholder={"Write your comment here"} className={"bg-gray-200 p-2 shadow-xl"}
                                  required></textarea>
                    </label>
                    <div className={"flex flex-row justify-end gap-4"}>
                        <input type="reset" value="Cancel"
                               className={"cursor-pointer px-4 py-2 rounded-xl shadow-md border border-slate-200"}/>
                        <input type="submit" value="Submit"
                               className={"cursor-pointer px-4 py-2 rounded-xl shadow-md bg-blue-700 text-white"}/>
                    </div>
                </form>
            </div>
        </div>
    )
}