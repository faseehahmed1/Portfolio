import Image from "next/image";
import React from "react";
import SkillItem from "./SkillItem";

const skill = [
  { skill: "Tailwind CSS", img: "tailwind" },
  { skill: "React", img: "react" },
  { skill: "Next.js", img: "next" },
  { skill: "JavaScript", img: "javascript" },
  { skill: "TypeScript", img: "typescript3" },
  { skill: "HTML", img: "html" },
  { skill: "SQL", img: "sql" },
  { skill: "MongoDB", img: "mongodb" },
  { skill: "PostgreSQL", img: "postgresql" },
  { skill: "Cypress", img: "cypress" },
  { skill: "Jest", img: "jest" },
  { skill: "Node.js", img: "nodejs" },
  { skill: "Figma", img: "figma" },
  { skill: "Netlify", img: "netlify" },
  { skill: "Render", img: "render" },
  { skill: "GitHub", img: "github" },
];

export default function Skills() {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I have worked with</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skill.map((item, i) => {
            return <SkillItem key={i} item={item}></SkillItem>;
          })}
        </div>
      </div>
    </div>
  );
}
