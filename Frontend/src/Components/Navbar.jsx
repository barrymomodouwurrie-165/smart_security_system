import { MdFiberManualRecord } from "react-icons/md";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { useAuth } from "../useContext/userContext";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";


const Navbar = ({ timeInMs }) => {
  const { handleLogout } = useAuth();
  dayjs.extend(advancedFormat);
  return (
    <div className="w-full mb-20">
      <div className=" bg-[#002147] py-3 border-b border-solid border-base-content/10 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between pb-3 px-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-md">
              <RiShieldKeyholeFill size={24} />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold">SecureGuard</h2>
              <p className="text-base-content/70 text-xs font-serif">
                ESP32 SECURITY SYSTEM
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <p className="text-xs font-mono font-bold text-base-content/70">
                {`Date:${dayjs(timeInMs).format("dddd, Do MMMM YYYY")} Time:${dayjs(timeInMs).format("HH:mm:ss [GMT]")}`}
              </p>
              <div className="flex items-center gap-1 bg-primary/30 border-primary border-solid border rounded-lg justify-center px-3 text-primary font-serif">
                <MdFiberManualRecord
                  size={24}
                  className="text-green-500 drop-shadow-[0_0_6px_#00ff00] animate-pulse"
                />
                <span>LIVE</span>
              </div>
            </div>
            <div className="flex justify-end mt-1">
              <button
                onClick={handleLogout}
                className="btn btn-outline text-primary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
