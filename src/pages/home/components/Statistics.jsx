import { AiFillProduct } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GrOrderedList } from "react-icons/gr";
import { LuIndianRupee } from "react-icons/lu";
import CardStatistics from "./CardStatistics";

const Statistics = () => {
  return (
    <div className="flex items-center justify-left">
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
  );
};

export default Statistics;
