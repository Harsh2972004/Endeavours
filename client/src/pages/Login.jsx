import { useState } from "react";
import googleBtn from "../assets/googleBtn.svg";
import facebookLogo from "../assets/facebookLogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userEmail: "",
    userPassword: "",
  });

  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/login", userInfo)
      .then((res) => {
        setUserInfo({
          userEmail: "",
          userPassword: "",
        });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#121321] text-white relative gap-16">
      {/* <img
        src={abstractLines}
        alt="abstract lines"
        className="-z-1 absolute w-[1000px] left-0 bottom-0"
      /> */}
      <div className=" py-8">
        <h3 className=" font-titleFont text-[36px] text-white font-medium ">
          Endea<span className="text-secondaryColor">vours</span>
        </h3>
        <p className=" font-bodyFont -mt-3 text-[18px] font-light text-white">
          Focus-prioritize-execute.
        </p>
      </div>
      <div className="w-full flex justify-between items-center px-28 relative">
        <div className="w-[350px] h-[350px] bg-secondaryColor absolute rounded-full -top-36 -left-28"></div>
        <div className="w-[250px] h-[250px] bg-primaryColor absolute rounded-full left-[600px] -bottom-20"></div>
        <div className="w-1/2 flex flex-col items-center bg-white/30 py-10 rounded-lg backdrop-blur-lg border border-white/40 z-20">
          <form
            className="w-full flex justify-center"
            noValidate
            onSubmit={onSubmit}
          >
            <div className=" w-2/3 flex flex-col justify-center gap-4">
              <h3 className="font-titleFont font-medium text-[24px] ">
                Login To Endeavours
              </h3>

              <div>
                <label htmlFor="email" className=" font-bodyFont font-medium ">
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
                  htmlFor="password"
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
              >
                Login
              </button>
              <Link to="/signin" className=" text-center underline">
                <p>Don't have an account? Create one</p>
              </Link>
            </div>
          </form>
        </div>
        <div className="w-1/3 bg-white/30 border border-white/40 rounded-lg py-4 px-8 flex flex-col items-center gap-2 backdrop-blur-xl">
          <h3 className="font-titleFont pb-2 text-[18px]">Or Continue With</h3>
          <button className=" w-[225px]">
            <img className="w-full" src={googleBtn} alt="googleSignInButton" />
          </button>
          <button className="border border-white/30 px-4 py-3  rounded-full bg-blue-700 flex flex-row gap-3 justify-center items-center ">
            <img
              src={facebookLogo}
              alt="facebookLogo"
              className="w-[25px] inline-block"
            />
            <span className="font-bodyFont text-[14px] font-medium">
              Continue with Facebook
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
