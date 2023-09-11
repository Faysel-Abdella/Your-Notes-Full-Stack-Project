import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Wrapper from "../assets/wrappers/profileNavBarWrapper";
import ProfileButton from "./ProfileButton";
import cancel from "../assets/images/cancle.svg";

import customFetch from "../utils/customeFecth";

const token = localStorage.getItem("token");

const ProfileNavBar = () => {
  const navigate = useNavigate();

  const newUserNameObj = useSelector((state) => state.userName);
  const newUserName = newUserNameObj.userName;

  const logoutHandler = () => {
    // localStorage.removeItem("token");
    localStorage.removeItem("darkTheme");

    navigate("/");
  };

  return (
    <Wrapper>
      <div className="profile-navbar-container">
        {/* <div className="cancel-container">
          <img src={cancel} alt="cancel-btn" className="cancel-inside" />
        </div> */}

        <p className="user-greet">Hi {newUserName}</p>
        <ProfileButton text="Modify User info" link="dashboard/edit-profile" />
        <ProfileButton text="Logout" onClick={logoutHandler} />
      </div>
    </Wrapper>
  );
};
export default ProfileNavBar;
