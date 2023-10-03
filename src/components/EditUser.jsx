"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function EditUser(
    {id, uid,isEmployee,firstName,lastName,email,phone,age,organization})
    {
    const [newUid, setNewUid] = useState(uid);
    const [newIsEmployee, setNewIsEmployee] = useState(isEmployee);
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [newEmail, setNewEmail] = useState(email);
    const [newPhone, setNewPhone] = useState(phone);
    const [newAge, setNewAge] = useState(age);
    const [newOrganization, setNewOrganization] = useState(organization);


    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type":"application/json",
                },
                body: JSON.stringify({
                        newUid,
                        newIsEmployee,
                        newFirstName,
                        newLastName,
                        newEmail,
                        newPhone,
                        newAge,
                        newOrganization}),
            });

            if(!res.ok){
                throw new Error("Failed to update topic");
            }
            router.refresh();
            router.push("/")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
             onChange={(e) => setNewUid(e.target.value)} value={newUid}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="uid"/>

            <input 
             onChange={(e) => setNewIsEmployee(e.target.value)} value={newIsEmployee}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="isemployee"/>

            <input 
             onChange={(e) => setNewFirstName(e.target.value)} value={newFirstName}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="firstName"/>

            <input 
             onChange={(e) => setNewLastName(e.target.value)} value={newLastName}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="lastName"/>

            <input 
             onChange={(e) => setNewEmail(e.target.value)} value={newEmail}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="email"/>

            <input 
             onChange={(e) => setNewPhone(e.target.value)} value={newPhone}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="phone"/>

            <input 
             onChange={(e) => setNewAge(e.target.value)} value={newAge}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="age"/>

            <input 
             onChange={(e) => setNewOrganization(e.target.value)} value={newOrganization}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="organization"/>

            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update User</button>
        </form>
        );
}