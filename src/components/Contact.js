import React, { useState } from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-screen lg:min-h-screen relative">
      <div className="max-w-[1000px] m-auto px-2 py-16 w-full ">
        <div className="relative flex justify-center">
          <h2 className="py-2 border-b-2 border-violet-600 text-white text-6xl font-bold max-sm:text-4xl">Get In Touch</h2>
          {/* <div className="w-72 absolute bottom-2 left-1/32 mx-auto h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div> */}
        </div>
        <div className=" mt-10 text-white">
          {/* left */}
          

          {/* right */}
          <div className="col-span-3 bg-black w-full h-auto shadow-lg shadow-gray-200 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/e57a8a51-c53e-4238-82a5-f882fda66e0c"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 bg-zinc-300 text-black rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 bg-zinc-300 text-black rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 bg-zinc-300 text-black rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 bg-zinc-300 text-black rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 bg-zinc-300 text-black rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full text-xl p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
