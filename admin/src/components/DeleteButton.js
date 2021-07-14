import Trash from './Trash.js'

export default function DeleteButton({ onClick }) {
    return (
        <button
            type="button"
            className="button danger icon-button outline"
            onClick={onClick}
        >
            <Trash />
        </button>
    )
}
