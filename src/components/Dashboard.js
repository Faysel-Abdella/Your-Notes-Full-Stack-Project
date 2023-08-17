import { useReducer } from "react";

import ProfileNavBar from "./ProfileNavBar";

import Wrapper from "../assets/wrappers/dashboardWrapper";

import logo from "../assets/images/dashbordlogo.svg";
import user from "../assets/images/user.svg";
import dark from "../assets/images/dark.svg";
import sun from "../assets/images/sun.svg";
import backgroundImage from "../assets/images/dashboardcover.png";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle lang":
      return {
        showNav: state.showNav,
        isArabic: !state.isArabic,
        isDark: state.isDark,
      };
    case "toggle nav":
      console.log(state.showNav);
      return {
        showNav: !state.showNav,
        isArabic: state.isArabic,
        isDark: state.isDark,
      };
    case "toggle dark":
      return {
        showNav: state.showNav,
        isArabic: state.isArabic,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

const Dashboard = ({ isDarkThemeEnabled }) => {
  const initialState = {
    showNav: false,
    isArabic: false,
    isDark: isDarkThemeEnabled,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  document.body.classList.toggle("dark-theme", state.isDark);
  localStorage.setItem("darkTheme", state.isDark);

  return (
    <Wrapper>
      <div className="top-dashboard">
        <div className="logo-and-text">
          <img src={logo} alt="logo" />
          <h2>Your Notes</h2>
        </div>

        <div className={`add-info ${state.showNav ? "nav-open" : ""}`}>
          <h2>Ar</h2>
          <span onClick={() => dispatch({ type: "toggle dark" })}>
            {state.isDark && <img src={sun} alt="dark" />}
            {!state.isDark && <img src={dark} alt="dark" />}
          </span>
          <span onClick={() => dispatch({ type: "toggle nav" })}>
            <img src={user} alt="user" />
          </span>

          <nav className="profile-navbar">
            <ProfileNavBar />
          </nav>
        </div>
      </div>

      <div className="dashboard-image-container">
        <img src={backgroundImage} alt="" className="dashboard-image" />
      </div>
    </Wrapper>
  );
};
export default Dashboard;
