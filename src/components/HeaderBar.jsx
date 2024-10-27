import { BiChevronDown, BiSolidMessageSquareDots } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import CounterItem from "./CounterItem";

const HeaderBar = () => {
  return (
    <div className="flex w-full h-16 items-center justify-between px-10 bg-background-variantTwo">
      <div className="text-white font-display font-normal text-base flex items-center">
        Welcome to,{" "}
        <div className="font-bold text-xl ml-1">Ishani Restaurant</div>
      </div>

      <div className="flex items-center justify-center flex-row">
        <CounterItem
          counter={2}
          icon={<IoNotifications className="text-xl text-white" />}
        />
        <div className="mx-2" />
        {/*  */}
        <CounterItem
          counter={4}
          icon={<IoMdSettings className="text-xl text-white" />}
        />
        <div className="mx-2" />
        {/*  */}
        <CounterItem
          counter={4}
          icon={<BiSolidMessageSquareDots className="text-xl text-white" />}
        />

        <div className="w-0.5 h-12 bg-background-form mx-8" />
        <div className="text-white font-display font-normal text-base mr-5 flex">
          Hello, <div className="font-bold ml-1">Ishani</div>
        </div>
        <img
          src="https://avatar.iran.liara.run/public"
          alt=""
          className="h-10 w-10 rounded-full mr-1"
        />
        <BiChevronDown className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default HeaderBar;
