import Link from "next/link";
import Title from "./Title";

export default function Header() {
  return (
    <header className="mb-8 flex flex-col items-center justify-between lg:flex-row">
      <Title />
      <nav>
        <div className="mt-8 flex flex-row lg:mt-0">
          <Link className={menuEntryClasses} href="/recent-work">
            Recent work
          </Link>
          <Link
            className={menuEntryClasses}
            target="_blank"
            href="https://github.com/sickdyd"
          >
            Github
          </Link>
          <Link
            className={menuEntryClasses}
            target="_blank"
            href="https://www.npmjs.com/~sickdyd"
          >
            npm
          </Link>
          <Link
            className={`${menuEntryClasses} border-r-0`}
            href="mailto:roberto.reale.ja@gmail.com"
          >
            Email
          </Link>
        </div>
      </nav>
    </header>
  );
}

const menuEntryClasses = `border-r border-slate-200 pl-2 pr-2 no-underline`;
