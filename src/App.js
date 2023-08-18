import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import CompleteSignupPage from "./pages/CompleteSignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/dashboardLayout";
import TasksPage from "./pages/TasksPage";
import EditProfile from "./pages/EditProfile";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  console.log(isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <SignupPage /> },
      { path: "complete-signup", element: <CompleteSignupPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard isDarkThemeEnabled={isDarkThemeEnabled} />,
    children: [
      { index: true, element: <TasksPage /> },
      { path: "edit-profile", element: <EditProfile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
