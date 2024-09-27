// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Microsoft Entra ID Governance',
  tagline: 'Training hub for Microsoft Entra ID Governance',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://microsoft.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/EntraIDGovernance-Training',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'microsoft', // Usually your GitHub org/user name.
  projectName: 'EntraIDGovernance-Training', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  }, 

  plugins: [
     [
      "@gracefullight/docusaurus-plugin-microsoft-clarity",
      { projectId: "o2shzitbtm" },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'Entra ID Governance - Training',
        logo: {
          alt: 'Entra ID Governance logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/microsoft/EntraIDGovernance-Training',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Resources',
                to: '/',
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {
                label: 'What is Microsoft Entra ID Governance',
                href: 'https://learn.microsoft.com/en-us/entra/id-governance/identity-governance-overviews',
              },
              {
                label: 'What is Microsoft Entra Permissions Mamagement',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'SAP IDM Migration Guide',
                href: 'https://learn.microsoft.com/en-us/entra/id-governance/scenarios/migrate-from-sap-idm',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/microsoft/EntraIDGovernance-Training/',
              },
            ],
          },
        ],
        copyright: `Built by the Microsoft Identity Customer Acceleration Team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;