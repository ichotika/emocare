import UsersLists from "@/components/UsersLists";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <>
            <div>
                <UserButton afterSignOutUrl="/" />
            </div>
            <UsersLists />
        </>
    );
}