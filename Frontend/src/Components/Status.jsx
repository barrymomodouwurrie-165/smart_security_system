// import { FaCheckShield } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";

const Status = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-2">
      <div className=" max-w-4xl mx-auto flex items-center justify-between p-4 bg-primary/10 border border-primary/30 rounded-md">
        <div className="flex flex-col justify-center">
          <p className="text-primary">SYSTEM STATUS</p>
          <h1 className="text-5xl font-serif text-primary font-bold">Normal</h1>
          <p className="text-xs text-base-content/60">All sensors clear &mdash; no threats detected </p>
        </div>
        <div className="text-primary/70 outline">
          <RiShieldCheckFill size={24} />
        </div>
      </div>
    </div>
  );
};

export default Status;
