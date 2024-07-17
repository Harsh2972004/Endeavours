import { useEffect, useState } from "react";
import { useListItemContext } from "../hooks/useListItemContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Modal from "./Modal";
import ItemCard from "./ItemCard";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

const TodoList = ({ selectedCategory }) => {
  const { list, dispatch } = useListItemContext();
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);
  const [listItem, setListItem] = useState({
    title: "",
    listBody: "",
    category: "personal",
  });
  const [error, setError] = useState([]);
  const [emptyFields, setEmptyFields] = useState([]);

  const onChange = (e) => {
    setListItem({ ...listItem, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      setError("unauthorized request");
      return;
    }

    axios
      .post("http://localhost:3000/api/list", listItem, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setListItem({
          title: "",
          listBody: "",
        });
        setOpen(false);
        console.log("new task added", res.status, res.data);
        setError([]);
        setEmptyFields([]);
        dispatch({ type: "CREATE_LIST_ITEM", payload: res.data });
      })
      .catch((err) => {
        console.log("Cant add an item", err.response.data);
        setError([err.response.data]);
        setEmptyFields(err.response.data.emptyFields);
      });
  };
  useEffect(() => {
    const fetchList = () => {
      axios
        .get("http://localhost:3000/api/list/category/" + selectedCategory, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          dispatch({ type: "SET_LIST", payload: res.data });
          console.log(res.data);
        })
        .catch((err) => {
          console.log("Error from task list");
        });
    };
    if (user) {
      fetchList();
    }
  }, [user, selectedCategory]);

  return (
    <div className=" border-l-4 border-black/30 h-[full] w-full p-6 relative overflow-y-auto scroll-smooth no-scrollbar">
      <div className=" flex justify-between border-b-2 dark:border-white border-primaryColor mb-9">
        <h1 className="font-bodyFont text-[30px] text-primaryColor dark:text-white pb-4 font-semibold">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}{" "}
          Tasks
        </h1>
        <div className="dark:bg-white/30 bg-primaryColor h-10 rounded-full flex items-center px-4">
          <input
            type="text"
            placeholder={`Search ${
              selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)
            } Task`}
            className="w-[600px] px-4 bg-transparent border-r-2 focus:outline-none text-white"
          />
          <button className="h-6 w-6 ml-4">
            <SearchIcon style={{ fontSize: "24px" }} />
          </button>
        </div>
      </div>
      <div
        className={
          list?.length === 0
            ? "flex items-center justify-center"
            : "grid grid-cols-3 gap-6"
        }
      >
        {list?.length === 0 ? (
          <div>
            <p className="text-[20px] text-primaryColor dark:text-white">
              There is no tasks in this list
            </p>
          </div>
        ) : (
          list?.map((l, i) => {
            return (
              <ItemCard
                key={l._id}
                oddEvenCheck={i}
                title={l.title}
                body={l.listBody}
                listId={l._id}
                date={l.createdAt}
              />
            );
          })
        )}
      </div>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center bg-gradient-to-r from-secondaryColor to-primaryColor text-white rounded-full text-[26px] w-[60px] h-[60px] font-bodyFont fixed bottom-20 right-20 shadow-lg"
      >
        +
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-[400px]">
          <div className="text-center w-[400px]">
            <h1 className="font-bodyFont font-medium text-[24px]">
              Add a Task
            </h1>
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
                id="title"
                className={`border-2 rounded-lg text-[#121321] p-2 font-bodyFont ${
                  emptyFields.includes("title") ? "border-red-500" : ""
                }`}
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
                id="body"
                className={`border-2 rounded-lg text-[#121321] p-2 font-bodyFont ${
                  emptyFields.includes("body") ? "border-red-500" : ""
                }`}
                value={listItem.listBody}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="category"></label>
              <select
                name="category"
                id="category"
                value={listItem.category}
                onChange={onChange}
                className="border-2 rounded-lg text-[#121321] p-2 font-bodyFont"
              >
                <option value="personal">Personal</option>
                <option value="group">Group</option>
                <option value="priority">Priority</option>
              </select>
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
          {error &&
            error.map((e, i) => {
              return (
                <div
                  className="text-center mt-4 text-red-500 font-bodyFont font-semibold"
                  key={i}
                >
                  <p>{e.error}</p>
                </div>
              );
            })}
        </div>
      </Modal>
    </div>
  );
};

export default TodoList;
