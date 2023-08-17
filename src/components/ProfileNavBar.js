import Wrapper from "../assets/wrappers/profileNavBarWrapper";
import ProfileButton from "./ProfileButton";
import cancel from "../assets/images/cancle.svg";

const ProfileNavBar = () => {
  return (
    <Wrapper>
      <div className="profile-navbar-container">
        {/* <div className="cancel-container">
          <img src={cancel} alt="cancel-btn" className="cancel-inside" />
        </div> */}

        <p className="user-greet">Hi faysel</p>
        <ProfileButton text="Modify User info" />
        <ProfileButton text="Logout" />
      </div>
    </Wrapper>
  );
};
export default ProfileNavBar;
