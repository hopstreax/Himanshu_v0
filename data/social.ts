import { ConnectData, SocialLinkItem } from "@/types/portfolio";

export const primarySocialLinks: readonly SocialLinkItem[] = [
  {
    platform: "GitHub",
    label: "GitHub",
    url: "https://github.com/hopstreax",
    handle: "@hopstreax",
    isExternal: true,
    isPrimary: true,
    actionText: "View Code & Repositories",
  },
  {
    platform: "LinkedIn",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/himanshupatro/",
    handle: "/in/himanshupatro",
    isExternal: true,
    isPrimary: true,
    actionText: "Professional Profile",
  },
  {
    platform: "X",
    label: "X (Twitter)",
    url: "https://x.com/hopstreax",
    handle: "@hopstreax",
    isExternal: true,
    isPrimary: true,
    actionText: "Engineering Updates",
  },
  {
    platform: "Email",
    label: "Email",
    url: "mailto:akashpatra.334@gmail.com",
    handle: "akashpatra.334@gmail.com",
    isExternal: false,
    isPrimary: true,
    actionText: "Direct Communication",
  },
] as const;

export const secondarySocialLinks: readonly SocialLinkItem[] = [
  {
    platform: "Notion",
    label: "Notion",
    url: "https://app.notion.com/p/Himanshu-Patro-3bedaf80163d80e99290f90ef1a94ae9?source=copy_link",
    handle: "Himanshu Patro",
    isExternal: true,
    isPrimary: false,
    actionText: "Engineering Notes & Portfolio",
  },
  {
    platform: "Instagram",
    label: "Instagram",
    url: "https://www.instagram.com/hop.streax/",
    handle: "@hop.streax",
    isExternal: true,
    isPrimary: false,
    actionText: "Personal Visual Log",
  },
] as const;

export const socialLinks: readonly SocialLinkItem[] = [
  ...primarySocialLinks,
  ...secondarySocialLinks,
];

export const connectData: ConnectData = {
  heading: "Let's build together",
  tagline: "Open for full-time software engineering roles & open-source collaboration.",
  actionPrompt: "GET IN TOUCH",
  links: primarySocialLinks,
  secondaryLinks: secondarySocialLinks,
};
