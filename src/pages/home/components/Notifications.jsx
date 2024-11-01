const Notifications = () => {
  return (
    <div className="rounded-md shadow-background-form p-5 min-w-12 bg-background-form w-full h-fit">
      <div className="text-2xl font-bold text-white">Notifications</div>
      {Array(5)
        .fill(1)
        .map((el, li) => {
          return (
            <div key={li} className="flex items-center my-2 p-2">
              <img
                src="https://avatar.iran.liara.run/public"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <div className="flex-1 items-start ml-1">
                <div className="text-base font-medium font-display text-white">
                  The fruit is almost finished, quickly refill
                </div>
                <div className="text-sm font-normal font-display text-white">
                  Tue, 14 May, 10.00 AM
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Notifications;
