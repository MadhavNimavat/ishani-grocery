import CategoryItem from "./components/CategoryItem";
import Notifications from "./components/Notifications";
import Statistics from "./components/Statistics";

const HomePage = () => {
  return (
    <div className="w-full h-screen py-5 px-10 overflow-hidden">
      <div className="items-center justify-center">
        <div className="text-3xl text-white">Dashboard</div>
        <div className="text-base text-text-gray">
          <span className="font-semibold">Hi, Ishani.</span> Welcome back to
          Ishani Groceries!
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 h-full mr-5">
          <Statistics />

          <div className="rounded-md shadow-background-form p-5 bg-background-form mt-5 overflow-x-scroll">
            <div className="text-2xl font-bold text-white mb-5">
              Categories and Stock
            </div>

            {/* Scrollable Container */}
            <div className="flex gap-4">
              {Array(15)
                .fill(1)
                .map((el, li) => (
                  <CategoryItem key={li} />
                ))}
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full px-2 py-2 ml-5">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
