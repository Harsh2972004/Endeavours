import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-between mb-3">
      <span className="text-black dark:text-white font-bodyFont">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </span>
      <label
        htmlFor="darkModeToggle"
        className="w-12 h-5 bg-[#121321] dark:bg-white rounded-full relative cursor-pointer"
      >
        <input
          id="darkModeToggle"
          type="checkbox"
          className="sr-only peer"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <span className="w-3 h-3 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-8 transition-all duration-300"></span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
