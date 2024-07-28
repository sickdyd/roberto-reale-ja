import Image from "next/image";
import "../components/carousel.css";

export default function Carousel() {
  const logos = [
    "html",
    "css",
    "tailwindcss",
    "javascript",
    "typescript",
    "react",
    "redux",
    "next.js",
    "node.js",
    "rubyonrails",
    "aws",
    "kubernetes",
  ];

  return (
    <div className="logos mt-8 overflow-hidden whitespace-nowrap">
      <p className="mb-4 text-center text-xs text-slate-600">
        Bringing you the best web experience with:
      </p>
      {[logos, logos].map((logos, index) => (
        <div
          key={`logos-${index}`}
          className="logos-slide inline-block whitespace-nowrap"
        >
          {logos.map((logo, index) => (
            <Image
              className="ml-16 inline-block w-12"
              key={`${logo}-${index}`}
              src={`/tech-stack-icons/${logo}.svg`}
              alt={`${logo} logo`}
              width={48}
              height={48}
              title={logo}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
