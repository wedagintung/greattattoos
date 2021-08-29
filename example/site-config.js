module.exports = {
  siteUrl: "https://greattattoos.netlify.app", // Site domain. Do not include a trailing slash!

  postsPerPage: 10, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "Choose The Best Tattoos", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta:
    "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding", // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "Built with Draftbox", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://tattoo.enjooymart.com",
  subscribeWidget: {
    visible: true,
    title: "Subscribe to Great Tattoos",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Draftbox.",
  },
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://greattattoos.netlify.app/",
      },
      {
        label: "Contact",
        url: "https://greattattoos.netlify.app/contact",
      },
    ],
  },
  footer: {
    copyright: "Built with Draftbox",
    navigation: [
      {
        label: "Home",
        url: "https://greattattoos.netlify.app/",
      },
      {
        label: "Sitemap",
        url: "https://greattattoos.netlify.app/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://greattattoos.netlify.app/rss.xml",
      },
      {
        label: "Contact",
        url: "https://greattattoos.netlify.app/contact",
      },
      {
        label: "External Link",
        url: "#",
      },
    ],
  },
  socialLinks: {
    twitter: "#",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    github: "#",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact Built with Draftbox",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
  },
  twitterCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "Built with Bro",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "facebookImage.jpg",
    appId: "2391725224459953",
  },
  siteTitle: "Built with Draftbox",
  siteDescription:
    "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding.",
  language: "en",
  logoUrl: "logo-thick.svg",
  iconUrl: "favicon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "logo.png",
  themeConfig: {
    variables: [
      { varName: "--accent-color", value: "#6166DC" },
      { varName: "--accent-color-dark", value: "#E9DAAC" },
      { varName: "--success-color", value: "#46B17B" },
      { varName: "--success-color-dark", value: "#46B17B" },
      {
        varName: "--merriweather-font",
        value: `Merriweather`,
      },
      {
        varName: "--merriweather-font-bold",
        value: `700`,
      },
      {
        varName: "--system-font",
        value: `system-ui`,
      },
      {
        varName: "--system-font-normal",
        value: `400`,
      },
      {
        varName: "--system-font-semibold",
        value: `600`,
      },
      {
        varName: "--system-font-bold",
        value: `700`,
      },
      {
        varName: "--monospace-font",
        value: `Source Code Pro`,
      },
      {
        varName: "--monospace-font-normal",
        value: `400`,
      },
    ],
    fonts: [
      {
        family: "Merriweather",
        variants: ["700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Source Code Pro",
        variants: ["400"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ]
  }
};
