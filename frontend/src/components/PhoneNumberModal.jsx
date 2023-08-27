const PhoneNumberModal = () => {
  return (
    <dialog id="phoneNumber" className="modal modal-bottom sm:modal-middle">
      <form
        method="dialog"
        className="modal-box bg-almost-white text-center cursor-default"
      >
        <h3 className="font-bold text-lg">
          Hello! Voici mes informations de contacts
        </h3>
        <p className="py-4">+336.78.17.17.70</p>
        <p>anais.cavaille93@gmail.com</p>
        <div className="modal-action">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default PhoneNumberModal;
