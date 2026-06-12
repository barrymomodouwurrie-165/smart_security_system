import { useAuth } from "../useContext/userContext";
// import { useNavigate } from "react-router";
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

  if (!user?.accessToken) return <Navigate to="/" replace />;
  return (
    <div className="min-h-screen">
      <Navbar timeInMs={timeInMs} />
      <div className="max-w-3xl mx-auto">
        <div className="max-w-[18rem] sm:max-w-xl mx-auto px-2 py-16 grid sm:flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-base-content/60 text-center">
            Simulate:
          </span>
          <div className="bg-primary/20 text-primary border border-solid rounded-md px-4 py-1 text-sm text-center font-bold font-serif ">
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
      <Status event={event} status={status} message={message} />
      <Sensors statu={status} />
      <SystemActions event={event} />
      <Footer now={now} />
    </div>
  );
};

export default Dashboard;
