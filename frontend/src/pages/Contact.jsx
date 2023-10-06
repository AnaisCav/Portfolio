import { useForm, ValidationError } from "@formspree/react";
import MessageSentModal from "../components/MessageSentModal";

const Contact = () => {
  const [state, handleSubmit] = useForm(`${import.meta.env.VITE_FORM_ID}`);

  if (state.succeeded) {
    window.messageSent.showModal();
  }

  return (
    <div id="contact" className="bg-blue-bg pb-20 lg:pb-32 min-[1800px]:px-56">
      <div className="text-gray-100 text-center flex flex-col items-center mx-6 md:mx-36 py-16 lg:mx-72 ">
        <h1 className="font-bold text-3xl lg:text-4xl">CONTACT</h1>
        <p className="bg-almost-white h-1 rounded-lg my-6 w-10" />
        <p className="mb-8 lg:mb-20 lg:text-2xl">
          N&apos;hésitez pas à me contacter, je me ferai un plaisir de vous
          répondre dès que possible.
        </p>
      </div>
      <div className="bg-almost-white mx-6 lg:mx-28 rounded-lg p-6 lg:p-12">
        <form method="POST" onSubmit={handleSubmit} className=" block">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-almost-black font-bold lg:text-xl mb-4"
            >
              Prénom
            </label>
            <input
              required
              placeholder="Saisissez votre prénom"
              type="text"
              className="bg-gray-200 h-14 lg:h-20 rounded-lg pl-4 text-sm lg:text-lg text-almost-black focus:ring-blue-bg focus:outline-none focus:ring-2"
              name="firstname"
              id="firstname"
            />
            <ValidationError
              prefix="Firstname"
              field="firstname"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-almost-black font-bold lg:text-xl mb-4 mt-6"
            >
              Nom
            </label>
            <input
              required
              placeholder="Saisissez votre nom"
              type="text"
              className="bg-gray-200 h-14 lg:h-20 rounded-lg pl-4 text-sm lg:text-lg text-almost-black focus:ring-blue-bg focus:outline-none focus:ring-2"
              name="lastname"
              id="lastname"
            />
            <ValidationError
              prefix="Lastname"
              field="lastname"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-almost-black font-bold lg:text-xl mb-4 mt-6"
            >
              Email
            </label>
            <input
              required
              placeholder="Saisissez votre votre adresse email"
              type="email"
              className="bg-gray-200 h-14 lg:h-20 rounded-lg pl-4 text-sm lg:text-lg text-almost-black focus:ring-blue-bg focus:outline-none focus:ring-2"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-almost-black font-bold lg:text-xl mb-4 mt-6"
            >
              Numéro de téléphone
            </label>
            <input
              required
              placeholder="Saisissez votre votre numéro de téléphone"
              type="tel"
              pattern="[0-9]{10}"
              className="bg-gray-200 h-14 lg:h-20 rounded-lg pl-4 text-sm lg:text-lg text-almost-black focus:ring-blue-bg focus:outline-none focus:ring-2"
              name="phone"
              id="phone"
            />
            <small>Format: 0607080910</small>
            <ValidationError
              prefix="Phone number"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-almost-black font-bold lg:text-xl mb-4 mt-6"
            >
              Message
            </label>
            <textarea
              required
              cols="30"
              rows="10"
              className="bg-gray-200 rounded-lg pt-6 pl-4 text-sm lg:text-lg text-almost-black focus:ring-blue-bg focus:outline-none focus:ring-2"
              placeholder="Saisissez votre message"
              name="message"
              id="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex md:justify-end mt-8">
            <button
              type="submit"
              disabled={state.submitting}
              className=" bg-blue-button text-almost-white my-4 w-full md:w-44 h-12 md:h-14 md:text-xl rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Envoyer
            </button>
            <ValidationError errors={state.errors} />
          </div>
        </form>
      </div>
      <MessageSentModal />
    </div>
  );
};

export default Contact;
