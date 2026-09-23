import { SocialLinkItem } from "@/types/portfolio";

export const socialLinks: readonly SocialLinkItem[] = [
  {
    platform: "GitHub",
    label: "GitHub",
    url: "https://github.com/himanshupatro-334",
    handle: "@himanshupatro-334",
    isExternal: true,
  },
  {
    platform: "LinkedIn",
    label: "LinkedIn",
    url: "https://linkedin.com/in/himanshupatro",
    handle: "/in/himanshupatro",
    isExternal: true,
  },
  {
    platform: "X",
    label: "X (Twitter)",
    url: "https://x.com/himanshupatro",
    handle: "@himanshupatro",
    isExternal: true,
  },
  {
    platform: "Email",
    label: "Email",
    url: "mailto:akashpatra.334@gmail.com",
    handle: "akashpatra.334@gmail.com",
    isExternal: false,
  },
] as const;
