"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser(){

    const [uid, setUid] = useState("");
    const [isEmployee, setIsEmployee] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [organization, setOrganization] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!uid || !isEmployee || !firstName || !lastName || !email || !phone || !age || !organization){
            alert('title and decription are required');
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/users", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ 
                uid,
                isEmployee,
                firstName,
                lastName,
                email,
                phone,
                age,
                organization }),
            });
      
            if (res.ok) {
                router.refresh();
                router.push("/");
            } else {
              throw new Error("Failed to create a topic");
            }
          } catch (error) {
            console.log(error);
          }
        };

    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
        onChange={(e) => setUid(e.target.value)}
        value={uid} 
        className="border border-slate-500 px-8 py-2" type="text" placeholder="uid"/>

        <input
        onChange={(e) => setIsEmployee(e.target.value)}
        value={isEmployee}
        className="border border-slate-500 px-8 py-2" type="text" placeholder="isEmployee"/>
        
        <input
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        className="border border-slate-500 px-8 py-2" type="text" placeholder="firstName"/>

        <input
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        className="border border-slate-500 px-8 py-2" type="text" placeholder="lastName"/>

        <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border border-slate-500 px-8 py-2" type="text" placeholder="email"/>

        <input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        className="border border-slate-500 px-8 py-2" type="text" placeholder="phone"/>

        <input
        onChange={(e) => setAge(e.target.value)}
        value={age}
        className="border border-slate-500 px-8 py-2" type="text" placeholder="age"/>

        <input
        onChange={(e) => setOrganization(e.target.value)}
        value={organization}
        className="border border-slate-500 px-8 py-2" type="text" placeholder="organization"/>

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add User</button>
    </form>
    );
}

