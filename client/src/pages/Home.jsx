import NavBar from "../components/NavBar";
import TodoList from "../components/TodoList";
import VerticalNavBar from "../components/VerticalNavBar";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#121321] text-white">
      <div className=" px-10 py-8">
        <NavBar />
      </div>
      <div className="px-10 py-8 flex items-center h-2/3 gap-4">
        <div>
          <VerticalNavBar />
        </div>
        <div className="w-full h-full">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
