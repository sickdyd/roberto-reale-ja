import Image from "next/image";

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
    <div className="flexflex-col mt-8 items-center justify-center">
      <p className="mb-4 text-center text-xs text-slate-600">
        Bringing you the best web experience with:
      </p>
      <div className="flex justify-center gap-6 overflow-hidden">
        {logos.map((logo) => (
          <Image
            key={logo}
            src={`/${logo}.svg`}
            alt={`${logo} logo`}
            width={48}
            height={48}
          />
        ))}
      </div>
    </div>
  );
}
