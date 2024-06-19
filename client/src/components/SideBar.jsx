import StarOutlineIcon from "@mui/icons-material/StarOutline";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import fblogo from "../assets/facebookLogo.png";
import Modal from "./Modal";
import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" p-8 basis-[350px] flex flex-col gap-10 items-center">
      <div className="flex items-center justify-between w-full border-b">
        <div className=" cursor-pointer text-center">
          <h3 className=" font-titleFont text-[28px] font-medium text-white">
            Endea
            <span className="text-secondaryColor">vours</span>
          </h3>
          <p className=" font-bodyFont -mt-3 text-[15px] font-light">
            focus-prioritize-execute.
          </p>
        </div>
        <MenuIcon fontSize="large" className="mt-1 cursor-pointer" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <a
            href=""
            className="w-[250px] flex items-center gap-5 bg-gradient-to-r from-secondaryColor to-primaryColor px-6 py-2 rounded-xl"
          >
            <StarOutlineIcon fontSize="medium" />{" "}
            <span className="font-bodyFont text-[16px] border-l pl-5">
              Priortized Tasks
            </span>
          </a>
          <a
            href=""
            className="w-[250px] flex items-center gap-5 bg-gradient-to-r from-secondaryColor to-primaryColor px-6 py-2 rounded-xl"
          >
            <PersonIcon fontSize="medium" />{" "}
            <span className="font-bodyFont text-[16px] border-l pl-5">
              Personal List
            </span>
          </a>
          <a
            href=""
            className="w-[250px] flex items-center gap-5 bg-gradient-to-r from-secondaryColor to-primaryColor px-6 py-2 rounded-xl"
          >
            <GroupsIcon fontSize="medium" />{" "}
            <span className="font-bodyFont text-[16px] border-l pl-5">
              Group List
            </span>
          </a>
        </div>
        <div className="border-t pt-4">
          <div
            onClick={() => setOpen(true)}
            className=" bg-gradient-to-tr from-primaryColor to-secondaryColor p-4 rounded-xl hover:cursor-pointer"
          >
            <div className="flex gap-4 items-center">
              <AccountCircleIcon style={{ fontSize: "40px" }} />
              <div className="font-bodyFont">
                <h1>username</h1>
                <p>
                  email{" "}
                  <span>
                    <KeyboardArrowDownIcon />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-[400px] p-4">
            <h1 className="font-bodyFont mb-4 text-[20px]">
              You want to logout your account.
            </h1>
            <button className="bg-red-600 text-white rounded-xl px-20 py-3 text-[16px] mt-2 font-bodyFont">
              logout
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SideBar;
