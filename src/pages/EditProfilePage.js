import { useState } from "react";

import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { AiOutlinePlusCircle } from "react-icons/ai";

import Tasks from "../components/Tasks";

import Wrapper from "../assets/wrappers/editProfileWrapper";

const EditProfile = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);

  return (
    <Wrapper>
      <div className="edit-profile-container">
        <div className="edit-profile-header">
          <h3>Modify User Information</h3>
        </div>

        <form className="edit-profile-form">
          <FormRow name="email" type="text" label="Email" />
          <FormRow
            name="password"
            type={passwordVisible ? "text" : "password"}
            label="Password"
            EyeIcon={passwordVisible ? BsEye : BsEyeSlash}
            togglePassword={togglePasswordVisible}
          />
          <FormRow name="userName" type="text" label="Username" />
          <FormRow name="phone" type="number" label="Phone" />
          <FormRow name="birthDay" type="text" label="Birthday" />
        </form>
        <CtaButton text="Save Changes" />
      </div>
    </Wrapper>
  );
};
export default EditProfile;
