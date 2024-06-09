import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import { NavLink } from "react-router-dom";

const VerticalNavBar = () => {
  return (
    <div className="w-[90px] flex flex-col gap-5 p-3 border border-white/30 bg-white/10 rounded-xl">
      <NavLink
        href=""
        className="p-5 border border-white/20 bg-white/10 backdrop-blur-md rounded-xl inline-block text-center group relative"
      >
        <PersonIcon fontSize="medium" />
        <span className="hidden absolute top-3 -right-[130px] border border-white/30 bg-white/10 rounded-xl p-2 group-hover:inline-block transition-all">
          Personal List
        </span>
      </NavLink>
      <NavLink
        href=""
        className="p-5 border border-white/20 bg-white/10 backdrop-blur-md rounded-xl inline-block text-center group relative"
      >
        <GroupsIcon fontSize="medium" />
        <span className="hidden absolute top-3 -right-[130px] border border-white/30 bg-white/10 rounded-xl p-2 group-hover:inline-block transition-all">
          Work List
        </span>
      </NavLink>
      <NavLink
        href=""
        className="p-5 border border-white/20 bg-white/10 backdrop-blur-md rounded-xl inline-block text-center group relative"
      >
        <VoicemailIcon fontSize="medium" />
        <span className="hidden absolute top-3 -right-[130px] border border-white/30 bg-white/10 rounded-xl p-2 group-hover:inline-block transition-all">
          voice Memo
        </span>
      </NavLink>
    </div>
  );
};

export default VerticalNavBar;
