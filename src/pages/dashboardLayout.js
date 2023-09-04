import { useEffect, useState } from "react";
import { Outlet, useLoaderData, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/dashboardLayoutWrapper";
import Dashboard from "../components/Dashboard";
import customFetch from "../utils/customeFecth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// export const loader = async () => {
//   const token = localStorage.getItem("token");
//   const data = {
//     token: token,
//   };

//   console.log("This is my token", data);
//   try {
//     await customFetch.post("/user/check-user", data);

//     return redirect("/dashboard");
//   } catch (error) {
//     // error.message = error?.response?.data?.message;
//     // toast.error(error?.response?.data?.message);
//     return redirect("/");
//   }
// };

const DashboardLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = {
      token: token,
    };

    console.log("This is my token", data);
    const checkTheUser = async () => {
      try {
        await customFetch.post("/users/check-user", data);

        toast.success("Login success", { autoClose: 3000 });
        return redirect("/dashboard");
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
        error.message = error?.response?.data?.message;
        return navigate("/");
      }
    };
    checkTheUser();
  }, [navigate]);

  return (
    <Wrapper>
      <Dashboard />
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;
