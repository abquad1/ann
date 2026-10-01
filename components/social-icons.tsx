import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaEnvelope,
  FaLink,
} from "react-icons/fa6";

import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  x: FaXTwitter,
  email: FaEnvelope,
};

export default function SocialIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] || FaLink;
  return <Icon aria-hidden="true" className={className} />;
}
