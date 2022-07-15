import React, { FC, ReactElement, useState } from "react";
import "./tablist.css";

const TabList: FC<any> = (): ReactElement => {
  const [tabs, setTabs] = useState<any>([
    {
      name: "profile",
      activeTab: true,
      id: "profile",
    },

    {
      name: "experience & skills",
      activeTab: false,
      id: "experience-skills",
    },

    {
      name: "topcoder & you",
      activeTab: false,
      id: "topcoder-you",
    },
    {
      name: "tools",
      activeTab: false,
      id: "tools",
    },
    {
      name: "accounts",
      activeTab: false,
      id: "accounts",
    },
    {
      name: "preferences",
      activeTab: false,
      id: "preferences",
    },
  ]);

  const handleClick = (evt: any): void => {
    evt.preventDefault();
    let currentTab = evt.target;
    const changeActiveTab = (tab: any) => {
      if(tab.id === currentTab.id) {
        tab.activeTab = true
      } else {
        tab.activeTab = false
      }
      return tab
    }

    let tempTabs = tabs.map( (tab:any) => {
      return changeActiveTab(tab)
    })

    setTabs(tempTabs)
  };

  const renderTabBody = (tabs: any) => {
    const activeTab = tabs.filter( (tab: any) => {
      return tab.activeTab === true 
    })[0]
    
    return activeTab.name + "-tab"
  };

  return (
    <div className="tab-wrapper">
      {/* Tab nav */}
      <ul className="tab-list">
        { tabs.map((tab: any) => {
          return(
            <li className={tab.activeTab ? "active" : "not-active"} key={tab.id}>
            <a
              onClick={handleClick}
              href="/profile_settings/#${tab.name}"
              id={tab.id}
            >
              {tab.name}
            </a>
          </li>)
          })
        }
      </ul>
      {/* Tab component */}
      <div className="tab-body" id="tab-body">
        { renderTabBody(tabs) }
      </div>
    </div>
  );
};

export default TabList;