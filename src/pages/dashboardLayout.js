import { Outlet, useLoaderData, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/dashboardLayoutWrapper";
import Dashboard from "../components/Dashboard";
import customFetch from "../utils/customeFecth";

export const loader = async () => {
  console.log("Dashboard loader is excuted");
  try {
    //Make request to the current user
    const res = await customFetch.get("/user/current-user");
    //extract the data response from axios response
    const { data } = res;
    //return it to use it in the component
    return data;
  } catch (error) {
    // If there is any error with finding the user when the user go to dashboard just redirect it to '/'
    console.log(error);
    return redirect("/");
  }
};

const DashboardLayout = () => {
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
