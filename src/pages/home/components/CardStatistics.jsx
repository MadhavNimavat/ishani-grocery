import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";

const CardStatistics = ({ leftIcon, value, label, increased, valueBy }) => {
  return (
    <div className="rounded-md shadow-sm p-5 min-w-16 bg-background-variantTwo w-fit h-fit">
      <div className="flex items-center justify-center mb-3">
        <div className="rounded-md shadow-sm p-2 bg-background-variantOne w-fit h-fit">
          {leftIcon}
        </div>
        <div
          className={`text-base ${
            increased ? "text-green-500" : "text-red-500"
          } font-medium mx-2 text-center`}
        >
          {valueBy}
        </div>
        {increased ? (
          <BsArrowUpCircleFill className="text-xl text-green-500" />
        ) : (
          <BsArrowDownCircleFill className="text-xl text-red-500" />
        )}
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-base text-text-gray">{label}</div>
    </div>
  );
};

export default CardStatistics;
