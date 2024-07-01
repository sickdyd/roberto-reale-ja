"use client";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleSetDarkMode = () => {
    setDarkMode((previousDarkMode) => !previousDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-12 text-6xl font-bold">Roberto Reale</h1>
      <div className="flex flex-row space-x-8">
        <div className="align-center flex flex-col space-y-4">
          <h2 className="text-lg">👋 Hello, welcome to my homepage!</h2>
          <p className="max-w-xl">
            I’m a seasoned web developer with{" "}
            <strong>over ten years of extensive experience</strong> in creating,
            managing, and optimizing websites and web applications.
          </p>
          <p className="max-w-xl">
            Throughout my career, I have honed my skills in various programming
            languages and frameworks. I work mainly with{" "}
            <strong>JavaScript</strong> (React, Next.js, Node.js),{" "}
            <strong>Ruby on Rails</strong> and <strong>CSS</strong> (vanilla and
            Tailwind).
          </p>
          <p className="max-w-xl">
            I am a{" "}
            <a href="https://www.credly.com/badges/08104359-709a-4150-b3b7-297d90f26ccf/public_url">
              Certified Kubernetes Administrator
            </a>
            .
          </p>
          <button className="self-center text-2xl" onClick={handleSetDarkMode}>
            {darkMode ? "🌝" : "🌘"}
          </button>
        </div>
      </div>
    </main>
  );
}
