import { GoDotFill } from "react-icons/go";

const Sensors = () => {
  return (
    <div className="max-w-4xl mx-auto pl-4 py-2.5">
      <div className="max-w-4xl mx-auto px-2">
        <div className="grid grid-cols-2 gap-2 justify-center pl-[20%] md:grid-cols-4 md:px-4">
          <div className=" bg-[#002147]/20 w-[8rem] flex flex-col items-center justify-center gap-1 border border-primary/50 rounded-md py-2">
            <GoDotFill
              size={24}
              className="text-primary drop-shadow-[0_0_6px_#00ff00]"
            />
            <p className="text-sm text-base-content/70">GREEN</p>
            <span className="text-xs text-base-content/70">Active</span>
          </div>
          <div className=" bg-[#002147]/20 w-[8rem] flex flex-col items-center justify- gap-1 border border-primary/50 rounded-md py-2">
            <GoDotFill size={24} className="text-base-content/20" />
            <p className="text-sm text-base-content/70">AMBER</p>
            <span className="text-xs text-base-content/70">Off</span>
          </div>
          <div className=" bg-[#002147]/20 w-[8rem] flex flex-col items-center justify-center gap-1 border border-primary/50 rounded-md py-2">
            <GoDotFill size={24} className="text-base-content/20" />
            <p className="text-sm text-base-content/70">RED</p>
            <span className="text-xs text-base-content/70">Off</span>
          </div>
          <div className=" bg-[#002147]/20 w-[8rem] flex flex-col items-center justify-center gap-1 border border-primary/50 rounded-md py-2">
            <GoDotFill size={24} className="text-xs text-base-content/20" />
            <p className="text-sm text-base-content/70">BUZZER</p>
            <span className="text-xs text-base-content/70">Silent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sensors;
