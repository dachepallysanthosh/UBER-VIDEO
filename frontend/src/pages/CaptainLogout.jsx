import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/captain/Logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login"); // or "/captain/login"
        }
      })
      .catch(() => {
        // even if API fails, logout locally
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  return null; // important
};

export default CaptainLogout;