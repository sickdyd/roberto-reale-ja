import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

export default function LinkWithIcon(
  props: AnchorHTMLAttributes<HTMLAnchorElement> & { href: Url },
) {
  const { target, href, children, className } = props;
  const external = target === "_blank" || href.startsWith("mailto:");

  return (
    <Link {...props} className={`whitespace-nowrap ${className}`}>
      {children}
      {external && (
        <RiExternalLinkLine size={12} className="mb-1 ml-1 inline-block" />
      )}
    </Link>
  );
}
