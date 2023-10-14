"use client";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
const TabMain = styled.ul`
  border-bottom: 1.5px solid var(--color-grey-300);
  font-size: 1rem;
  background-color: var(--color-grey-0);
  overflow: hidden;
`;

const Border = styled.span`
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #1e40af;
`;

function Tabbed({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabRef = useRef(null);
  const [borderStyle, setBorderStyle] = useState({ width: "0px", left: "0px" });

  useEffect(() => {
    if (activeTabRef.current) {
      const rect = activeTabRef.current.getBoundingClientRect();
      const parentRect =
        activeTabRef.current.parentElement.getBoundingClientRect();
      setBorderStyle({
        width: `${rect.width}px`,
        left: `${rect.left - parentRect.left}px`,
      });
    }
  }, [activeTab]);

  function handleActiveTab(num) {
    setActiveTab(num);
  }

  return (
    <div className="relative">
      <TabMain className="flex gap-5 ps-3 pe-3">
        {tabs.map((tabName, index) => (
          <Tab
            key={index}
            num={index}
            name={tabName}
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
            forwardedRef={activeTab === index ? activeTabRef : null}
          />
        ))}
      </TabMain>
      <Border style={borderStyle} />
    </div>
  );
}

function Tab({ num, name, activeTab, handleActiveTab, forwardedRef }) {
  return (
    <li
      ref={forwardedRef}
      className={
        activeTab === num
          ? "tab active pt-1 pb-1 text-blue-700 font-semibold cursor-pointer"
          : "tab pt-1 pb-1 cursor-pointer"
      }
      onClick={() => handleActiveTab(num)}>
      {name}
    </li>
  );
}

function HeaderTab({ tabNames }) {
  return (
    <div>
      <Tabbed tabs={tabNames} />
    </div>
  );
}

export default HeaderTab;
