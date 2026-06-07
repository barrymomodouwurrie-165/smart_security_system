import { MdFiberManualRecord} from "react-icons/md";
import { RiShieldKeyholeFill } from "react-icons/ri";

const Navbar = () => {
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
          <div className="flex items-center gap-2">
            <p className="text-xs font-mono font-bold text-base-content/70">
              Date:Monday, 8th June 2026 Time:17:39:41 GMT
            </p>
            <div className="flex items-center gap-1 bg-primary/30 border-primary border-solid border rounded-lg justify-center px-3 text-primary font-serif">
              <MdFiberManualRecord size={12} />
              <span>LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
