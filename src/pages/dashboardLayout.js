import { useEffect } from "react";
import { Outlet, useLoaderData, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/dashboardLayoutWrapper";
import Dashboard from "../components/Dashboard";
import customFetch from "../utils/customeFecth";
import { useNavigate } from "react-router-dom";
// export const loader = async () => {

//   try {
//     //Make request to the current user
//     const res = await customFetch.get("/user/verify", {
//       headers: {
//         Authorization: token,
//       },
//     });

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
        await customFetch.post("/user/check-user", data);

        // toast.success("Login success", { autoClose: 3000 });
        return redirect("/jobs");
      } catch (error) {
        // toast.error(error?.response?.data?.message);
        error.message = error?.response?.data?.message;
        return redirect("/signup");
      }
    };
    checkTheUser();
  }, []);

  const data = useLoaderData();
  console.log(data);
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
