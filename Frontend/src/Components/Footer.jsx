import dayjs from "dayjs";
import { FaRegCopyright } from "react-icons/fa";

const Footer = ({ now, countEvent }) => {
  return (
    <div className="w-full p-4">
      <div className="max-w-6xl mx-auto px-2 py-4 border-t border-base-content/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex flex-col justify-center items-center">
            <span className="font-serif text-primary font-bold ">
              {dayjs(now).format("mm:ss")}
            </span>
            <span className="text-xs text-base-content/50">UPTIME</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-serif text-orange-500">{countEvent.count}</span>
            <span className="text-xs text-base-content/50">ALERTS TODAY</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-serif text-primary font-bold ">ESP32</span>
            <span className="text-xs text-base-content/50">CONTROLLER</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xs text-base-content/50">ID: SEC-0x4A2F</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <span className="font-serif text-primary font-bold">Copyright</span>
            <span className="font-serif text-primary font-bold ">
              <FaRegCopyright />
            </span>
            <span className="font-serif text-primary font-bold">2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
