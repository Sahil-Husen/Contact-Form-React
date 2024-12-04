import React, { useState } from "react";
import image from '../public/images.jpg'

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
      return
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
   style={{backgroundImage:`url(${image})`}}
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col bg-no-repea bg-contain   justify-center items-center h-[400px] text-white gap-5 border-2 border-white"
    >
      <h1 className="text-2xl">Send Mail</h1>
      <input
        name="name"
        onChange={handleChange}
        placeholder="name"
        type="text"
        className="p-3 border-2 border-orange-400 bg-slate-700 text-white rounded-sm "
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="email"
        type="email"
        className="p-3 border-2 border-orange-400 bg-slate-700 text-white rounded-sm "
      />
      <input
        name="subject"
        onChange={handleChange}
        placeholder="subject"
        type="text"
        className="p-3 border-2 border-orange-400 bg-slate-700 text-white rounded-sm"
      />
      <textarea
        onChange={handleChange}
        placeholder="description"
        name="description"
        id=""
        className="p-3 border-2 border-orange-400 bg-slate-700 text-white rounded-sm"
      ></textarea>
      <button type="submit" className="bg-blue-400 py-2 px-3 rounded-md">
        Submit
      </button>
    </form>
  );
}

export default App;
