import { ClerkLoaded, ClerkLoading ,SignIn } from "@clerk/nextjs";
import LoadingGif from "@/components/base/Loading";

export default function Page() {
    return (
        <>
            <ClerkLoading>
                <LoadingGif />
            </ClerkLoading>
            <ClerkLoaded>
                <div className={"flex flex-col gap-y-10"}>
                    <SignIn initialValues={{emailAddress: "krisanaforico+99@gmail.com"}}/>
                    <article
                        className={
                            "rounded-lg bg-p-blue-1 p-8 text-g-white-1 shadow-2xl font-manrope flex flex-col gap-5"
                        }
                    >
                        <h2 className={"font-archivo text-xl font-bold"}>Test accounts:</h2>
                        <div>                <h3 className={"font-bold text-lg pl-6"}>Employer:</h3>
                            <p className={"pl-12"}>Username: <span className={"font-bold"}>pre-filled</span></p>
                            <p className={"pl-12"}>Password: <span className={"font-bold"}>sBDmzn4kjf5pmHW</span></p></div>

                        <div>                <h2 className={"font-bold text-lg pl-6"}>Employee:</h2>
                            <p className={"pl-12"}>Sign up with &quot;WMDD Organization&quot;</p></div>

                    </article>
                </div>
            </ClerkLoaded>
        </>
    );
}
