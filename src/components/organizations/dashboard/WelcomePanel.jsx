"use client";

const WelcomePanel = ({organizations}) => {
   return (
    <header>
    <p className="text-1xl">WELCOME</p>   
    <h1 className="text-3xl font-bold">{organizations[0]?.orgName}</h1> 
    </header> 
  );
};

export default WelcomePanel;