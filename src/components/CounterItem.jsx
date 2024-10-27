const CounterItem = ({ icon, counter }) => {
  return (
    <div className="relative w-14">
      <div className="h-10 w-10 rounded-lg shadow-lg bg-background-form items-center justify-center flex">
        {icon}
      </div>
      <div className="absolute rounded-full bg-background-variantTwo h-7 w-7 -top-3 -right-1 flex items-center justify-center">
        <div className="bg-background-form rounded-full text-sm flex items-center justify-center text-white font-display font-bold h-6 w-6">
          {counter}
        </div>
      </div>
    </div>
  );
};

export default CounterItem;
