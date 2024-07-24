import { ReactNode } from "react";
import ExpandableItems from "../components/ExpandableItems";
import LinkWithIcon from "../components/LinkWithIcon";

export type Project = {
  title: ReactNode;
  contents: ReactNode;
};

export default function RecentWork() {
  return (
    <>
      <p>
        Due to the diverse nature of the roles I've covered in my career, some
        of the most memorable achievements are not something that can be shared
        on GitHub. To learn more about what I worked on, click on the sections
        below!
      </p>
      <ExpandableItems projects={projects} />
      <p className="mt-4 border-t border-lime-500 pt-2 text-center">
        If you would like to know more about my past work,{" "}
        <LinkWithIcon
          href="mailto:roberto.reale.ja@gmail.com"
          aria-label="Send email to Roberto Reale"
        >
          contact me
        </LinkWithIcon>
        !
      </p>
    </>
  );
}

const projects: Project[] = [
  {
    title: (
      <p className="mb-2">
        <strong>Saving $12k per month</strong> on our GCP bill by building a
        custom Ruby library to provision virtual machines on our self-managed
        Kubernetes clusters...
      </p>
    ),
    contents: (
      <>
        <h3>The challenge</h3>
        <p className="mb-2">
          At{" "}
          <LinkWithIcon
            href="https://www.trueability.com"
            target="_blank"
            aria-label="Visit TrueAbility"
          >
            TrueAbility
          </LinkWithIcon>{" "}
          we provision ephemeral test environments with two or more virtual
          machines used by candiates to assess their skills in order to get a
          certificate. Our customers include world-renowned names, such as{" "}
          <strong>Google</strong>, <strong>Elastic</strong>,{" "}
          <strong>HashiCorp</strong>, <strong>VMWare</strong> and more.
        </p>
        <p className="mb-2">
          During 2023/2024, we completed the installation of several
          self-managed Kubernetes clusters worldwide. We decided to migrate the
          provisioning of the test environment VMs to our new clusters, with the
          aim of reducing our GCP bill to zero. I was tasked with leading the
          migration project.
        </p>
        <h3>Steps, challenges and notable achievements</h3>
        <ul className="list-inside list-disc">
          <li>
            Trying to avoid <i>reinventing the wheel:</i> initial investigation
            of available tools potentially viable to complete the task — none of
            them was a good fit
          </li>
          <li>
            Estabilishing a direct communication channel with the{" "}
            <LinkWithIcon href="https://kubevirt.io/" target="_blank">
              KubeVirt
            </LinkWithIcon>{" "}
            dev team (email and Slack) to shed light on some of the initial
            unknowns
          </li>
          <li>
            Setting up a sensible local dev environment to test provisioning on
            k8s, achieved by redirecting the staging domain by leveraging ngrok
            endpoints and edges — no local dev environment to test provisioning
            was available before this; in terms of dev speed, this was a game
            changer!
          </li>
          <li>
            Converting GCP resources to the k8s equivalents (VPCs, additional
            disks, etc)
          </li>
          <li>
            Building a Ruby on Rails service to communicate with the k8s API
            control plane to dynamically generate all required resources on
            demand
          </li>
          <li>
            Adding support for multiple clusters across the world, with support
            for different{" "}
            <LinkWithIcon
              href="https://kubernetes.io/docs/concepts/storage/storage-classes/"
              target="_blank"
            >
              storage classes
            </LinkWithIcon>
          </li>
          <li>
            Implementing VM imaging with{" "}
            <span className="bg-slate-400 p-0.5 font-mono text-sm text-slate-50">
              VirtualMachineSnapshot
            </span>{" "}
            and restore with{" "}
            <span className="bg-slate-400 p-0.5 font-mono text-sm text-slate-50">
              VirtualMachineRestore
            </span>{" "}
            to be able to restart old test environments when needed
          </li>
          <li>
            After extensive testing, careful migration of live test environments
            provisioning to k8s
          </li>
          <li>
            In a time span of 3/4 months,{" "}
            <strong>virtually zeroing our GCP bill</strong> 🏁
          </li>
        </ul>
      </>
    ),
  },
  {
    title: (
      <>
        AWS nuker application: automate AWS accounts resources clean up to{" "}
        <b>prevent wasting thousands of $$$</b> per week...
      </>
    ),
    contents: (
      <>
        <h3>The challenge</h3>
        <span>
          Some of our customers at{" "}
          <LinkWithIcon
            href="https://www.trueability.com"
            target="_blank"
            aria-label="Visit TrueAbility"
          >
            TrueAbility
          </LinkWithIcon>
          , require to provision additional resources on AWS in order to create
          a viable environment to test the candidate's skills. The initial
          testing phase was manageable, but after the product went to
          production, due to the inability to automatically delete unused /
          dangling resources on AWS, we saw a significant and steady increase in
          our AWS bill. The clean up process was manual, which was
          time-consuming and tedious. I was tasked with creating an automated
          solution to fix the problem.
        </span>
        <h3>Steps, challenges and notable achievements</h3>
        <ul className="list-inside list-disc">
          <li>
            Collaboration with{" "}
            <LinkWithIcon href="https://www.hashicorp.com/" target="_blank">
              HashiCorp
            </LinkWithIcon>{" "}
            dev team to investigate available tools:{" "}
            <LinkWithIcon
              href="https://github.com/rebuy-de/aws-nuke"
              target="_blank"
            >
              aws-nuke
            </LinkWithIcon>{" "}
            was the tool picked up for deleting resources on AWS{" "}
          </li>
          <li>
            Created a separate microservice with an Express.js server serving an
            API endpoint accepting a payload with an array of AWS account IDs to
            be cleared up
          </li>
          <li>
            Created a worker on Ruby on Rails to collect all <i>nukeable</i>{" "}
            accounts and send them to the Express.js server
          </li>
          <li>
            Added calls to the microservice in strategic points in the
            provisioning flow to immediately remove unused resources
          </li>
          <li>
            Identified a set of resources that are not supported on aws-nuke and
            implemented a custom solution to delete them with aws-cli from the
            microservice
          </li>
          <li>
            The costs became the minimum necessary to run the test environments,{" "}
            <b>from an average of $300 to a few bucks per day</b> 🏁
          </li>
        </ul>
      </>
    ),
  },
  {
    title: (
      <>
        Update the UXPin Electron app from version v8 to v24,{" "}
        <b>getting rid of dozens of bugs in one go</b>...
      </>
    ),
    contents: (
      <>
        <h3>Context</h3>
        <span>
          <LinkWithIcon href="https://www.uxpin.com" target="_blank">
            UXPin
          </LinkWithIcon>{" "}
          is a tool used to create interactive prototypes for websites. One of
          the features they offer, is a desktop application built with{" "}
          <LinkWithIcon href="https://www.electronjs.org/" target="_blank">
            Electron
          </LinkWithIcon>
          . The app was stuck on version 8, which meant also that the Chrome
          version running in it was wildly outdated, causing several bugs in the
          application. I was tasked with updating the app to the latest version
          of Electron.
        </span>
        <h3>Steps, challenges and notable achievements</h3>
        <ul className="list-inside list-disc">
          <li>
            Upgrading the Electron dependency directly was a titanic task,
            therefore I decided to update the dependency with increases of 1
            major version at a time. This allowed me to identify and fix the
            compatibility issues with the legacy code bit by bit, making it
            easier by tracking the changes in the Electron release notes
          </li>
          <li>
            The security features in Electron changed drastically even just from
            version 8 to version 9 (
            <LinkWithIcon
              href="https://www.electronjs.org/blog/electron-9-0#change-the-default-of-contextisolation-from-false-to-true-starting-in-electron-10"
              target="_blank"
            >
              contextIsolation
            </LinkWithIcon>
            ) and I had to compromise between security and compatibility with
            the existing code to be able to deliver the update in a reasonable
            time
          </li>
          <li>
            Another security feature implemented was to remove support for
            complex objects when using the{" "}
            <LinkWithIcon
              href="https://www.electronjs.org/docs/latest/api/ipc-renderer"
              target="_blank"
            >
              ipcRenderer
            </LinkWithIcon>{" "}
            ; to solve this, I had to update the code to serialize complex
            objects when using it
          </li>
          <li>
            After a few weeks of intense work and several fixes, the app was
            updated to the latest available version at the time. As a "side"
            effect <b>Chrome was updated from version 80 to version 110</b>!
            Needless to say, several bugs were solved allowing us to close right
            away a few dozens of tickets. This had a direct impact on the user
            experience and the feedback from our user base was overwhelmingly
            positive 🙂
          </li>
        </ul>
      </>
    ),
  },
  {
    title: (
      <>
        Integrating VWO for A/B testing and creating an "extract, transform, and
        load" (ETL) application to extract data from VWO and combine it with our
        DB data...
      </>
    ),
    contents: (
      <>
        <h3>Context</h3>
        <span>
          Our marketing team at UXPin was enthusiastic about conducting an A/B
          test on two distinct iterations of the pricing page. Each version
          featured substantial UI enhancements designed to optimize customer
          acquisition and conversion rates. The tool picked up for the task was{" "}
          <LinkWithIcon href="https://vwo.com/" target="_blank">
            VWO
          </LinkWithIcon>
          .
        </span>
        <h3>Steps, challenges and notable achievements</h3>
        <ul className="list-inside list-disc">
          <li>
            VWO allows editing views and display one of several views depending
            on the segment of users. The first challenge was implementing
            several quite complicated changes to the pricing page html/css using
            the VWO provided UI to reflect the new designs. The tools provided
            by VWO have some limitations, but after some battling with the CSS
            and a few hacks, the new designs were implemented. Attaching
            triggers to the buttons was tricky as well, given that they would
            change radically depending on what type of account the user had.
            After adding specific identifiers and custom attributes to the
            buttons, the triggers were set up correctly.
          </li>
          <li>
            Data collection: VWO allows to download CSS files containing the
            data collected, however we needed to join their data with what was
            already in our database. To do so, I created a new Node.js
            application that would do the follow:
            <br />
            - download/extract/parse the VWO data
            <br />
            - fetch the data from our DB
            <br />
            - merge the data from the two sources
            <br />
            - generate a new CSV file and zip it
            <br />- sending an email to the designed recipient
          </li>
        </ul>
      </>
    ),
  },
  {
    title: (
      <>
        Figma plugin for UXPin application, allowing designers to import their
        Figma projects in UXPin...
      </>
    ),
    contents: (
      <>
        <h3>Context</h3>
        <span>
          One of the main competitors of{" "}
          <LinkWithIcon href="https://www.uxpin.com" target="_blank">
            UXPin
          </LinkWithIcon>{" "}
          is Figma, a widely used tool for Web Designers. In order to shift some
          of their user base to UXPin, we decided to create a Figma plugin that
          would allow designers to easily import their projects to UXPin. I was
          paired with a fellow developer (creator of{" "}
          <LinkWithIcon href="https://bestofjs.org/" target="_blank">
            The Best of JS
          </LinkWithIcon>
          ) on picking up the work left from a previous external collaborator:
          together we built the final version of the{" "}
          <LinkWithIcon
            href="https://www.figma.com/community/plugin/1133387866564475565/uxpin-copy-paste-prototype"
            target="_blank"
          >
            UXPin Figma plugin
          </LinkWithIcon>
          .
        </span>
        <h3>Steps, challenges and notable achievements</h3>
        <ul className="list-inside list-disc">
          <li>Tons of fixes / refactors on the pre existing code</li>
          <li>Mapping each Figma element attribute to UXPin</li>
          <li></li>
        </ul>
      </>
    ),
  },
];
