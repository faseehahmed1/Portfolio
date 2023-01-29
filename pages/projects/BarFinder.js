import Image from 'next/image'
import React from 'react'
import CheersImage from "../../public/assets/Projects/PageAll.png";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

export default function bar_finder() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={CheersImage}
          alt="/"
        ></Image>
        <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Cheers - Bar Finder</h2>
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
            For the final 4-week project of the{" "}
            <a
              href="https://www.schoolofcode.co.uk/"
              target="_blank"
              className="underline text-blue-600"
            >
              School of Code
            </a>
            &nbsp; bootcamp our team took a problem-first approach to ideation:
          </p>
          <p className="mb-5">
            We decided to create an app that solves the problem of needing to
            visit several websites and do a frustratingly large number of google
            searches to plan a night out - and still not finding all the
            information required to be sure a bar is right for you! Using
            different filters and search capabilities including a map feature,
            Cheers users have all the information they could possibly desire at
            their fingertips - no matter the group, occasion or features
            required.
          </p>
          <a
            href="https://bc13-final-project-front-end-beast-code-beast-code.vercel.app/"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Node JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Cypress
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                JEST
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                SuperTest
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React Testing Library
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
