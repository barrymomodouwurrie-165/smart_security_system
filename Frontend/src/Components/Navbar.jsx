import { MdFiberManualRecord} from "react-icons/md";
import { RiShieldKeyholeFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-6xl border-b border-solid border-base-content/10">
        <div className="flex items-center justify-between pb-3 px-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-md">
              <RiShieldKeyholeFill size={24} />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold">SecureGuard</h2>
              <p className="text-base-content/70 text-xs">
                ESP32 SECURITY SYSTEM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs font-mono text-base-content/70">17:39:41</p>
            <div className="flex items-center gap-1 bg-primary/20 border-primary border-solid border rounded-lg justify-center px-3 text-primary font-mono">
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
