import { GoDotFill } from "react-icons/go";

const Sensors = ({ status }) => {
  const normalStyles = {
    normal: "border-primary/30",
  };
  const suspiciousStyles = {
    suspicious: "border-amber-500/30",
  };
  const intrusionStyles = {
    intrution: "border-red-500/30",
  };
  const normalIconStyles = {
    normal: "text-primary drop-shadow-[0_0_6px_#00ff00] animate-pulse",
  };
  const suspiciousIconStyles = {
    suspicious: "text-amber-500 drop-shadow-[0_0_6px_#f59e0b] animate-pulse",
  };
  const intrutionIconStyles = {
    intrution: "text-red-500 drop-shadow-[0_0_6px_#ef4444] animate-pulse",
  };
  // console.log(status)
  return (
    <div className="max-w-6xl mx-auto px-4 py-2">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-2 pl-[14%] justify-center md:flex items-center md:justify-between md:pl-[0]">
          <div
            className={` bg-[#002147]/20 w-[8rem] flex flex-col items-center justify-center gap-1 border border-solid ${normalStyles[status] || "border-base-content/20"} rounded-md py-2`}
          >
            <GoDotFill
              size={24}
              className={`${normalIconStyles[status] || "text-base-content/20"}`}
            />
            <p className="text-sm text-base-content/70">GREEN</p>
            <span className="text-xs text-base-content/70">
              {status === "normal" ? "Active" : "Off"}
            </span>
          </div>
          <div
            className={` bg-[#002147]/20 w-[8rem] flex flex-col items-center justify-center gap-1 border border-solid ${suspiciousStyles[status] || "border-base-content/20"} rounded-md py-2`}
          >
            <GoDotFill
              size={24}
              className={`${suspiciousIconStyles[status] || "text-base-content/20"}`}
            />
            <p className="text-sm text-base-content/70">AMBER</p>
            <span className="text-xs text-base-content/70">
              {status === "suspicious" ? "Active" : "Off"}
            </span>
          </div>
          <div
            className={` bg-[#002147]/20 w-[8rem] flex flex-col items-center justify-center gap-1 border border-solid ${intrusionStyles[status] || "border-base-content/20"} rounded-md py-2`}
          >
            <GoDotFill
              size={24}
              className={`${intrutionIconStyles[status] || "text-base-content/20"}`}
            />
            <p className="text-sm text-base-content/70">RED</p>
            <span className="text-xs text-base-content/70">
              {status === "intrution" ? "Active" : "Off"}
            </span>
          </div>
          <div
            className={` bg-[#002147]/20 w-[8rem] flex flex-col items-center justify-center gap-1 border border-solid ${intrusionStyles[status] || "border-base-content/20"} rounded-md py-2`}
          >
            <GoDotFill
              size={24}
              className={`${intrutionIconStyles[status] || "text-base-content/20"}`}
            />
            <p className="text-sm text-base-content/70">BUZZER</p>
            <span className="text-xs text-base-content/70">
              {status === "intrution" ? "Active" : "Silent"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sensors;
