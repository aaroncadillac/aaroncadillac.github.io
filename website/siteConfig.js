/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const companies = [
  {
    caption: 'BBVA',
    image: '/img/Logo_BBVA.svg',
    infoLink: 'https://www.bbva.mx',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Aarón Gabriel Hinojosa Maya',
  tagline: 'My resume',
  url: 'https://aaronhm.com',
  baseUrl: '/',

  // Used for publishing and more
  projectName: 'aaroncadillac.github.io',
  organizationName: 'aaroncadillac',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'whoami', label: 'Getting Started'},
		{doc: 'contact-me', label: 'API'},
		{blog: true, label: 'Blog'}
  ],

  // If you have users set above, you add it here:
  companies,

  /* path to images for header/footer */
  headerIcon: 'img/firma.svg',
  footerIcon: 'img/firma.svg',
  favicon: 'img/favicon.svg',

  /* Colors for website */
  colors: {
    primaryColor: '#3F51B5',
    secondaryColor: '#8C9EFF',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} aaroncadillac`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

	repoUrl: 'https://github.com/aaroncadillac/aaroncadillac.github.io',
	twitterUsername: 'aaron_cadillac'
};

module.exports = siteConfig;
