export const privacy = {
  title: 'Privacy',
  updated: '21 October 2026',
  intro:
    'This site collects nothing. There are no analytics, no cookies, no advertising pixels, and no third-party embeds — the whole site is a static bundle served as plain files.',
  sections: [
    {
      heading: 'What this site collects',
      body: [
        'Nothing. There is no form on this site, no account to create, and no identifier of any kind. The pages are static files; your visit does not produce a record in any database I control.',
        'The fonts are served from this domain rather than a font CDN, so your browser does not contact any third party at all while reading this site. No visitor IP address is handed to a font provider, an analytics vendor, or a social network.',
      ],
    },
    {
      heading: 'What the hosting providers record',
      body: [
        'This site is hosted as static files. Both hosts keep ordinary server logs — the requested path, the user agent, and the IP address the request came from — for operational and security purposes. Those logs are governed by the hosting providers own privacy policies, and I do not have access to them.',
        'I cannot see who visits this site, how often, or from where.',
      ],
    },
    {
      heading: 'Links to other sites',
      body: [
        'This page links to GitHub, to a hosted project of mine, and to my CV. Those are other domains with their own privacy policies and their own data practices. Nothing is shared with them by visiting this site — the link is an ordinary link, not a tracker.',
      ],
    },
    {
      heading: 'The CV',
      body: [
        'The downloadable CV is a static PDF held on this domain. Downloading it does not send any information to me.',
      ],
    },
  ],
}

export const imprint = {
  title: 'Imprint',
  updated: '21 October 2026',
  intro:
    'This site is a personal, non-commercial portfolio maintained by one person. These are the details required by the rules on providing information society services in Slovenia.',
  sections: [
    {
      heading: 'Site operator',
      body: [
        'Jan Vidovič',
        'Maribor, Slovenia',
      ],
    },
    {
      heading: 'Contact',
      body: ['Email: jan.vidovic06@gmail.com', 'Telephone: +386 41 812 148'],
    },
    {
      heading: 'Responsibility for the content',
      body: [
        'I am responsible for the content of this site as the person responsible for it within the meaning of the applicable rules.',
      ],
    },
    {
      heading: 'Dispute resolution',
      body: [
        'The European Commission provides a platform for online dispute resolution at ec.europa.eu/consumers/odr. I am neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.',
      ],
    },
    {
      heading: 'Copyright',
      body: [
        'The text, code and design of this site belong to Jan Vidovič. The projects described are my own work. The source for some of them is not published, and no part of it is reproduced here without permission.',
        'Reuse of the code and design of this site, in whole or in part, requires written permission.',
      ],
    },
  ],
}

export const accessibility = {
  title: 'Accessibility',
  updated: '21 October 2026',
  intro:
    'This site aims to meet WCAG 2.1 level AA. That target is enforced in the design tokens rather than checked afterwards: every foreground and background pairing was tested for contrast before the first component was written.',
  sections: [
    {
      heading: 'What has been done',
      body: [
        'Contrast meets AA on every text and background pairing, and the highest tiers exceed AAA. The values are fixed in one token file, so a change to the palette cannot silently break them.',
        'Everything is reachable and operable by keyboard, with a single visible focus indicator on every interactive element. Skip order follows the visual order.',
        'Motion is opt-out. With prefers-reduced-motion enabled, the scroll reveals appear instantly instead of fading in, the calibration chart shows its real values without counting up, the monogram plate stops drifting, and a page change cuts rather than cross-fades. Nothing on the site moves without that preference being turned off.',
        'The layout reflows to 320 pixels wide without horizontal scrolling, and text scales with browser zoom up to 200 per cent.',
        'The page is built from real headings, landmarks, lists and definition lists, so it is navigable by screen reader and by reader mode.',
        'The dark and light themes are both checked for contrast, and the light theme is a token swap of the same values rather than a second design.',
      ],
    },
    {
      heading: 'How this statement was produced',
      body: [
        'I wrote it. This site has not been formally audited by an accessibility specialist, and I am not claiming a certification. The claims above are the ones I have actually tested.',
      ],
    },
    {
      heading: 'If you hit a barrier',
      body: [
        'Email me at jan.vidovic06@gmail.com and describe what you ran into. I will fix it, and I will update this page to say so.',
      ],
    },
  ],
}
