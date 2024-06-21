import EditIcon from "@mui/icons-material/Edit";
import Modal from "./Modal";
import { useState } from "react";
import { useListItemContext } from "../hooks/useListItemContext";
import { useViewContext } from "../hooks/useViewContext";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { useEffect } from "react";

const EditComponent = ({ itemTitle, itemBody, _id }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const { dispatch: viewDispatch } = useViewContext();
  const { list, dispatch } = useListItemContext();
  const { user } = useAuthContext();
  const title = itemTitle && itemTitle;
  const listBody = itemBody && itemBody;
  const [listItem, setListItem] = useState({
    title: "",
    listBody: "",
  });

  const onChange = (e) => {
    setListItem({ ...listItem, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    axios
      .patch("http://localhost:3000/api/list/" + _id, listItem, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        dispatch({ type: "UPDATE_LIST_ITEM", payload: res.data });
        setOpenEdit(false);
        console.log("task Edited successfully", res.status, res.data);
      })
      .catch((err) => {
        console.log("Cant edit task", err.response.data);
      });
  };

  useEffect(() => {
    viewDispatch({
      type: "SET_OPEN_EDIT",
      payload: { open: openEdit, changed: true },
    });
  }, [list]);

  return (
    <div>
      <button
        onClick={() => {
          setOpenEdit(true);
          setListItem({
            title,
            listBody,
          });
        }}
        className="bg-white/20 rounded-lg mr-2 p-1 hover:scale-105 transition-all"
      >
        <EditIcon style={{ fontSize: "24px" }} />
      </button>

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
                Edit Task
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditComponent;
