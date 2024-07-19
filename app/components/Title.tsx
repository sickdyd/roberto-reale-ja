import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Title() {
  return (
    <h1 className={`text-4xl font-bold ${poppins.className}`}>
      <Link href="/" className="no-underline">
        Roberto Reale
      </Link>
    </h1>
  );
}
