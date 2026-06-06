import Navbar from "../Components/Navbar";
import Sensors from "../Components/Sensors";
import Status from "../Components/Status"
import SystemActions from "../Components/SystemActions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#002147]/20">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <div className="max-w-[18rem] sm:max-w-xl mx-auto px-2 py-4 grid sm:flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-base-content/60 text-center">
            Simulate:
          </span>
          <div className="border border-solid rounded-md px-4 py-1 text-sm text-center font-bold font-serif ">
            NORMAL
          </div>
          <div className="border border-solid rounded-md px-4 py-1 text-sm text-center font-bold font-serif">
            SUSPICIOUS
          </div>
          <div className="border border-solid rounded-md px-4 py-1 text-sm text-center font-bold font-serif">
            INTRUSION
          </div>
        </div>
      </div>
      <Status />
      <Sensors />
      <SystemActions />
    </div>
  );
};

export default Dashboard;
