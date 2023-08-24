import { useState } from "react";

import { Form, redirect, useNavigate, useNavigation } from "react-router-dom";

import Wrapper from "../assets/wrappers/commonWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import customFetch from "../utils/customeFecth";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  //Change the request to the formData to simplify
  const formData = await request.formData();
  //Change the formData w/c is array to normal JS obj to send to the backend
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    // toast.success("", { autoClose: 1000 });
    return redirect("/dashboard");
  } catch (error) {
    //use conditional nesting
    toast.error(error?.response?.data?.message, { autoClose: 2000 });
    return error;
  }
};

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);

  const navigation = useNavigation();

  const isSigning = navigation.state === "submitting";

  return (
    <Wrapper>
      <div className="signup-container">
        <div className="inside-singup">
          <h1 className="login-header">login</h1>
          <Form method="POST">
            <FormRow name="email" type="text" label="Email" />
            <FormRow
              name="password"
              type={passwordVisible ? "text" : "password"}
              label="Password"
              EyeIcon={passwordVisible ? BsEye : BsEyeSlash}
              togglePassword={togglePasswordVisible}
            />
            <h1></h1>
            <CtaButton
              text={` ${isSigning ? "Logging in..." : "Login"} `}
              type="submit"
            />
          </Form>
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
