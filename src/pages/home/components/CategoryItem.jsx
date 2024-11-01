const CategoryItem = ({ title, stockLeft, icon }) => {
  return (
    <div className="w-32 h-32 rounded-md bg-background-variantTwo py-2 px-2 justify-center flex flex-col text-center items-center">
      {icon}
      <div className="text-lg text-white font-medium font-display mt-2">
        {`${stockLeft} Stocks`}
      </div>
      <div className="text-base text-text-light font-normal font-display">
        {title}
      </div>
    </div>
  );
};

export default CategoryItem;
