"use client";

const WelcomePanel = ({organizations}) => {
  // fix
  console.log("organizations-------",organizations)
  return (
    <header>
    <p className="text-1xl">WELCOME</p>   
    <h1 className="text-3xl font-bold">{organizations.orgName}</h1> 
    </header> 
  );
};

export default WelcomePanel;