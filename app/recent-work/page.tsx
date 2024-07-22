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
    title:
      "AWS nuker application: automate AWS accounts resources clean up to prevent further financial damage...",
    contents: (
      <>
        <h3>Context</h3>
        <span>
          At{" "}
          <a href="https://www.trueability.com" target="_blank">
            TrueAbility
          </a>{" "}
          we provision ephemeral test environments that comprehend two or more
          virtual machines used by candiates to demonstrate their skills by
          completing a set of tasks in order to get a certificate. Among our
          customers we have Google, DigitalOcean, Elastic, HashiCorp, VMWare,
          Canonical and more. We have the capability to provision our test
          environment on several providers, such as Rackspace, AWS, GCP and
          Packet. Provisioning those environments on Google Cloud Platform
          became our main expense. During 2023/2024, we completed the
          installation of several self-managed Kubernetes clusters worldwide.
          Once our our brand new clusters became available, we decided to
          migrate the provisioning to them, with the aim of reducing our GCP
          bill to zero. I was tasked with leading the migration project.
        </span>
        <h3>Steps, challenges and notable achievements</h3>
        <div>
          <p>- ....</p>
        </div>
      </>
    ),
  },
  {
    title:
      "Update the UXPin Electron app from version v8 to v24, getting rid of dozens of bugs in one go...",
    contents: (
      <>
        <h3>Context</h3>
        <span>
          At{" "}
          <a href="https://www.trueability.com" target="_blank">
            TrueAbility
          </a>{" "}
          we provision ephemeral test environments that comprehend two or more
          virtual machines used by candiates to demonstrate their skills by
          completing a set of tasks in order to get a certificate. Among our
          customers we have Google, DigitalOcean, Elastic, HashiCorp, VMWare,
          Canonical and more. We have the capability to provision our test
          environment on several providers, such as Rackspace, AWS, GCP and
          Packet. Provisioning those environments on Google Cloud Platform
          became our main expense. During 2023/2024, we completed the
          installation of several self-managed Kubernetes clusters worldwide.
          Once our our brand new clusters became available, we decided to
          migrate the provisioning to them, with the aim of reducing our GCP
          bill to zero. I was tasked with leading the migration project.
        </span>
        <h3>Steps, challenges and notable achievements</h3>
        <div>
          <p>- ....</p>
        </div>
      </>
    ),
  },
  {
    title:
      "ETL application to extract data from Mixpanel and combine it with our database...",
    contents: (
      <>
        <h3>Context</h3>
        <span>
          At{" "}
          <a href="https://www.trueability.com" target="_blank">
            TrueAbility
          </a>{" "}
          we provision ephemeral test environments that comprehend two or more
          virtual machines used by candiates to demonstrate their skills by
          completing a set of tasks in order to get a certificate. Among our
          customers we have Google, DigitalOcean, Elastic, HashiCorp, VMWare,
          Canonical and more. We have the capability to provision our test
          environment on several providers, such as Rackspace, AWS, GCP and
          Packet. Provisioning those environments on Google Cloud Platform
          became our main expense. During 2023/2024, we completed the
          installation of several self-managed Kubernetes clusters worldwide.
          Once our our brand new clusters became available, we decided to
          migrate the provisioning to them, with the aim of reducing our GCP
          bill to zero. I was tasked with leading the migration project.
        </span>
        <h3>Steps, challenges and notable achievements</h3>
        <div>
          <p>- ....</p>
        </div>
      </>
    ),
  },
  {
    title:
      "Integrating Mixpanels tracking into the main UXPin app, allowing us to analyze in detail user behavior...",
    contents: (
      <>
        <h3>Context</h3>
        <span>
          At{" "}
          <a href="https://www.trueability.com" target="_blank">
            TrueAbility
          </a>{" "}
          we provision ephemeral test environments that comprehend two or more
          virtual machines used by candiates to demonstrate their skills by
          completing a set of tasks in order to get a certificate. Among our
          customers we have Google, DigitalOcean, Elastic, HashiCorp, VMWare,
          Canonical and more. We have the capability to provision our test
          environment on several providers, such as Rackspace, AWS, GCP and
          Packet. Provisioning those environments on Google Cloud Platform
          became our main expense. During 2023/2024, we completed the
          installation of several self-managed Kubernetes clusters worldwide.
          Once our our brand new clusters became available, we decided to
          migrate the provisioning to them, with the aim of reducing our GCP
          bill to zero. I was tasked with leading the migration project.
        </span>
        <h3>Steps, challenges and notable achievements</h3>
        <div>
          <p>- ....</p>
        </div>
      </>
    ),
  },
  {
    title:
      "Figma plugin for UXPin application, allowing designers to import their Figma projects in UXPin...",
    contents: (
      <>
        <h3>Context</h3>
        <span>
          At{" "}
          <a href="https://www.trueability.com" target="_blank">
            TrueAbility
          </a>{" "}
          we provision ephemeral test environments that comprehend two or more
          virtual machines used by candiates to demonstrate their skills by
          completing a set of tasks in order to get a certificate. Among our
          customers we have Google, DigitalOcean, Elastic, HashiCorp, VMWare,
          Canonical and more. We have the capability to provision our test
          environment on several providers, such as Rackspace, AWS, GCP and
          Packet. Provisioning those environments on Google Cloud Platform
          became our main expense. During 2023/2024, we completed the
          installation of several self-managed Kubernetes clusters worldwide.
          Once our our brand new clusters became available, we decided to
          migrate the provisioning to them, with the aim of reducing our GCP
          bill to zero. I was tasked with leading the migration project.
        </span>
        <h3>Steps, challenges and notable achievements</h3>
        <div>
          <p>- ....</p>
        </div>
      </>
    ),
  },
];
