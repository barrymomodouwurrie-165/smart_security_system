import { MdSensors, MdInsertDriveFile } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const SystemActions = ({ event, status }) => {
  const typeStyles = {
    ok: "bg-green-500/30 text-green-400",
    warn: "bg-amber-500/30 text-amber-400",
    danger: "bg-red-500/30 text-red-400",
  };
  const sensStyles = {
    normal: "bg-green-500/30 text-green-400",
    suspicious: "bg-amber-500/30 text-amber-400",
    intrution: "bg-red-500/30 text-red-400",
  };
  const tamperStyles = {
    intrution: "bg-red-500/30 text-red-400",
  };
  const tamperIconStyles = {
    intrution: "text-red-400",
  };

  const sensorStyles = {
    normal: "text-green-500",
    suspicious: "text-amber-500",
    intrution: "text-red-500",
  };
  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className=" flex flex-col bg-[#002147]/20 px-4 py-2 rounded-lg">
          <div className="flex gap-2 items-center text-base-content/70">
            <MdSensors size={18} />
            <span>SENSORS</span>
          </div>
          <div className="flex items-center justify-between border-b border-base-content/20 py-1">
            <div className="flex items-center gap-1">
              <GoDotFill
                siz={12}
                className={`${sensorStyles[status] || "text-primary"}`}
              />
              <span className="text-sm">PIR Motion</span>
            </div>
            <span
              className={`text-xs font-bold ${sensStyles[status] || "text-primary bg-primary/30"} rounded-lg px-2`}
            >
              {status === "normal"
                ? "Clear"
                : status === "suspicious"
                  ? "Motion"
                  : "Triggered"}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-base-content/20 py-1">
            <div className="flex items-center gap-1">
              <GoDotFill
                siz={12}
                className={`${sensorStyles[status] || "text-primary"}`}
              />
              <span className="text-sm">Door Sensor</span>
            </div>
            <span
              className={`text-xs font-bold ${sensStyles[status] || "text-primary bg-primary/30"} rounded-lg px-2`}
            >
              {status === "normal"
                ? "Closed"
                : status === "suspicious"
                  ? "Opened"
                  : "Forced"}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-base-content/20 py-1">
            <div className="flex items-center gap-1">
              <GoDotFill
                siz={12}
                className={`${tamperIconStyles[status] || "text-base-content/60"}`}
              />
              <span className="text-sm">Temper Switch</span>
            </div>
            <span
              className={`text-xs font-bold ${tamperStyles[status] || "text-base-content/70 bg-base-content/30"} rounded-lg px-2`}
            >
              {status === "normal"
                ? "Secured"
                : status === "suspicious"
                  ? "Secured"
                  : "Tampered"}
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-1">
              <GoDotFill siz={12} className="text-primary" />
              <span className="text-sm">Wi-Fi Link</span>
            </div>
            <span className="text-xs text-primary font-bold bg-primary/30 rounded-lg px-2">
              {status === "normal"
                ? "Connected"
                : status === "suspicious"
                  ? "Connected"
                  : "Alerting"}
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-[#002147]/20 px-4 py-2 rounded-lg">
          <div className="flex items-center gap-2 text-base-content/60 py-2">
            <MdInsertDriveFile />
            <span className="text-sm font-mono">EVENT LOG</span>
          </div>
          <div className="flex items-center justify-between gap-2 my-1">
            <span className="text-sm font-mono font-bold text-base-content/70">
              Time
            </span>
            <p className="font-bold text-sm text-base-content/70 flex-1 ml-5">
              Event Messages
            </p>
            <span className="font-bold text-sm text-base-content/70">
              Event Type
            </span>
          </div>
          {event &&
            event.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="text-xs font-mono text-base-content/70">
                    {new Date(item.date).toLocaleTimeString("en-GB")}
                  </span>
                  <p className="font-bold text-sm flex-1">{item.message}</p>
                  <span
                    className={`text-xs font-bold px-2.5 rounded-md ${typeStyles[item.type] || "bg-primary/30 text-primary"}`}
                  >
                    {item.type}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SystemActions;
