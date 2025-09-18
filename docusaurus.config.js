// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

const config = {

  title: 'Traficante Aviation',
  tagline: 'Airplanes',
  favicon: 'img/tomahawk.png',
  url: 'https://traficanteaviation.com', // Your website URL
  baseUrl: '/',
  organizationName: 'atraficante',
  projectName: 'atraficante.github.io',
  deploymentBranch: 'Main',
  trailingSlash: false,  // Set the /<baseUrl>/ pathname under which your site is served
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

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
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/styles.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */


    ({

    /*  metadata: [
        { name: 'theme-color', content: '#fff000', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' },
      ],*/

/*      announcementBar: {
        id: 'WIP',
        content:
            'This site is a work in progress. If you see anything wrong, please let me know!</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },*/

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      image: 'img/Tomahawk.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Traficante Aviation Logo',
          src: 'img/Wide Logo.png',
          srcDark: 'img/Wide Logo.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mySidebar',
            position: 'left',
            label: 'Content',
          },
          {
            type: 'search',
            position: 'right',
          },
          //{to: '/about', label: 'About', position: "left"},
          {
            href: 'https://edwardsfss.com/aero-club/',
            label: 'Aero Club',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Start Here',
                to: '/docs/helpful-links',
              },
              {
                label: 'PPL/CPL Lesson Plans',
                to: '/docs/lesson-plans/',
              },
              {
                label: 'IFR Lesson Plans',
                to: '/docs/lesson-plans/instrumentIndex',
              },
              {
                label: 'References',
                to: '/docs/References/referencesIndex',
              },
            ],
          },
          {
            title: 'External Links',
            items: [
              {
                label: 'Edwards Aero Club',
                href: 'https://edwardsfss.com/aero-club/',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'andrew@traficanteaviation.com (not yet live)',
                to: 'mailto:andrew@traficanteaviation.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Traficante Aviation LLC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

};
export default config;
