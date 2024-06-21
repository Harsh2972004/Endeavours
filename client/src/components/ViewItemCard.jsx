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
        <div className="w-[800px] h-[400px] text-center p-4">
          <div>
            <h1 className="font-bodyFont font-bold text-[23px] border-b-2 mb-2">
              {item && item.title}
            </h1>
            <div className=" overflow-y-auto">
              <p className=" font-bodyFont text-[16px]">
                {item && item.listBody}
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-[13px]">
            {item &&
              formatDistanceToNow(new Date(item.createdAt), {
                addSuffix: true,
              })}
          </p>
        </div>
        <div className="absolute flex bottom-4 right-4 ">
          <EditComponent
            itemTitle={item && item.title}
            itemBody={item && item.listBody}
            _id={item && item._id}
          />
          <DeleteComponent _id={item && item._id} />
        </div>
      </Modal>
    </div>
  );
};

export default ViewItemCard;
