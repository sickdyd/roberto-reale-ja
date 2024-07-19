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
        Due to the diverse nature of the roles I've covered, some of the most
        memorable achievements are not something that can be shared on GitHub.
        To learn more about what I worked on, click on the sections below!
      </p>
      <ExpandableItems projects={projects} />
    </>
  );
}

const projects: Project[] = [
  {
    title: (
      <span>
        Saving thousands per month on our GCP bill by building a custom Ruby
        library to provision virtual machines on our self-managed Kubernetes
        clusters...
      </span>
    ),
    contents: (
      <>
        <h3>Context</h3>
        <span>
          At{" "}
          <LinkWithIcon href="https://www.trueability.com" target="_blank">
            TrueAbility
          </LinkWithIcon>{" "}
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
          <p>
            - Initial investigation of available tools potentially viable to
            complete the task: none of them was a good fit
          </p>
          <p>
            - Setting up a sensible dev environment to test provisioning on k8s
            by leveraing ngrok endpoints and edges
          </p>
          <p>
            - Estabilishing a direct communication channel with the kubevirt dev
            team to solve early stages issues
          </p>
          <p>
            - Avoid rebuilding from scratch the existing GCP golden images by
            tweaking them to work with k8s
          </p>
          <p>
            - Converting GCP resources to the k8s equivalents (VPCs, additional
            disks, etc)
          </p>
          <p>
            - Building a service to communicate with the k8s API control plane
          </p>
          <p>
            - After extensive testing, careful migration of live test
            environments provisioning to k8s
          </p>
          <p>- In a time span of 3/4 months, virtually zeroing our GCP bill</p>
        </div>
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
