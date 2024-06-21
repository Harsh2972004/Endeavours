import { useState } from "react";
import Modal from "./Modal";
import { useListItemContext } from "../hooks/useListItemContext";
import { useAuthContext } from "../hooks/useAuthContext";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const DeleteComponent = ({ _id }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const { dispatch } = useListItemContext();
  const { user } = useAuthContext();

  const onDeleteClick = () => {
    if (!user) {
      return;
    }
    axios
      .delete("http://localhost:3000/api/list/" + _id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setOpenDelete(false);
        console.log("Task deleted", res.status, res.data);
        dispatch({ type: "DELETE_LIST_ITEM", payload: res.data });
      })
      .catch((err) => {
        console.log("cant delete item", err.response.data);
      });
  };
  return (
    <div>
      <button
        onClick={() => setOpenDelete(true)}
        className="bg-white/20 rounded-lg mr-2 p-1 hover:scale-105 transition-all"
      >
        <DeleteIcon style={{ fontSize: "26px" }} className="text-red-600" />
      </button>

      {/* Delete modal */}
      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <div className="w-[400px] text-center p-4">
          <h1 className="font-bodyFont mb-4 text-[20px]">
            Do you want to delete this task.{" "}
          </h1>
          <button
            onClick={onDeleteClick}
            className="bg-red-600 text-white rounded-xl px-20 pl-24 py-3 text-[18px] mt-2 font-bodyFont text-center"
          >
            Delete{" "}
            <span>
              <DeleteIcon style={{ fontSize: "30px" }} className=" -mt-2" />
            </span>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteComponent;
