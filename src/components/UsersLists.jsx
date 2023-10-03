import UserRemoveBtn from "./UserRemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const getUsers = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/users", {
            cache: "no-store",
        });

        if (!res.ok){
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};


export default async function UsersLists(){
    const { users } = await getUsers();

    return (
        <>
        {users.map((user) => (
            <div>
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{user.firstName}<span> </span>{user.lastName}</h2>
                        <p>
                            id:{user.uid}, 
                            Employee:{user.isEmployee.toString()},
                            email:{user.email},
                            phone:{user.phone},
                            age:{user.age},
                            organization:{user.organization}
                        </p>       
                    </div>

                    <div className="flex  gap-2">
                        <UserRemoveBtn id={user._id}/>
                        <Link href={`/editUser/${user._id}`}>
                            <HiPencilAlt size={24}/>
                        </Link>
                    </div>
                </div>
            </div>
        ))}
        </>
    );
}