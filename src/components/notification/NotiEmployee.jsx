"use client";

const NotiEmployee = ({notiEmp}) => {
    const sortedNotiEmp = notiEmp.slice().sort((a, b) => {
        const timestampA = new Date(a.timestamp);
        const timestampB = new Date(b.timestamp);
        return timestampB - timestampA; // Sort in descending order
      });

   return (
    <div>
        <p className="text-3xl font-bold">Notification</p>  
        {sortedNotiEmp.map((notification, index) => (
        <div key={index} className="flex">
          <p className="pr-4">{notification.timestamp}</p>
          <p>{notification.description}</p>
        </div>
      ))}
    </div> 
  );
};

export default NotiEmployee;