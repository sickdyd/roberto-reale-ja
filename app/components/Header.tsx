import LinkWithIcon from "./LinkWithIcon";
import Title from "./Title";

export default function Header() {
  return (
    <header className="mb-8 flex flex-col items-center justify-between lg:flex-row">
      <Title />
      <nav aria-label="Main navigation">
        <div className="mt-8 flex flex-row lg:mt-0">
          <LinkWithIcon
            className={menuEntryClasses}
            href="/recent-work"
            aria-label="Navigate to recent-work"
          >
            Recent work
          </LinkWithIcon>
          <LinkWithIcon
            className={menuEntryClasses}
            target="_blank"
            href="https://github.com/sickdyd"
            aria-label="Open new page to Github"
          >
            Github
          </LinkWithIcon>
          <LinkWithIcon
            className={menuEntryClasses}
            target="_blank"
            href="https://www.npmjs.com/~sickdyd"
            aria-label="Open new page to npmjs.com"
          >
            npm
          </LinkWithIcon>
          <LinkWithIcon
            className={`${menuEntryClasses} border-r-0`}
            href="mailto:roberto.reale.ja@gmail.com"
            aria-label="Send email to Roberto Reale"
          >
            Email
          </LinkWithIcon>
        </div>
      </nav>
    </header>
  );
}

const menuEntryClasses = `border-r border-slate-200 pl-2 pr-2 no-underline`;
