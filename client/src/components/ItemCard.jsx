import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useListItemContext } from "../hooks/useListItemContext";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ItemCard = ({ oddEvenCheck, title, body, listId, date }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const { dispatch } = useListItemContext();
  const [listItem, setListItem] = useState({
    title: "",
    listBody: "",
  });

  const onChange = (e) => {
    setListItem({ ...listItem, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .patch("http://localhost:3000/api/list/" + listId, listItem)
      .then((res) => {
        setListItem({
          title: "",
          listBody: "",
        });
        setOpenEdit(false);
        console.log("task Edited successfully", res.status, res.data);

        dispatch({ type: "UPDATE_LIST_ITEM", payload: res.data });
      })
      .catch((err) => {
        console.log("Cant edit task", err.response.data);
        // setError([err.response.data]);
      });
  };

  const onDeleteClick = () => {
    axios
      .delete("http://localhost:3000/api/list/" + listId)
      .then((res) => {
        setOpenDelete(false);
        console.log("Task deleted", res.status, res.data);
        dispatch({ type: "DELETE_LIST_ITEM", payload: res.data });
      })
      .catch((err) => {
        console.log("Error form errorFromDeleteTask_deleteClick");
      });
  };

  return (
    <div
      className={`h-[200px] border border-white/40 rounded-2xl px-3 py-6 font-bodyFont relative flex flex-col justify-between ${
        oddEvenCheck % 2 === 0 ? "bg-primaryColor" : "bg-secondaryColor"
      }`}
    >
      <div>
        <h1 className="font-bodyFont font-bold text-[23px] border-b-2 mb-2">
          {title}
        </h1>
        <p className=" font-bodyFont text-[16px]">{body}</p>
      </div>
      <p className="text-gray-300 text-[13px]">
        {formatDistanceToNow(new Date(date), { addSuffix: true })}
      </p>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => setOpenEdit(true)}
          className="bg-white/20 rounded-lg mr-2 p-1 hover:scale-105 transition-all"
        >
          <EditIcon style={{ fontSize: "24px" }} />
        </button>
        <button
          onClick={() => setOpenDelete(true)}
          className="bg-white/20 rounded-lg p-1 hover:scale-105 transition-all"
        >
          <DeleteIcon style={{ fontSize: "26px" }} className="text-red-600" />
        </button>
      </div>
      {/* edit modal */}
      <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
        <div className="w-[400px]">
          <div className="text-center w-[400px]">
            <h1 className="font-bodyFont font-medium text-[24px]">Edit Task</h1>
          </div>
          <form className="mx-auto text-white flex flex-col gap-4 p-2">
            <div className="flex flex-col">
              <label htmlFor="title" className="font-bodyFont font-medium">
                Title
              </label>
              <input
                onChange={onChange}
                type="text"
                name="title"
                className={`border-2 rounded-lg text-[#121321] p-2 `}
                value={listItem.title}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="body" className="font-bodyFont font-medium">
                Body
              </label>
              <textarea
                onChange={onChange}
                name="listBody"
                id="name"
                className={`border-2 rounded-lg text-[#121321] p-2 `}
                value={listItem.listBody}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                onClick={onSubmit}
                className="bg-gradient-to-r from-secondaryColor to-primaryColor text-white rounded-full px-10 py-3 text-[18px] mt-2 font-bodyFont "
              >
                Add Task
              </button>
            </div>
          </form>
          {/* {error &&
            error.map((e, i) => {
              return (
                <div
                  className="text-center mt-4 text-red-500 font-bodyFont font-semibold"
                  key={i}
                >
                  <p>{e.error}</p>
                </div>
              );
            })} */}
        </div>
      </Modal>
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

export default ItemCard;
