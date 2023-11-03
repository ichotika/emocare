import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-1">
            <div className="col-span-2 rounded-2xl bg-[url('https://images.unsplash.com/photo-1560249956-b3731ecf3153')] bg-cover bg-center sm:hidden"></div>
            <div className="col-start-3 col-end-3 -ml-16">
                <SignIn />
            </div>
        </div>
    );
}
