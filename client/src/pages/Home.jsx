import SideBar from "../components/SideBar";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#121321] text-white flex">
      <SideBar />
      <TodoList />
    </div>
  );
};

export default Home;
