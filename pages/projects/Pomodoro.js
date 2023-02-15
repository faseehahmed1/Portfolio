import Image from "next/image";
import React from "react";
import PomodoroImage from "../../public/assets/Projects/PomodoroPage.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function Pomodoro() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={PomodoroImage}
          alt="/"
        ></Image>
        <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Pomodoro Timer</h2>
          {/* <h3>
            Next JS / MongoDB / TypeScript / Cypress / JEST / SuperTest / React
            Testing Library
          </h3> */}
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-[#5651e5]">Project</p>
          <h2 className="my-4">Overview</h2>
          <p className="mb-2">
            A simple timer app to help you boost your productivity. Working is
            cycles of 25min work 5min break and after 3 cycles of work you get a
            longer 15min break.
          </p>
          <p className="mb-5">
            In this project I used Tailwind CSS, useRef hook, setInterval &
            clearInterval. The main problem I faced was with clearInterval
            onClick - "it's because start variable is re-created on each render
            and don't have timer id when clearing interval you need to store it
            in useRef hook". I took a lot of digging into google forums but the
            issue we had was the pause button kept on resetting. useRef seemed
            to do the trick. 'useRef is basically useState but React won't
            render component when ref changes nor ref value will change when
            render happens'. I was not able to use useState as it did not update
            the variables. Solution found in{" "}
            <a
              href="https://www.reddit.com/r/reactjs/comments/y1aorm/clear_interval_is_not_working_on_onclick/"
              target="_blank"
              className="underline text-blue-600"
            >
              this forum
            </a>
            .
          </p>
          <a href="https://pomodoro-app1.netlify.app/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/faseehahmed1/pomodoro-timer"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Tailwing CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
