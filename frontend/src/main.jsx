import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import UserProvider from "./context/UserContext";
import CaptainProvider from "./context/CaptainContext";
import SocketProvider from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <UserProvider>
    <CaptainProvider>
      <SocketProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketProvider>
    </CaptainProvider>
  </UserProvider>
);
