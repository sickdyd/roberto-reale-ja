import LinkWithIcon from "./components/LinkWithIcon";

export default function Home() {
  return (
    <div>
      <blockquote
        className="mb-8 flex flex-col border-l-2 border-l-slate-200 pl-4 text-xl"
        cite="https://quoteinvestigator.com/2015/04/02/simple/"
      >
        <i>Simplicity is the ultimate sophistication.</i>
        <span className="mt-2 font-sans text-xl">— Leonardo Da Vinci</span>
      </blockquote>
      <p className="mb-4">👋 Hello, welcome to my homepage!</p>
      <p className="mb-4">
        My name is Roberto Josef Antonio Reale. I’m a seasoned web developer
        with <strong>over fourteen years of extensive experience</strong> in
        creating, managing, and optimizing websites and web applications.
      </p>
      <p className="mb-4">
        Throughout my career, I have honed my skills in various programming
        languages and frameworks. I work mainly with <strong>JavaScript</strong>{" "}
        (React, Next.js, Node.js) and <strong>Ruby on Rails</strong>. I am
        proficient with <strong>HTML</strong> and <strong>CSS</strong> (vanilla
        and Tailwind). I am also a{" "}
        <LinkWithIcon
          target="_blank"
          href="https://www.credly.com/badges/08104359-709a-4150-b3b7-297d90f26ccf/public_url"
          aria-label="Certified Kubernetes Administrator badge on Credly"
        >
          <strong>Certified Kubernetes Administrator</strong>
        </LinkWithIcon>
        .
      </p>
      <p className="mb-4">
        In my spare time I am contribuiting with a few{" "}
        <LinkWithIcon
          target="_blank"
          href="https://www.npmjs.com/~sickdyd"
          aria-label="npm packages on npmjs.com"
        >
          npm packages
        </LinkWithIcon>{" "}
        to the Open Source Community.
      </p>
      <p className="mb-4">
        I am located in Osaka, <strong>Japan</strong>.
      </p>
      <p className="mb-4">
        If you want to get in touch, hit me up with an{" "}
        <LinkWithIcon
          href="mailto:roberto.reale.ja@gmail.com"
          aria-label="Send email to Roberto Reale"
        >
          email
        </LinkWithIcon>{" "}
        :-)
      </p>
    </div>
  );
}
