import React from "react";
import {createBrowserRouter , RouterProvider} from "react-router-dom";


// Impoorting All Components
import LandingPage from "./components/LandingPage/LandingPage";
import Login  from "./components/Login-Logout/login";

// Routes
const Router = createBrowserRouter([
  {
    path :"/",
    element :  <LandingPage></LandingPage>
  },
  {
    path :"/login",
    element : <Login></Login>
  },
  {
    path :"/register",
    element :  <h1>Here Register page will Come </h1>
  }
])


function App() {
  return (
    <main>
      <RouterProvider router={Router}></RouterProvider>
    </main>
  );
}

export default App;
