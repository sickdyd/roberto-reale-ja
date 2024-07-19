"use client";
import Link from "next/link";
import LinkWithIcon from "./components/LinkWithIcon";

export default function Home() {
  return (
    <div>
      <p className="mb-6 flex flex-col border-l-2 border-l-slate-200 pl-4 text-sm">
        <i>Simplicity is the ultimate sophistication.</i>
        <span className="mt-2 font-sans text-sm">— Leonardo Da Vinci</span>
      </p>
      <p className="mb-4">👋 Hello, welcome to my homepage!</p>
      <p className="mb-4">
        My name is Roberto Josef Antonio Reale. I’m a seasoned web developer
        with <strong>over ten years of extensive experience</strong> in
        creating, managing, and optimizing websites and web applications.
      </p>
      <p className="mb-4">
        Throughout my career, I have honed my skills in various programming
        languages and frameworks. I work mainly with <strong>JavaScript</strong>{" "}
        (React, Next.js, Node.js) and <strong>Ruby on Rails</strong>. I am also
        proficient with <strong>HTML</strong> and <strong>CSS</strong> (vanilla
        and Tailwind).
      </p>
      <p className="mb-4">
        I'm contribuiting with a few{" "}
        <LinkWithIcon target="_blank" href="https://www.npmjs.com/~sickdyd">
          npm packages
        </LinkWithIcon>{" "}
        to the Open Source Community, feel free to check them out and give me
        some feedback!
      </p>
      <p className="mb-4">
        I am also a{" "}
        <LinkWithIcon
          target="_blank"
          href="https://www.credly.com/badges/08104359-709a-4150-b3b7-297d90f26ccf/public_url"
        >
          <strong>Certified Kubernetes Administrator</strong>
        </LinkWithIcon>
        .
      </p>
      <p className="mb-4">
        Normally I work from Osaka, <strong>Japan</strong>. Every year I travel
        back to my home country, <strong>Italy</strong>, and spend several weeks
        or months working from there.
      </p>
      <p className="mb-4">
        On a monthly basis I play live some of my original songs in some local
        venues. Whenever there is the chance, I also go surfing! 🏄‍♂️
      </p>
      <p className="mb-4">
        If you want to get in touch, hit me up with an email :-)
      </p>
    </div>
  );
}
