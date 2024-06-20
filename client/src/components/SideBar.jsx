import StarOutlineIcon from "@mui/icons-material/StarOutline";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import UserCard from "./UserCard";

const SideBar = () => {
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
        <UserCard />
      </div>
    </div>
  );
};

export default SideBar;
