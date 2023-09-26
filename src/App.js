import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Main, AddUser, EditUser } from "./components";
import Auth from "./pages/Auth.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "./hooks/useToken";
import Navbar from "./components/Navbar";

const App = () => {
  const [token] = useToken();

  return (
    <div className="container mx-auto px-2 max-w-5xl pt-7 md:pt-10">
      {token?.token && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={!token?.token ? <Link to={"/auth"} /> : <Main />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
