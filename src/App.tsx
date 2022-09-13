import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { data } from "./Context/data";
import { ValueContext } from "./Context/Context";
import LazyLoad from "./components/LazyLoad";
import EditPage from "./Pages/dashboard/Editpage";
import Pharmacy from "./Pages/Home/Pharmacy";
const Dashboard = React.lazy(() => import("./Pages/Admin/Dashboard/Dashboard"));
const RegisterForm = React.lazy(() => import("./Pages/Register/Register"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const Home = React.lazy(() => import("./Pages/dashboard/Home"));
const Register = React.lazy(() => import("./Pages/Admin/Register/Register"));
const Profile = React.lazy(
  () => import("./Pages/Admin/Dashboard/Profile/Profile")
);
const EditData = React.lazy(
  () => import("./Pages/Admin/Dashboard/Edit_medichine/Edit")
);
const AddCatogory = React.lazy(
  () => import("./Pages/Admin/Dashboard/Add_medichine/AddCatogory")
);
function App() {
  return (
    <div className="container-fluid">
      <ValueContext.Provider value={data}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LazyLoad />}>
                <Pharmacy />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<LazyLoad />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<LazyLoad />}>
                <RegisterForm />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<LazyLoad />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense fallback={<LazyLoad />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/admin_register"
            element={
              <Suspense fallback={<LazyLoad />}>
                <Register />
              </Suspense>
            }
          />

          <Route
            path="/admin_dashboard"
            element={
              <Suspense fallback={<LazyLoad />}>
                <Dashboard />
              </Suspense>
            }
          />

          <Route
            path="/add_catogary"
            element={
              <Suspense fallback={<LazyLoad />}>
                <AddCatogory />
              </Suspense>
            }
          />
          <Route
            path="/edit_category/:id"
            element={
              <Suspense fallback={<LazyLoad />}>
                <EditData />
              </Suspense>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Suspense fallback={<LazyLoad />}>
                <EditPage />
              </Suspense>
            }
          />
        </Routes>
      </ValueContext.Provider>
    </div>
  );
}

export default App;
