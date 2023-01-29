import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-5">Who I am</h2>
          <p className="py-1 text-gray-600">
            A passionate, determined and solution oriented aspiring software
            engineer looking to step into the world of technology. The School of
            Code bootcamp has given me a strong foundation in agile
            methodologies, full stack development and communication to flourish
            in a modern tech firm. I worked in a new team every week to build
            projects starting from an idea in Miro, to a high-Fi wireframes in
            Figma and finally coding the solution using industry-leading
            frameworks like Next.js.
          </p>
          <a href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/about.jpg"
            width={300}
            height={300}
            alt="about icon"
            className="rounded-xl"
          ></Image>
        </div>
      </div>
    </div>
  );
}
