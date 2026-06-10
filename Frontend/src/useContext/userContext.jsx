/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [pin, setPin] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null,
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  const handleLogin = async () => {
    if (!pin.trim()) {
      return toast.error(
        "Sorry! PIN should not be empty. Enter the PIN to login",
      );
    }
    try {
      const res = await axios.post("http://localhost:4000/api/user/login", {
        pin,
      });
      if (res?.status === 200) {
        setUser(res.data);
        console.log(user);
        navigate("/dashboard");
        setPin("");
      }
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error("User not found or Incorrect PIN");
      }
      console.log({ error });
    }
  };

  const handleLogout = async () => {
    if (!window.confirm("Are you sure you want to logout?")) return;
    try {
      await axios.post("http://localhost:4000/api/user/logout");
      toast.success("Logged out successfully");
      setUser(null);
      localStorage.clear;
      navigate("/");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, pin, setPin, user, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
