import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Wrapper from "../assets/wrappers/commonWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { signupActions } from "../store/signupInputData";

import { PiArrowRightBold } from "react-icons/pi";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const SignupPage = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisible = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Change the values in redux store
    dispatch(
      signupActions.addSignupData({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
    );
    console.log("After submitting", email, password, confirmPassword);
    navigate("/complete-signup");
  };

  return (
    <Wrapper>
      <div className="signup-container">
        <div className="inside-singup">
          <h1>Signup</h1>
          <Form onSubmit={handleSubmit}>
            <FormRow
              name="email"
              type="text"
              label="Email"
              onChange={handleEmailChange}
            />
            <FormRow
              name="password"
              type={passwordVisible ? "text" : "password"}
              label="Password"
              EyeIcon={passwordVisible ? BsEye : BsEyeSlash}
              togglePassword={togglePasswordVisible}
              onChange={handlePasswordChange}
            />
            <FormRow
              name="confirmPassword"
              type={confirmPasswordVisible ? "text" : "password"}
              label="Confirm password"
              EyeIcon={confirmPasswordVisible ? BsEye : BsEyeSlash}
              togglePassword={toggleConfirmPasswordVisible}
              onChange={handleConfirmPasswordChange}
            />
            <CtaButton text="Complete signup" Icon={PiArrowRightBold} />
          </Form>
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
