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
            I'm an aspiring developer trained in Full Stack Development at the
            School of Code. After graduating in Mechanical Engineering and
            honing my design and development skills, I became a mathematics
            teacher, breaking down complex concepts and making them accessible
            to students.</p>
            
            <p className="pt-2">However, I was always looking for ways to have a
            greater impact and when I attended a School of Code demo day, I knew
            I had found my calling. I soon enrolled in the Full Stack
            Development bootcamp at the School of Code and have since been
            dedicated to building my skills as a software developer. I bring a
            unique combination of technical know-how and a passion for teaching.
            With hands-on experience and eagerness to learn, I am looking
            forward to a new career in tech.
          </p>
          <a href="/#projects">
            <p className="pt-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/AboutSectionIcon.jpg"
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
