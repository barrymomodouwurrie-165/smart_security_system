import { RiShieldKeyholeFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
const LoginPage = () => {
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
                    type="password"
                    className="input input-bordered flex-1 bg-base-content/30"
                    placeholder="6-digit-code"
                  />
                  <button className="btn btn-outline text-primary">
                    <FaEye size={16} className="text-white hover:text-black" />
                    Show
                  </button>
                </div>
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary px-40 font-bold">
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
