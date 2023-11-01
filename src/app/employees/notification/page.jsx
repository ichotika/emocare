"use client";
import { useState, useEffect } from "react";
import NotiEmployee from "@/components/notification/NotiEmployee";


export default function Home() {
    const [notiEmp, setNotiEmp] = useState([]);
   
    // fetch all assessment record
    const fetchNoti = async () => {
        const res = await fetch("http://localhost:3000/api/notification/employee");
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getNoti = async () => {
            const notiEmp = await fetchNoti();
            setNotiEmp(notiEmp.notiEmp);
        };
        getNoti();
    }, []);

    

    return (
        <div>
           <NotiEmployee notiEmp={notiEmp}/>
        </div>
    );
}
