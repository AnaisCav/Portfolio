const MessageSentModal = () => {
  return (
    <dialog id="messageSent" className="modal modal-bottom sm:modal-middle">
      <form
        method="dialog"
        className="modal-box flex justify-center bg-almost-white text-center cursor-default text-almost-black"
      >
        <h3 className="font-bold text-lg text-almost-black">
          Votre message a bien été envoyé !
        </h3>
        <div className="modal-action">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default MessageSentModal;
