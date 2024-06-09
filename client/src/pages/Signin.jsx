import { useState } from "react";
import googleBtn from "../assets/googleBtn.svg";
import facebookLogo from "../assets/facebookLogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    reEnterPassword: "",
  });

  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/register", userInfo)
      .then((res) => {
        setUserInfo({
          userName: "",
          userEmail: "",
          userPassword: "",
          reEnterPassword: "",
        });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response);
      });
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
          <form
            className="w-full flex justify-center"
            noValidate
            onSubmit={onSubmit}
          >
            <div className=" w-2/3 flex flex-col justify-center gap-4">
              <h3 className="font-titleFont font-medium text-[24px] ">
                Create Account
              </h3>
              <div>
                <label
                  htmlFor="name"
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
              <div>
                <label
                  htmlFor="re-password"
                  className=" font-bodyFont font-medium "
                >
                  Re-Enter Password
                </label>
                <input
                  type="password"
                  name="reEnterPassword"
                  id="reEnterPassword"
                  placeholder="re-enter password"
                  onChange={onChange}
                  value={userInfo.reEnterPassword}
                  className="w-full border-2 rounded-md font-bodyFont p-2 text-black"
                />
              </div>
              <button
                className="bg-gradient-to-r from-secondaryColor to-primaryColor text-white rounded-full px-10 py-3 text-[18px] mt-2"
                type="submit"
              >
                Create
              </button>
              <Link to="/login" className=" text-center underline">
                <p>Already have an account? Login Here</p>
              </Link>
            </div>
          </form>
        </div>
        <div className="w-1/3 bg-white/30 border border-white/40 rounded-lg py-4 px-8 flex flex-col items-center gap-2 backdrop-blur-xl">
          <h3 className="font-titleFont pb-2 text-[18px]">Or Sign In With</h3>
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

export default Signin;
