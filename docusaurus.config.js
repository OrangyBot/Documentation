// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Orangy',
  tagline: 'The all in one, and free Discord bot!',
  url: 'https://docs.orangybot.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OrangyBot',
  projectName: 'Documentation',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/OrangyBot/Documentation/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/OrangyBot/Documentation/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "placeholder",
        apiKey: "placeholder",
        indexName: "placeholder",
        
        contextualSearch: false,
        searchParameters: {},
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: "contribute",
        content: "This website is still a work-in-progress! Please click <a href='https://github.com/OrangyBot/Documentation'>here</a> to contribute!",
        isCloseable: true,
        textColor: "#121212",
        backgroundColor: "#ffffff",
      },
      navbar: {
        title: 'Orangy',
        logo: {
          alt: 'Logo',
          src: 'img/orangylogo.png',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'welcome',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Changelog', position: 'left'},
          {
            type: "localeDropdown",
            position: "right"
          },
          {
            href: 'https://orangybot.me',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://status.orangybot.me',
            label: 'Status',
            position: 'right',
          },
          {
            href: 'https://github.com/OrangyBot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/welcome',
              },
              {
                label: 'Changelog',
                to: '/blog'
              }
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/j2WEAVnc3t',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OrangyBot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://orangybot.me',
              },
              {
                label: 'Status',
                href: 'https://status.orangybot.me',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OrangyBot. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "javascript",
      },
    }),
};

module.exports = config;
