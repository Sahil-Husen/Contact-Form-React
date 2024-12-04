import React, { useState } from "react";
import image from "../public/img.jpg";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, description } = data;
    if (!(name && email && subject && description)) {
      alert("All fields are necessary ");
      return;
    }
    const sendMail = `mailto:${email}?subject= ${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name:${name}\n\nDescription:${description}`
    )}`;
    window.location.href = sendMail;
  };

  return (
    <form
      style={{ backgroundImage: `url(${image})` }}
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col bg-no-repea bg-cover justify-center items-center h-[100vh] w-full text-white gap-5 border-2 border-white"
    >
      <h1 className="text-3xl">Send Mail</h1>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
        type="text"
        className="p-3 border-[1px] font-semibold border-orange-400 bg-slate-700 text-white rounded-md outline-none    "
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        type="email"
        className="p-3 border-[1px] font-semibold border-orange-400 bg-slate-700 text-white rounded-md outline-none    "
      />
      <input
        name="subject"
        onChange={handleChange}
        placeholder="Subject"
        type="text"
        className="p-3 border-[1px] font-semibold border-orange-400 bg-slate-700 text-white rounded-md outline-none   "
      />
      <textarea
        cols="25"
        rows="auto"
        onChange={handleChange}
        placeholder="Description"
        name="description"
        id=""
        className="p-3 border-[1px] font-semibold border-orange-400 bg-slate-700 text-white rounded-md outline-none   "
      ></textarea>
      {/* <button
        type="submit"
        className="bg-blue-400 py-2 font-semibold px-3 rounded-md mb-2"
      >
        Send Email
      </button> */}
      <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
         Send Email
        </span>
      </button>
    </form>
  );
}

export default App;
