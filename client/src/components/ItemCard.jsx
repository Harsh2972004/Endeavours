import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useState, useEffect } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ViewItemCard from "./ViewItemCard";
import { useViewContext } from "../hooks/useViewContext";

const ItemCard = ({ oddEvenCheck, title, body, listId, date }) => {
  const { openEdit } = useViewContext();
  const [open, setOpen] = useState(false);
  const slicedBody = body.slice(0, 100);

  useEffect(() => {
    if (!openEdit.open && openEdit.changed) {
      setOpen(openEdit.open);
    }
  }, [openEdit]);

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
        <p className=" font-bodyFont text-[16px]">{slicedBody}</p>
      </div>
      <p className="text-gray-300 text-[13px]">
        {formatDistanceToNow(new Date(date), { addSuffix: true })}
      </p>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-white/20 rounded-lg p-1 hover:scale-105 transition-all"
        >
          <OpenInFullIcon style={{ fontSize: "24px" }} />
        </button>
        <ViewItemCard
          _id={listId}
          open={open}
          handleClick={() => setOpen(false)}
          date={date}
        />
      </div>
    </div>
  );
};

export default ItemCard;
