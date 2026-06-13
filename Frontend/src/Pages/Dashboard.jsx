import { useAuth } from "../useContext/userContext";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sensors from "../Components/Sensors";
import Status from "../Components/Status";
import SystemActions from "../Components/SystemActions";

const Dashboard = ({ event, status, message }) => {
  const { user } = useAuth();
  const [timeInMs, setTimeInMs] = useState(dayjs().valueOf());
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTimeInMs(dayjs().valueOf());
    }, 1000);
  }, []);
  const normalStyles = {
    normal: "bg-green-500/10 text-green-400 border-primary/20",
  };

  const suspiciousStyles = {
    suspicious: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };
  const intrusionStyles = {
    intrution: "bg-red-500/10 text-red-400 border-red-500/30",
  };

  if (!user?.accessToken) return <Navigate to="/" replace />;
  return (
    <div className="min-h-screen">
      <Navbar timeInMs={timeInMs} />
      <div className="max-w-3xl mx-auto">
        <div className="max-w-[18rem] sm:max-w-xl mx-auto px-2 py-16 grid sm:flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-base-content/60 text-center">
            Simulate:
          </span>
          <div
            className={`border border-solid ${normalStyles[status] || "bg-base-content/20 text-base-content/70 border-base-content/20"} rounded-md px-4 py-1 text-sm text-center font-bold font-serif `}
          >
            NORMAL
          </div>
          <div
            className={`border border-solid ${suspiciousStyles[status] || "bg-base-content/20 text-base-content/70 border-base-content/20"} rounded-md px-4 py-1 text-sm text-center font-bold font-serif `}
          >
            SUSPICIOUS
          </div>
          <div
            className={`border border-solid ${intrusionStyles[status] || "bg-base-content/20 text-base-content/70 border-base-content/20"} rounded-md px-4 py-1 text-sm text-center font-bold font-serif `}
          >
            INTRUSION
          </div>
        </div>
      </div>
      <Status event={event} status={status} message={message} />
      <Sensors status={status} />
      <SystemActions event={event} status={status} />
      <Footer now={now} />
    </div>
  );
};

export default Dashboard;
