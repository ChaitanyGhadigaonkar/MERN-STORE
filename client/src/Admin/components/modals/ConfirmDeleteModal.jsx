import { AiOutlineExclamationCircle } from "react-icons/ai";

const ConfirmDeleteModal = ({ message, setModalOpen, onDeleteClick }) => {
  const handleDelete = (e) => {
    // contains the function for the deletion of product / user
    e.preventDefault();
    onDeleteClick();
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  return (
    <div className="flex flex-col items-center px-5 py-5 gap-4">
      <AiOutlineExclamationCircle className="text-4xl" />

      <div className="msg">{message}</div>
      <div className="buttons">
        <button
          className="text-sm text-white bg-red-500 hover:bg-red-400 px-3 py-2 rounded-md mx-2"
          onClick={handleDelete}
        >
          Yes, I'm sure
        </button>
        <button
          className="text-sm text-black bg-white px-3 py-2 rounded-md mx-2 border hover:bg-slate-100"
          onClick={handleCancel}
        >
          No, cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
