import { useState } from "react";
import { useLoaderData, redirect, Form, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";
import customFetch from "../utils/customeFecth";

import { toast } from "react-toastify";

import { userNameActions } from "../store/index";

import { AiOutlinePlusCircle } from "react-icons/ai";

import Wrapper from "../assets/wrappers/editProfileWrapper";

const token = localStorage.getItem("token");

// export const loader = async () => {
//   try {
//     //Make request to the current user
//     const res = await customFetch.get("/user/current-user");
//     //extract the data response from axios response
//     const { data } = res;
//     //return it to use it in the component
//     return data;
//   } catch (error) {
//     // If there is any error with finding the user when the user go to dashboard just redirect it to '/'
//     console.log(error);
//     return redirect("/");
//   }
// };

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.token = token;
  console.log("This is the data in user edit", data);

  try {
    await customFetch.patch("/user/update-user", data);

    toast.success("Successfully updated", { autoClose: 1000 });
    return redirect("/dashboard");
  } catch (error) {
    //use conditional nesting
    toast.error(error?.response?.data?.message, { autoClose: 4000 });
    return error;
  }
};

const EditProfile = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);

  const dispatch = useDispatch();

  const updateUserName = (event) => {
    const newUserName = event.target.username.value;
    console.log("This is the new user name", newUserName);
    dispatch(userNameActions.setUserName({ userName: newUserName }));
  };

  return (
    <Wrapper>
      <div className="edit-profile-container">
        <div className="edit-profile-header">
          <h3>Modify User Information</h3>
        </div>

        <Form
          className="edit-profile-form"
          method="POST"
          onSubmit={updateUserName}
        >
          <FormRow name="email" type="text" label="Email" />
          <FormRow
            name="password"
            type={passwordVisible ? "text" : "password"}
            label="Password"
            EyeIcon={passwordVisible ? BsEye : BsEyeSlash}
            togglePassword={togglePasswordVisible}
          />
          <FormRow name="username" type="text" label="Username" />
          <FormRow name="phone" type="number" label="Phone" />
          <FormRow name="birthDayYear" type="text" label="Birthday" />
          <CtaButton text={`${isSubmitting ? "Saving..." : "Save Changes"}`} />
        </Form>
      </div>
    </Wrapper>
  );
};
export default EditProfile;
