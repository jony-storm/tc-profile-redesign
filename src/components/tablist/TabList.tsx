import React, { FC, ReactElement, useState } from "react";
import ProfileTab from "../tabs/profile/ProfileTab";
import AccountsTab from "../tabs/accounts/AccountsTab";
import "./tablist.css";

const TabList: FC<any> = (): ReactElement => {
  const [currentTab, setCurrentTab] = useState("profile-tab");
  const handleClick = (evt: any) => {
    evt.preventDefault();
    let currentTabId = evt.target.id;
    // evt.target.parentElement.classList.add("expand");
    if (currentTabId === "profile-tab") {
      setCurrentTab("profile-tab");
    } else if (currentTabId === "exp-skills-tab") {
      evt.target.parentElement.id = "expand";
      setCurrentTab("exp-skills-tab");
    } else if (currentTabId === "tc-you-tab") {
      evt.target.parentElement.id = "expand";
      setCurrentTab("tc-you-tab");
    } else if (currentTabId === "tools-tab") {
      evt.target.parentElement.id = "expand";
      setCurrentTab("tools-tab");
    } else if (currentTabId === "accounts-tab") {
      evt.target.parentElement.id = "expand";
      setCurrentTab("accounts-tab");
    } else if (currentTabId === "preferences-tab") {
      evt.target.parentElement.id = "expand";
      setCurrentTab("preferences-tab");
    }
  };

  const renderTabBody = (currentTabName: string) => {
    if (currentTabName === "profile-tab") {
      return <ProfileTab />;
    } else if (currentTabName === "exp-skills-tab") {
      return "exp-skills-tab";
    } else if (currentTabName === "tc-you-tab") {
      return "tc-you-tab";
    } else if (currentTabName === "tools-tab") {
      return "tools-tab";
    } else if (currentTabName === "accounts-tab") {
      return <AccountsTab/>
    } else if (currentTabName === "preferences-tab") {
      return "preferences-tab";
    }
  };
  return (
    <div className="tab-wrapper">
      {/* Tab nav */}
      <ul className="tab-list">
        <li className="tab-list-item">
          <a id="profile-tab" onClick={handleClick} href="/profile_settings/profile">
            profile
          </a>
        </li>
        <li className="tab-list-item">
          <a id="exp-skills-tab" onClick={handleClick} href="/profile_settings/experience&skills">
            experience & skills
          </a>
        </li>
        <li className="tab-list-item">
          <a id="tc-you-tab" onClick={handleClick} href="/profile_settings/topcoder&you">
            topcoder & you
          </a>
        </li>
        <li className="tab-list-item">
          <a id="tools-tab" onClick={handleClick} href="/profile_settings/tools">
            tools
          </a>
        </li>
        <li className="tab-list-item">
          <a id="accounts-tab" onClick={handleClick} href="/profile_settings/accounts">
            accounts
          </a>
        </li>
        <li className="tab-list-item">
          <a id="preferences-tab" onClick={handleClick} href="/profile_settings/preferences">
            preferences
          </a>
        </li>
      </ul>
      {/* Tab component */}
      <div className="tab-body" id="tab-body">
        {renderTabBody(currentTab)}
      </div>
    </div>
  );
};

export default TabList;
