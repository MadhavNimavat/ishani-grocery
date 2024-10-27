import { BiCategory, BiDollarCircle } from "react-icons/bi";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { LuIndianRupee, LuPersonStanding } from "react-icons/lu";
import CardStatistics from "./components/CardStatistics";
import { PiPerson } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { GrOrderedList } from "react-icons/gr";
import { AiFillProduct } from "react-icons/ai";

const HomePage = () => {
  return (
    <div className="w-full h-fit py-5 px-10">
      <div className="items-center justify-center">
        <div className="text-2xl text-white">Dashboard</div>
        <div className="text-base text-text-gray">
          Hi, Ishani. Welcome back to Ishani Groceries!
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-3/5">
          <div className="flex items-center justify-center">
            <CardStatistics
              leftIcon={<LuIndianRupee className="text-3xl text-secondary" />}
              increased={false}
              label={"Total Revenue"}
              value={"₹10,243.00"}
              valueBy={"-5.60%"}
            />
            <div className="mx-2" />
            <CardStatistics
              leftIcon={<GrOrderedList className="text-3xl text-secondary" />}
              increased={true}
              label={"Today's Orders"}
              value={"20"}
              valueBy={"+2.60%"}
            />
            <div className="mx-2" />
            <CardStatistics
              leftIcon={<FaUsers className="text-3xl text-secondary" />}
              increased={true}
              label={"Total Customers"}
              value={"1200"}
              valueBy={"+2.60%"}
            />
            <div className="mx-2" />
            <CardStatistics
              leftIcon={<AiFillProduct className="text-3xl text-secondary" />}
              increased={true}
              label={"Total Products"}
              value={"49"}
              valueBy={"+2.60%"}
            />
            <div className="mx-2" />
            <CardStatistics
              leftIcon={<BiCategory className="text-3xl text-secondary" />}
              increased={true}
              label={"Total Categories"}
              value={"12"}
              valueBy={"+2.60%"}
            />
          </div>
        </div>
        <div className="w-2/5 bg-background-form h-full px-2 py-2">
          <div className="rounded-md shadow-sm p-5 min-w-16 bg-background-variantTwo w-full h-fit">
            <div className="text-2xl font-bold text-white">Latest Orders</div>
            {Array(5)
              .fill(1)
              .map((el, li) => {
                return (
                  <div key={li} className="flex items-center my-2 p-2">
                    <img
                      src="https://avatar.iran.liara.run/public"
                      alt=""
                      className="h-12 w-12 rounded-full mr-1"
                    />
                    <div className="flex-1 items-start ml-2">
                      <div className="text-lg font-semibold font-display text-white">
                        Product Name
                      </div>
                      <div className="text-sm font-medium font-display text-white">
                        10 X 190.00
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
