import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "./Modal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemCard = ({ oddEvenCheck, title, body, listId }) => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/list/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:3000/api/list/${id}`)
      .then((res) => {
        setOpen(false);
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  };

  return (
    <div
      className={`h-[200px] border border-white/40 rounded-2xl px-3 py-6 font-bodyFont relative ${
        oddEvenCheck % 2 === 0 ? "bg-primaryColor" : "bg-secondaryColor"
      }`}
    >
      <h1 className="font-bodyFont font-bold text-[20px]">{title}</h1>
      <p>{body}</p>
      <button
        onClick={() => setOpen(true)}
        className="absolute bottom-4 right-4"
      >
        <DeleteIcon style={{ fontSize: "35px" }} className="text-red-600" />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-[400px] text-center p-4">
          <h1 className="font-bodyFont mb-4 text-[20px]">
            Do you want to delete this task.{" "}
          </h1>
          <button className="bg-red-600 text-white rounded-xl px-20 pl-24 py-3 text-[18px] mt-2 font-bodyFont text-center">
            Delete{" "}
            <span>
              <DeleteIcon
                onClick={() => {
                  onDeleteClick(listId);
                }}
                style={{ fontSize: "30px" }}
                className=" -mt-2"
              />
            </span>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ItemCard;
