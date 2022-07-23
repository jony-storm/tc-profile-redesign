import React, { FC, ReactElement, useState } from "react";
import "./tablist.css";
import Profile from "../tabs/profile/ProfileTab";

const TabList: FC<any> = (): ReactElement => {
  const [tabs, setTabs] = useState<any>([
    {
      title: "profile",
      componentName: "ProfileTab",
      link: "/profile_settings#profile",
      activeTab: true,
      id: "profile",
    },

    {
      title: "experience & skills",
      componentName: "ExperienceAndSkillsTab",
      link: "/profile_settings#experience-and-skills",
      activeTab: false,
      id: "experience-and-skills",
    },

    {
      title: "topcoder & you",
      componentName: "TopcoderAndYouTab",
      link: "/profile_settings#topcoder-and-you",
      activeTab: false,
      id: "topcoder-and-you",
    },
    {
      title: "tools",
      componentName: "ToolsTab",
      link: "/profile_settings#tools",
      activeTab: false,
      id: "tools",
    },
    {
      title: "accounts",
      componentName: "AccountsTab",
      link: "/profile_settings#accounts",
      activeTab: false,
      id: "accounts",
    },
    {
      title: "preferences",
      componentName: "PreferencesTab",
      link: "/profile_settings#preferences",
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
    
    return `<${activeTab.componentName} />`
  };

  return (
    <div className="tab-wrapper">
      {/* Tab nav */}
      <ul className="tab-list">
        { tabs.map((tab: any) => {
          return(
            <li className={tab.activeTab ? "active" : ""} key={tab.id}>
            <a
              onClick={handleClick}
              href={tab.link}
              id={tab.id}
            >
              {tab.title}
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