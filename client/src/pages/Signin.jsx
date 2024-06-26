import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SocialAuthCard from "../components/SocialAuthCard";
import { useSignup } from "../hooks/useSignup";

const Signin = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  const { signup, isLoading, error } = useSignup();

  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await signup(userInfo);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#121321] text-white relative overflow-hidden">
      <div className=" py-8">
        <h3 className=" font-titleFont text-[36px] text-white font-medium ">
          Endea<span className="text-secondaryColor">vours</span>
        </h3>
        <p className=" font-bodyFont -mt-3 text-[18px] font-light text-white">
          Focus-prioritize-execute.
        </p>
      </div>
      <div className="w-full flex justify-between items-center px-28 relative">
        <div className="w-[400px] h-[400px] bg-secondaryColor absolute rounded-full -top-48 -left-28"></div>
        <div className="w-[250px] h-[250px] bg-primaryColor absolute rounded-full left-[600px] -bottom-20"></div>
        <div className="w-1/2 flex flex-col items-center bg-white/30 py-10 rounded-lg backdrop-blur-lg border border-white/40 z-20">
          <form className="w-full flex justify-center" onSubmit={onSubmit}>
            <div className=" w-2/3 flex flex-col justify-center gap-4">
              <h3 className="font-titleFont font-medium text-[24px] ">
                Create Account
              </h3>
              <div>
                <label
                  htmlFor="userName"
                  className=" font-bodyFont font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="name"
                  placeholder="name"
                  onChange={onChange}
                  value={userInfo.userName}
                  className="w-full border-2 rounded-md font-bodyFont p-2 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="userEmail"
                  className=" font-bodyFont font-medium "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  id="email"
                  placeholder="email"
                  onChange={onChange}
                  value={userInfo.userEmail}
                  className="w-full border-2 rounded-md font-bodyFont p-2 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="userPassword"
                  className=" font-bodyFont font-medium "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="userPassword"
                  id="password"
                  placeholder="password"
                  onChange={onChange}
                  value={userInfo.userPassword}
                  className="w-full border-2 rounded-md font-bodyFont p-2 text-black"
                />
              </div>
              <button
                className="bg-gradient-to-r from-secondaryColor to-primaryColor text-white rounded-full px-10 py-3 text-[18px] mt-2 font-bodyFont"
                type="submit"
                disabled={isLoading}
              >
                Create
              </button>
              {error && (
                <div className=" flex justify-center items-center mx-auto p-1 bg-red-600  rounded-lg w-[300px]">
                  <p>{error.error}</p>
                </div>
              )}
              <Link to="/login" className=" text-center underline">
                <p>Already have an account? Login Here</p>
              </Link>
            </div>
          </form>
        </div>
        <div className="w-1/3 bg-white/30 border border-white/40 rounded-lg py-4 px-8 flex flex-col items-center gap-2 backdrop-blur-xl">
          <SocialAuthCard />
        </div>
      </div>
    </div>
  );
};

export default Signin;
