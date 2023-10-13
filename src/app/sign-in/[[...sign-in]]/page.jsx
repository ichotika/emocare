import {SignIn} from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="grid lg:grid-cols-3">
            <div
                className="hidden lg:block rounded-2xl col-span-2 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1560249956-b3731ecf3153')]"></div>
            <div className="col-start-3 col-end-3 -ml-16"><SignIn/></div>
        </div>
    );
}