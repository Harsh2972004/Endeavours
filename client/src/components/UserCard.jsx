import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Modal from "./Modal";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const UserCard = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogoutClick = () => {
    logout();
    setOpen(false);
  };
  return (
    <div>
      <div className="border-t pt-4">
        <div
          onClick={() => setOpen(true)}
          className=" bg-gradient-to-tr from-primaryColor to-secondaryColor p-4 rounded-xl hover:scale-95 cursor-pointer transition-all"
        >
          <div className="flex gap-4 items-center">
            <AccountCircleIcon style={{ fontSize: "40px" }} />
            <div className="font-bodyFont">
              <h1>{user ? user.foundUserName : "User"}</h1>
              <p>
                {user ? user.userEmail : "Email"}{" "}
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
          <button
            onClick={handleLogoutClick}
            className="bg-red-600 text-white rounded-xl px-20 py-3 text-[16px] mt-2 font-bodyFont"
          >
            logout
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UserCard;
