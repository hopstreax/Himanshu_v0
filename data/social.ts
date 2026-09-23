import { ConnectData, SocialLinkItem } from "@/types/portfolio";

export const socialLinks: readonly SocialLinkItem[] = [
  {
    platform: "GitHub",
    label: "GitHub",
    url: "https://github.com/himanshupatro-334",
    handle: "@himanshupatro-334",
    isExternal: true,
    actionText: "View Code & Repositories",
  },
  {
    platform: "LinkedIn",
    label: "LinkedIn",
    url: "https://linkedin.com/in/himanshupatro",
    handle: "/in/himanshupatro",
    isExternal: true,
    actionText: "Professional Profile",
  },
  {
    platform: "X",
    label: "X (Twitter)",
    url: "https://x.com/himanshupatro",
    handle: "@himanshupatro",
    isExternal: true,
    actionText: "Engineering Updates",
  },
  {
    platform: "Email",
    label: "Email",
    url: "mailto:akashpatra.334@gmail.com",
    handle: "akashpatra.334@gmail.com",
    isExternal: false,
    actionText: "Direct Communication",
  },
] as const;

export const connectData: ConnectData = {
  heading: "Let's build together",
  tagline: "Open for full-time software engineering roles & open-source collaboration.",
  actionPrompt: "GET IN TOUCH",
  links: socialLinks,
};
