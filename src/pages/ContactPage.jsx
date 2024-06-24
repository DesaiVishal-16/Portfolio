import { BsSendFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const apiKey = import.meta.env.APP_API_KEY;

const ContactPage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message Sent - Thank You!");
      event.target.reset();
    }
  };
  return (
    <div className="contact   px-4 py-5  sm:px-8 sm:py-10 flex flex-col gap-8">
      <h1 className="text-gray-100 text-xl sm:text-3xl font-semibold">
        Contact
        <span className="block w-8 sm:w-10 h-1 sm:h-1.5 bg-yellow-500 rounded mt-4"></span>
      </h1>
      <div className="overflow-y-auto h-screen hide-scrollbar scroll-smooth pb-96">
        <h1 className="text-xl text-gray-200">Contact Form</h1>
        <form className="mt-5" onSubmit={onSubmit}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <input
              className="border-2 w-full border-gray-500 p-3 rounded-lg bg-transparent outline-none text-base text-gray-100"
              type="text"
              placeholder="Enter Full Name"
              name="name"
              required
            />
            <input
              className="border-2 border-gray-500 p-3 w-full rounded-lg bg-transparent outline-none text-gray-100"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
          </div>
          <textarea
            className="border-2 border-gray-500 px-4 py-8 rounded-lg bg-transparent outline-none text-gray-100 mt-4 w-full"
            type="text"
            placeholder="Your Message"
            name="message"
            required
          />

          <button
            className="border-none bg-yellow-500 p-2 text-gray-100 flex justify-center items-center gap-2 rounded-md mt-5 ml-2 "
            type="submit"
          >
            <BsSendFill />
            Send Message
          </button>
        </form>

        <div className="mt-10 ml-4">
          <h1 className="text-gray-200 text-base sm:text-xl">
            Other way to Contact
          </h1>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-5">
            <li
              id="Email"
              className="flex items-center gap-4"
              title="vishaldesaidotcom@gmail.com"
            >
              <div className="border-t-2 border-l-2 border-gray-700 hover:border-yellow-500 rounded-lg p-1">
                <a
                  href="mailto:your-vishaldesaidotcom@gmail.com"
                  className="flex items-center gap-2 text-gray-200"
                >
                  <FaGithub className="fill-yellow-500 text-xl" />
                  Email
                </a>
              </div>
            </li>
            <li
              id="Github"
              className="flex items-center gap-4"
              title="https://github.com/DesaiVishal-16"
            >
              <div className="border-t-2 border-l-2 border-gray-700 hover:border-yellow-500 rounded-lg p-1">
                <a
                  href="https://github.com/DesaiVishal-16"
                  className="flex items-center gap-2 text-gray-200"
                >
                  <FaGithub className="fill-yellow-500 text-xl" />
                  Github
                </a>
              </div>
            </li>
            <li
              id="Twitter"
              className="flex items-center gap-4"
              title="https://x.com/Vishal_Desai16"
            >
              <div className="border-t-2 border-l-2 border-gray-700 hover:border-yellow-500 rounded-lg p-1">
                <a
                  href="https://x.com/Vishal_Desai16"
                  className="flex items-center gap-2 text-gray-200"
                >
                  <BsTwitterX className="fill-yellow-500 text-xl" />
                  Twitter
                </a>
              </div>
            </li>
            <li
              id="Linkedin"
              className="flex items-center gap-4"
              title="https://www.linkedin.com/in/vishaldesai16"
            >
              <div className="border-t-2 border-l-2 border-gray-700 hover:border-yellow-500 rounded-lg p-1">
                <a
                  href="https://www.linkedin.com/in/vishaldesai16"
                  className="flex items-center gap-2 text-gray-200"
                >
                  <FaLinkedin className="fill-yellow-500 text-xl" />
                  Linkedin
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
