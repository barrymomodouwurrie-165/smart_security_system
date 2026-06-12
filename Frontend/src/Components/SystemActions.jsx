import { MdSensors, MdInsertDriveFile } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const SystemActions = ({ event }) => {
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
              <GoDotFill siz={12} className="text-primary" />
              <span className="text-sm">PIR Motion</span>
            </div>
            <span className="text-xs text-primary font-bold bg-primary/30 rounded-lg px-2">
              Clear
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-base-content/20 py-1">
            <div className="flex items-center gap-1">
              <GoDotFill siz={12} className="text-primary" />
              <span className="text-sm">Door Sensor</span>
            </div>
            <span className="text-xs text-primary font-bold bg-primary/30 rounded-lg px-2">
              Closed
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-base-content/20 py-1">
            <div className="flex items-center gap-1">
              <GoDotFill siz={12} className="text-base-content/60" />
              <span className="text-sm">Temper Switch</span>
            </div>
            <span className="text-xs text-base-content/50 font-bold bg-base-content/20 rounded-lg px-2">
              Secure
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-1">
              <GoDotFill siz={12} className="text-primary" />
              <span className="text-sm">Wi-Fi Link</span>
            </div>
            <span className="text-xs text-primary font-bold bg-primary/30 rounded-lg px-2">
              Connected
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-[#002147]/20 px-4 py-2 rounded-lg">
          <div className="flex items-center gap-2 text-base-content/60 py-2">
            <MdInsertDriveFile />
            <span className="text-sm font-mono">EVENT LOG</span>
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
                  <span className="text-xs font-bold px-2.5 bg-primary/30 rounded-md text-primary">
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
