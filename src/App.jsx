import React from "react";
import AppRouter from "./router/AppRouter";
import { ToastContainer, Slide } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={1500}
        position="bottom-right"
        transition={Slide}
      />
      <AppRouter />
    </>
  );
}

export default App;
