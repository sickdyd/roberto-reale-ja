import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Title() {
  return (
    <h1 className={`font-bold sm:text-3xl ${poppins.className} lg:text-5xl`}>
      <Link href="/" className="no-underline">
        Roberto Reale
      </Link>
    </h1>
  );
}
