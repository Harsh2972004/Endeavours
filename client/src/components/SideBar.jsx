import StarOutlineIcon from "@mui/icons-material/StarOutline";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import UserCard from "./UserCard";
import DarkModeSwitch from "./DarkModeSwitch";
import { useState } from "react";

const SideBar = ({ handleCategoryClick }) => {
  const [collapsed, setCollapsed] = useState(false);
  const categories = [
    { name: "personal", icon: <PersonIcon /> },
    { name: "group", icon: <GroupsIcon /> },
    { name: "priority", icon: <StarOutlineIcon /> },
  ];

  const toggleSideBar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={` p-8 ${
        collapsed ? "w-[80px] justify-between" : "w-[350px]"
      } flex flex-col gap-10 items-center relative transition-all duration-500`}
    >
      <div className="flex items-center justify-between w-full border-b-2 border-primaryColor dark:border-white">
        <div
          className={`cursor-pointer text-center transition-all duration-100 ${
            collapsed ? " hidden" : ""
          }`}
        >
          <h3 className=" font-titleFont text-[28px] font-medium text-black dark:text-white">
            Endea
            <span className="text-primaryColor dark:text-secondaryColor">
              vours
            </span>
          </h3>
          <p className=" text-black dark:text-white font-bodyFont -mt-3 text-[15px] dark:font-light">
            focus-prioritize-execute.
          </p>
        </div>
        <div onClick={toggleSideBar}>
          <MenuIcon
            fontSize="large"
            className="mt-1 cursor-pointe text-primaryColor dark:text-white"
          />
        </div>
      </div>
      <div
        className={`flex flex-col ${
          collapsed ? "justify-center" : "justify-between"
        } h-full`}
      >
        <ul className="flex flex-col gap-4">
          {categories.map((category) => {
            return (
              <li key={category.name}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`${
                    collapsed ? "w-auto px-4" : "w-[250px] px-6"
                  } flex items-center gap-5 bg-gradient-to-r from-secondaryColor to-primaryColor py-2 rounded-xl`}
                >
                  {category.icon}
                  <span
                    className={`font-bodyFont text-[16px] border-l pl-5 ${
                      collapsed ? "hidden" : ""
                    }`}
                  >
                    {category.name.charAt(0).toUpperCase() +
                      category.name.slice(1)}{" "}
                    Tasks
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className={collapsed ? "hidden transition-all duration-500" : ""}>
          <DarkModeSwitch />
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
