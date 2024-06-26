import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import SideBar from "../components/SideBar";
import TodoList from "../components/TodoList";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("personal");
  const { savedTheme } = useDarkMode();
  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };

  return (
    <div
      className={`w-full h-screen flex transition-all font-bodyFont ${
        savedTheme === "dark"
          ? "bg-[#121321] text-white dark"
          : "bg-gray-100 text-white"
      }`}
    >
      <SideBar handleCategoryClick={handleCategoryClick} />
      <TodoList selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
