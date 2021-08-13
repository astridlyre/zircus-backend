import Trash from "../Icons/Trash.js";

export default function DeleteButton({ onClick }) {
  return (
    <button
      type="button"
      className="button danger icon-button outline"
      onClick={onClick}
    >
      <Trash />
    </button>
  );
}
