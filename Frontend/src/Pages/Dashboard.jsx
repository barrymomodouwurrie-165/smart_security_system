import Navbar from "../Components/Navbar";
import Status from "../Components/Status"

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <div className="max-w-xl mx-auto px-2 py-4 flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-base-content/60">
            Simulate:
          </span>
          <div className="border border-solid rounded-md px-12 py-1 text-sm font-bold font-serif ">
            NORMAL
          </div>
          <div className="border border-solid rounded-md px-6 py-1 text-sm font-bold font-serif">
            SUSPICIOUS
          </div>
          <div className="border border-solid rounded-md px-6 py-1 text-sm font-bold font-serif">
            INTRUSION
          </div>
        </div>
      </div>
      <Status />
    </div>
  );
};

export default Dashboard;
