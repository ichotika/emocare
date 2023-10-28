"use client";

const WelcomePanel = ({organizations}) => {
  // fix
  // console.log("organizations-------",organizations)
  // console.log("organizations 0-------",organizations[0])
  console.log("organizations org-------",organizations[0]?.orgName)
  return (
    <header>
    <p className="text-1xl">WELCOME</p>   
    <h1 className="text-3xl font-bold">{organizations[0]?.orgName}</h1> 
    </header> 
  );
};

export default WelcomePanel;