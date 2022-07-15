import React from 'react';
import { Delete, Edit } from '@material-ui/icons';

function ProfileTab() {
  return (
      <div className="tab-body-header">
          <div className="tab-body-header-top">
            <span className="top-title">Basic Info</span>
            <hr className="hr"/>
          </div>
          <div className="tab-body-header-bottom">
            <div className="bottom-left">
            <span className="bottom-title">Add your image</span>
            <span className="bottom-sub-title">Show the community who you are. Don't worry, you look great!</span>
            <ul className="requirements">Requirements:
              <li>PNG or JPG format</li>
              <li>Maximum size 2MB</li>
            </ul>
            </div>
            <div className="bottom-right">
              <img src="/assets/profile.jpg" className="upload-profile-img" />
              <div className="btn-wrapper">
                <button className="edit-btn">
                  <Edit className="edit-btn-icon"/>
                  <span className="edit-btn-text">UPLOAD NEW PHOTO</span>
                </button>
                <button className="delete-btn">
                  <Delete className="delete-btn-icon"/>
                  <span className="delete-btn-text">UPLOAD NEW PHOTO</span>
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}

export default ProfileTab;
