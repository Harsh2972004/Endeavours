import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import todoList from "../assets/todoList1.png";
import abstractLines from "../assets/abstract-lines1.png";

const LandingPage = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-[#121321] text-white relative">
      <img
        src={abstractLines}
        alt="abstract lines"
        className="-z-1 absolute w-[1000px] left-0 bottom-0"
      />
      <div className="w-full flex justify-between items-center px-14 py-5 gap-8">
        <div className=" basis-4/5">
          <div className=" cursor-pointer inline-block">
            <h3 className=" font-titleFont text-[36px] font-medium text-white">
              Endea
              <span className="text-secondaryColor">vours</span>
            </h3>
            <p className=" font-bodyFont -mt-3 text-[18px] font-light">
              focus-prioritize-execute.
            </p>
          </div>
        </div>
        <button className="basis-1/5 border-[2px] border-secondaryColor hover:bg-secondaryColor rounded-full py-2 font-medium text-secondaryColor hover:text-white transition duration-300">
          Contact Us
        </button>
        <Link to="/Login" className="basis-1/5">
          <button className="bg-gradient-to-r from-secondaryColor to-primaryColor rounded-full py-2 font-medium text-white hover:scale-105 transition duration-300 w-full">
            Login
          </button>
        </Link>
      </div>
      <div className="w-full flex-grow flex flex-col justify-center items-center relative">
        <h1 className="font-bodyFont font-semibold text-[48px] text-center w-[50%] -translate-y-1/3">
          A Basic
          <span className="text-secondaryColor font-extrabold">
            {" "}
            ToDo List{" "}
            <img
              src={todoList}
              alt="todolist"
              className="w-[40px] inline-block -mt-2"
            />{" "}
            App
          </span>{" "}
          To Focus, Priotize And Execute To Meet Your Goals Effectively And
          Efficiently.
        </h1>
        <Link to="/signin">
          <button className="bg-gradient-to-r from-secondaryColor to-primaryColor text-white rounded-full px-10 py-3 text-[20px] hover:scale-110 duration-300">
            Get Started for FREE <ArrowForwardIcon className="-mt-[6px]" />
          </button>
        </Link>
      </div>
      <div className="text-center">
        <p className="p-3 text-gray-500">
          ©2024, Endeavours by Harshpreet Singh
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
