export default function Page() {
    return (
        <div className={"w-full"}>
            <h1 className={"text-4xl"}>Feedback</h1>
            <div>
                <form action="" className={"flex flex-col gap-4"}>
                    <h2>
                        Anonymous Feedback
                    </h2>
                    <label htmlFor="category" className={"flex flex-col items-start"}>
                        Category
                        <select name="category" id="" className={"bg-gray-200 p-2 shadow-xl w-full"}>
                            <option value="" disabled selected>Choose category</option>
                        </select>
                    </label>
                    <label htmlFor="comment" className={"flex flex-col items-start"}>
                        Comment
                        <textarea name="comment" id="" cols="120" rows="10"
                                  placeholder={"Write your comment here"} className={"bg-gray-200 p-2 shadow-xl"}></textarea>
                    </label>
                    <div className={"flex flex-row justify-end gap-4"}>
                        <input type="reset" value="Cancel" className={"cursor-pointer px-4 py-2 rounded-xl shadow-md border border-slate-200"}/>
                        <input type="submit" value="Submit"
                               className={"cursor-pointer px-4 py-2 rounded-xl shadow-md bg-blue-700 text-white"}/>
                    </div>
                </form>
            </div>
        </div>
    )
}