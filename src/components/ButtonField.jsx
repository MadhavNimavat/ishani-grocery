const ButtonField = ({
  buttonTitle,
  onClick,
  isPrimary = true,
  customClasses = "",
  isLoading = false,
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`w-full flex flex-row items-center justify-center ${
        isPrimary ? "bg-primary" : "bg-secondary"
      } text-white font-serif text-xl font-semibold py-4 rounded-lg ${customClasses}`}
    >
      {isLoading && (
        <svg
          className="animate-spin h-6 w-6 mr-2 text-white"
          id="loading"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none" />
          <path
            d="M168,40.7a96,96,0,1,1-80,0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="28"
          ></path>
        </svg>
      )}
      {isLoading ? "Loading..." : buttonTitle}
    </button>
  );
};

export default ButtonField;
