import { useState } from "react";

function Contact() {
  const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");

  return (

    <div className="px-10 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Contact Us
      </h1>


      <div className="max-w-xl">

        <input
          type="text"
          placeholder="Your Name"
           value={name}
           onChange={(e)=>setName(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"/>

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"/>

        <textarea
          placeholder="Your Message"
          rows="5"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"></textarea>

      <button onClick={()=>{ alert("Message Sent Successfully");

    setName("");
    setEmail("");
    setMessage(""); }}
  className="bg-purple-600 text-white px-6 py-3 rounded-lg">
  Send Message
</button>

      </div>

    </div>

  );

}

export default Contact;