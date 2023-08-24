import { useState } from "react";
import { Form, useNavigate, useNavigation, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Wrapper from "../assets/wrappers/commonWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { signupActions } from "../store/signupInputData";

import { PiArrowRightBold } from "react-icons/pi";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import customFetch from "../utils/customeFecth";
import { toast } from "react-toastify";

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

  const [isSigning, setIsSigning] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSigning(true);
    //Change the values in redux store
    dispatch(
      signupActions.addSignupData({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
    );

    const request = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      await customFetch.post("/first-signup", request);
      setIsSigning(false);
      return navigate("/complete-signup");
    } catch (error) {
      //use conditional nesting
      toast.error(error?.response?.data?.message, { autoClose: 4000 });
      setTimeout(() => {
        setIsSigning(false);
      }, 4000);
      return error;
    }
  };

  return (
    <Wrapper>
      <div className="signup-container">
        <div className="inside-singup">
          <h1>Signup</h1>
          <Form method="POST" onSubmit={handleSubmit}>
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
            <CtaButton
              text={` ${isSigning ? "Signing..." : "Complete signup"} `}
              type="submit"
              disabled={isSigning}
              Icon={PiArrowRightBold}
            />
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
