import { RiShieldKeyholeFill } from "react-icons/ri";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [pin, setPin] = useState("");
  const [visible, setVisible] = useState("false");
  const [eye, setEye] = useState(true);
  const navigate = useNavigate();

  const handleInputType = () => {
    if (eye === true) {
      setVisible(false);
      setEye(false);
    }
    if (eye === false) {
      setVisible(true);
      setEye(true);
    }
  };

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

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-center">
        <div className="md:flex items-center py-10">
          <div className=" flex flex-col items-center py-4">
            <h1 className="text-2xl font-bold font-serif">
              ESP32 SECURITY SYSTEM
            </h1>
            <RiShieldKeyholeFill size={360} className="text-blue-600" />
          </div>
          <div className="border border-blue-500/20 rounded-lg h-96 ">
            <div className="card-body">
              <h1 className="card-title font-serif mx-auto">WELCOME BACK</h1>
              <div className="form-control">
                <label className="label">
                  <h1 className="label-text font-bold">
                    Enter your 6-digit Pin:
                  </h1>
                </label>
                <div className="flex items-center justify-between gap-1 pb-3">
                  <input
                    type={visible ? "password" : "text"}
                    className="input input-bordered flex-1 bg-base-content/30"
                    placeholder="6-digit-code"
                    maxLength={6}
                    onChange={(e) => {
                      setPin(e.target.value.replace(/\D/g, ""));
                    }}
                    value={pin}
                  />
                  <button
                    className="btn btn-ghost text-primary"
                    onClick={handleInputType}
                  >
                    {eye ? (
                      <FaRegEyeSlash size={16} className="text-white" />
                    ) : (
                      <FaEye size={16} className="text-white" />
                    )}
                  </button>
                </div>
              </div>
              <div className="card-actions justify-center">
                <button
                  className="btn btn-primary px-40 font-bold"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <h2 className="font-bold text-base-content/70 mx-auto">OR</h2>
              <button className="btn btn-success font-bold">Change Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
