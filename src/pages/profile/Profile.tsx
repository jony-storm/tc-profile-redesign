import React, { FC, ReactElement } from "react";
import "./profile.css";
import Content from "../../components/content/Content";

const ProfilePage: FC<any> = (): ReactElement => {
  return (
    <>
      <div className="profile">
        <div className="header-desktop">
            <div className="page-title">profile settings</div>
            <button className="save-changes-btn">Save Changes</button>
        </div>
        <Content />
      </div>
    </>
  );
};

export default ProfilePage;
