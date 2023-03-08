import React from "react";
import Appbar from "../../Shared/Navbar/Appbar";
import AvatarCard from "./Avatar/AvatarCard";
import "./ProfilePage.css";
import starsImg from "../../asset/stars.svg";
import profilePic from "../../asset/user-profile.svg";

function ProfilePage() {
  return (
    <>
      <Appbar />
      <div className="container">
        <div className="profile-container">
        {/* left panel for avatar card */}
          <div className="profile-left-pane">
            <AvatarCard />
            <div className="side-navigation-tab selected">Account Settings</div>
            <div className="side-navigation-tab">Notifications Settings</div>
          
          </div>
          <div className="profile-right-pane">
            {/* personal info section row */}
            <div className="row">
                {/* left column for personal info */}
              <div className="col-lg">
                <div className="profile-info-section">
                  <div class="mobile-only">
                    <img src={profilePic} />
                  </div>
                  <div className="pro-data">
                  <div className="name">Ruhma Tariq</div>
                  <div className="member">Member since 2018</div>
                  <button className="edit-profile-btn">
                    Edit profile <i class="fa-solid fa-pencil"></i>
                  </button>
                    </div>
                </div>
              </div>
              {/* right column for personal info */}
              <div className="p-0 col-lg">
              <div className="mobile-only info-section-heading mobile-heading">General Information</div>
               
                <div className="profile-personal">
                
                <div className="profile-data">
                  <i class="fa-solid fa-user">&nbsp;</i> Ruhma tarik
                  <img src={starsImg} />
                </div>
                <div className="profile-data">
                  <i class="fa-solid fa-envelope"></i> ruhmatarik007@gmail.com
                </div>
                <div className="profile-data">
                  <i class="fa-solid fa-location-dot"> </i>New Delhi, India
                </div>
                <div className="profile-data">
                  <i class="fa-solid fa-phone"> </i>+92 900 900 900
                </div>
                </div>
                
              </div>
              
            </div>
            <div className="section-divider desktop-only"></div>
            {/* organisation info section */}
            <div className="row">
                {/*left column for organisation info heading */}
                <div className="col-lg">
                    <div className="profile-org-info">
                        <div className="profile-info-heading mobile-heading">Organisation information</div>
                        <div className="profile-info-subtext desktop-only">You can add your current company here and also edit the experience.</div>
                    </div>
                </div>
               {/* right column for organisation info details */}
                <div className="col-lg profile-org-details">
                <div className="profile-data">
                <i class="fa-solid fa-building"></i> DiveDeepAI
                </div>
                <div className="profile-data">
                <i class="fa-solid fa-briefcase"></i> 3 Years Experience
                </div>
                </div>
            </div>
            <div className="section-divider desktop-only"></div>
            {/* file upload section */}
            <div className="row">
                {/*left column for file upload heading */}
                <div className="col-lg">
                    <div className="profile-org-info">
                        <div className="profile-info-heading mobile-heading">Files</div>
                        <div className="profile-info-subtext desktop-only">You can edit/change the visa file and Emirates ID card.</div>
                    </div>
                </div>
               {/* right column for file upload details */}
                <div className="col-lg profile-file-details">
                <div className="profile-data">
                <i class="fa-solid fa-paperclip"></i> Visa File
                </div>
                <div className="profile-data">
                <i class="fa-solid fa-address-card"></i> Emirated Id
                </div>
                </div>
            </div>
            <div className="section-divider desktop-only"></div>

            {/* gallery section */}
            <div className="row">
                {/*left column for gallery  heading */}
                <div className="col-lg">
                    <div className="profile-org-info">
                        <div className="profile-info-heading mobile-heading">Gallery</div>
                        <div className="profile-info-subtext desktop-only">You can add upto 5 images</div>
                    </div>
                </div>
               {/* right column for gallery  details */}
                <div className="col-lg profile-gallery-detail">
                    <div className="gallery-placeholder"></div>
                    <div className="gallery-placeholder"></div>
                    <div className="gallery-placeholder"></div>
                    <div className="gallery-placeholder"></div>
                </div>
            </div>
            <div className="section-divider desktop-only"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
