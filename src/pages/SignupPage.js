import { useState } from "react";

import Wrapper from "../assets/wrappers/commonWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { PiArrowRightBold } from "react-icons/pi";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const SignupPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisible = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);
  return (
    <Wrapper>
      <div className="signup-container">
        <div className="inside-singup">
          <h1>Signup</h1>
          <form>
            <FormRow name="email" type="text" label="Email" />
            <FormRow
              name="password"
              type={passwordVisible ? "text" : "password"}
              label="Password"
              EyeIcon={passwordVisible ? BsEye : BsEyeSlash}
              togglePassword={togglePasswordVisible}
            />
            <FormRow
              name="confirmPassword"
              type={confirmPasswordVisible ? "text" : "password"}
              label="Confirm password"
              EyeIcon={confirmPasswordVisible ? BsEye : BsEyeSlash}
              togglePassword={toggleConfirmPasswordVisible}
            />
            <CtaButton text="Complete signup" Icon={PiArrowRightBold} />
          </form>
          <p className="normal-text">
            Already have an account?{" "}
            <a className="go-link" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default SignupPage;
