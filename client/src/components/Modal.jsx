import Close from "@mui/icons-material/Close";

const Modal = ({ open, onClose, children }) => {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors z-20 ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#121321] shadow rounded-xl p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg  bg-white/20 hover:scale-105 transition-all"
        >
          <Close />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
