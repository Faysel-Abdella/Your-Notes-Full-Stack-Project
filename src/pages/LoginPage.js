import { useState } from "react";

import Wrapper from "../assets/wrappers/commonWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);

  return (
    <Wrapper>
      <div className="signup-container">
        <div className="inside-singup">
          <h1 className="login-header">login</h1>
          <form>
            <FormRow name="email" type="text" label="Email" />
            <FormRow
              name="password"
              type={passwordVisible ? "text" : "password"}
              label="Password"
              EyeIcon={passwordVisible ? BsEye : BsEyeSlash}
              togglePassword={togglePasswordVisible}
            />
            <h1></h1>
            <CtaButton text="Login" />
          </form>
          <p className="normal-text login-page-normal-text">
            Don't have an account?{" "}
            <a className="go-link" href="/">
              Singup
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default LoginPage;
