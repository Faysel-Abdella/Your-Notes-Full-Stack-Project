import Wrapper from "../assets/wrappers/homePageWrapper";
import MainSvg from "../utils/svgs/MainSvg";

import bigcover from "../assets/images/bigcover.png";
import insidecover from "../assets/images/insidecover.png";

import { useState } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  // const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  // setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <Wrapper>
      <img src={bigcover} alt="cover" className="img" />
      <div className="main-container">
        <main className="inside-main">
          <div className="image-container">
            <img
              src={insidecover}
              alt="inside cover"
              className="inside-image"
            />
            <div className="inside-image-container">
              <div className="inside-image-container-content">
                <div>
                  <MainSvg />
                </div>
                <h2 className="inside-image-container-content-text">
                  Your Notes
                </h2>
              </div>
            </div>
            <span className="lang">Ar</span>
          </div>
          <Outlet />
        </main>
      </div>
    </Wrapper>
  );
};
export default HomePage;
