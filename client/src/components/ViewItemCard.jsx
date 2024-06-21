import Modal from "./Modal";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import EditComponent from "./EditComponent";
import DeleteComponent from "./DeleteComponent";
import axios from "axios";

const ViewItemCard = ({ open, _id, handleClick }) => {
  const [item, setItem] = useState();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!open) {
      return;
    }
    if (!user) {
      console.log("error fetching task");
      return;
    }

    const fetchItem = async () =>
      await axios
        .get("http://localhost:3000/api/list/" + _id, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          setItem(res.data);

          console.log(res.data, item === res.data);
        })
        .catch((error) => {
          console.log("Error fetching item", error.message);
        });

    fetchItem();
  }, [open]);

  return (
    <div>
      <Modal open={open} onClose={handleClick}>
        <div className="w-[800px] h-[400px] p-4 overflow-y-auto no-scrollbar">
          <div>
            <h1 className="font-bodyFont font-bold text-[23px] border-b-2 mb-2">
              {item && item.title}
            </h1>
            <div>
              <p className=" font-bodyFont text-[16px] text-justify whitespace-pre-wrap">
                {item && item.listBody}
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[50px] flex items-center mt-2">
          <p className="text-gray-300 text-[13px]">
            {item &&
              formatDistanceToNow(new Date(item.createdAt), {
                addSuffix: true,
              })}
          </p>
          <div className="absolute flex right-4 ">
            <EditComponent
              itemTitle={item && item.title}
              itemBody={item && item.listBody}
              _id={item && item._id}
            />
            <DeleteComponent _id={item && item._id} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ViewItemCard;
