'use client';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineUserAdd } from 'react-icons/ai'; 
import { BsArrowRight, BsEnvelope } from 'react-icons/bs'; 
import { IoNotificationsOutline  } from 'react-icons/io5'; 

const NotiOrganization = ({notification}) => {
    console.log("notification", notification[0]?.title)
  const notify = () => 
  toast(
    <div className="flex flex-col items-center">
        <div className='border-b pb-5'>
            <AiOutlineUserAdd size={20} />
            <p className='text-2xl'>{notification[0]?.title}</p>
            <p>{notification[0]?.description}</p>
            <div className='flex justify-between'>
                <button className='flex items-center'>
                    <div className='pr-2'>{notification[0]?.button}</div>
                    <BsArrowRight size={20}/>
                </button>
                <p style={{backgroundColor:"#FEFAF4", borderColor:"#EF7E49", color:"#EF7E49"}} className='px-3 py-1 rounded-full border '>{notification[0]?.time}</p>
            </div>
        </div>

        <div className='pt-5'>
            <BsEnvelope size={20} />
            <p className='text-2xl'>{notification[1]?.title}</p>
            <p>{notification[1]?.description}</p>
            <div className='flex justify-between'>
                <button className='flex items-center'>
                    <div className='pr-2'>{notification[1]?.button}</div>
                    <BsArrowRight size={20}/>
                </button>
                <p style={{backgroundColor:"#CFDEF3", borderColor:"#2469F6", color:"#2469F6"}} className='px-3 py-1 rounded-full border '>{notification[1]?.time}</p>
            </div>
        </div>
      </div>,
    
    {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (
    <div>
      <button className='color-blue' onClick={notify}>
        <IoNotificationsOutline size={40}/>
      </button>
      <ToastContainer />
    </div>
  );
};

export default NotiOrganization;
