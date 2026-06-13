import { RiShieldCheckFill } from "react-icons/ri";
import { TbAlertTriangle, TbAlertOctagon } from "react-icons/tb";

const Status = ({ status, message }) => {
  const statusStyles = {
    normar: "bg-green-500/30 border-green-400",
    suspicious: "bg-amber-500/30 border-amber-400",
    intrution: "bg-red-500/30 border-red-400",
  };
  const textStyles = {
    normal: "text-green-500",
    suspicious: "text-amber-500",
    intrution: "text-red-500",
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-2">
      <div
        className={`max-w-4xl mx-auto flex items-center justify-between p-4 rounded-md border ${statusStyles[status] || "bg-primary/10  border-primary/30"} `}
      >
        <div className="flex flex-col justify-center">
          <p className={`${textStyles[status] || "text-primary"}`}>
            SYSTEM STATUS
          </p>
          <h1
            className={`text-5xl font-serif ${textStyles[status] || "text-primary"} font-bold my-1`}
          >
            {status === "normal"
              ? "Normal"
              : status === "suspicious"
                ? "Suspicious"
                : "Intrusion"}
          </h1>
          <p className="text-xs text-base-content/90">{message}</p>
        </div>
        <div className={`${textStyles[status] || "text-primary/70"} outline`}>
          {status === "normal" ? (
            <RiShieldCheckFill size={24} />
          ) : status === "suspicious" ? (
            <TbAlertTriangle size={24} />
          ) : (
            <TbAlertOctagon size={24} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Status;
