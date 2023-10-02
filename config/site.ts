export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Artificial Intelligence Society",
	description: "The Artificial Intelligence Society at Bennett University",
	navItems: [
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Research",
      href: "/research",
    },
    {
      label: "Publications",
      href: "/publications",
    },
    {
      label: "Dataset",
      href: "/dataset",
    }
	],
	navMenuItems: [
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Research",
			href: "/research",
		},
		{
			label: "Publications",
			href: "/publications",
		},
		{
			label: "Dataset",
			href: "/dataset",
		}
	],
	links: {
		github: "https://github.com/",
		twitter: "https://twitter.com/",
		docs: "https://nextui.org",
		linkedin: "https://www.linkedin.com/company/ais-bu/",
		discord: "https://discord.gg/wr6jFhcc",
    sponsor: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
	},
};
