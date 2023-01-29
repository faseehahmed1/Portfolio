import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src="/assets/Contact_icon.jpeg"
                  width="500"
                  height="400"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                ></Image>
              </div>
              <div>
                <h2 className="pt-6 pb-4">Faseeh Ahmed</h2>
                <p>Front-End Developer</p>
                <p className="py-4 pb-20">
                  I am available for full-time positions in Birmingham.
                </p>
              </div>
              <div>
                <p className="pb-2">Let's Connect</p>
              </div>
              <div className="flex items-center justify-between py-4 max-w-[300px]">
                <a
                  href="https://www.linkedin.com/in/faseehahmed/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <GrLinkedinOption />
                  </div>
                </a>
                <a href="https://github.com/faseehahmed1" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <GrGithub />
                  </div>
                </a>
                <a href="mailto: faseeh_455@hotmail.com" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
                <a href="https://twitter.com/FaseehAhmed_" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* right side form */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="mailto: faseeh_455@hotmail.com">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      text="text"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      text="text"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    text="text"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    text="email"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    text="text"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className="border-2 rounded-lg p-3 border-gray-300 rows=10"></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
                <span className="flex justify-center align-middle lowercase text-xs py-2">
                  (*under construction)
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-2">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
}
