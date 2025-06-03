"use client"
import React from 'react';
import Swal from 'sweetalert2';
import tailwindcss from 'tailwindcss';

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event:any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "b370237a-fbae-41d8-84df-8bd36e8c3e6e");

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
      });

        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "The message was sent successfully!",
                icon: "success"
              });
              setResult("Message Sent Successfully");
              event.target.reset();
          }
        else {
            console.log("Error", data);
            setResult(data.message);
    
        }
      };
     
  return (
    <div className="flex items-center justify-center w-full max-w-9xl min-h-screen px-5 bg-white bg-opacity-40 backdrop-blur-md">
      <section className="flex items-center justify-center w-full">
        <form
         onSubmit={onSubmit}
          className="w-full max-w-xl bg-black-text-black-700 p-6 sm:p-8 rounded-lg shadow-2xl"
      >
        <h2 className="mb-4 text-2xl font-semibold text-center sm:text-3xl">Contact Form</h2>

      <div className="mt-5">
        <label className="block font-medium text-black-700">Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your Name"
          required
          className="w-full h-12 sm:h-[50px] mt-2 px-4 border border-black-600 rounded-md text-black-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black-500"
        />
      </div>

      <div className="mt-5">
        <label className="block font-medium text-black-700">Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="w-full h-12 sm:h-[50px] mt-2 px-4 border border-gray-600 rounded-md text-gray-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black-500"
        />
      </div>

      <div className="mt-5">
        <label className="block font-medium text-black-700">Your message</label>
        <textarea
          name="message"
          placeholder="Type your message here..."
          required
          className="w-full h-40 sm:h-[200px] mt-2 px-4 py-2 border border-black-600 rounded-md text-gray-800 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full h-11 sm:h-[55px] bg-red-600 hover:bg-[#421010] text-black hover:text-white text-lg font-medium mt-6 rounded-md shadow-md transition-all duration-500"
      >
        Send Message
      </button>
    </form>
  </section>
</div>

  )
}

export default Contact;


