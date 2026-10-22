// Everything on this page that is a fact about Jan, kept out of the components
// so the copy can be edited in one place.

export const profile = {
  name: 'Jan Vidovič',
  initials: 'JV',
  role: 'Student developer',
  location: 'Maribor, Slovenia',
  email: 'jan.vidovic06@gmail.com',
  phone: '+386 41 812 148',
  phoneHref: '+38641812148',
  github: 'https://github.com/NoctsWRLD',
  githubHandle: 'NoctsWRLD',
  cv: '/Jan-Vidovic-CV.pdf',

  // The canonical origin of the deployed site. Used for canonical URLs, the
  // sitemap, and the structured data, so every absolute reference agrees.
  siteUrl: 'https://noctswrld.github.io',

  lead:
    'I build products end to end, and the parts I enjoy most are the ones that make them real — the database, the auth, the deploy.',

  intro:
    'I am a student developer in Maribor, Slovenia, studying computer technician at Prometna šola Maribor. What I build ships: a Firebase-backed study planner, a React store with an Express and MongoDB API, a C# desktop movie catalogue, and a PHP site for buying used cars. I move between stacks because I would rather finish a product than stay inside one framework.',

  plate: [
    { label: 'Based', value: 'Maribor, Slovenia' },
    { label: 'Studying', value: 'Computer technician, Prometna šola Maribor' },
    { label: 'Focus', value: 'Full-stack web applications' },
    { label: 'Speaks', value: 'Slovenian, English (B2), Croatian (B2)' },
  ],

  about: [
    'I am twenty, based in Maribor, and I spend my evenings writing code while I study. Most of it gets written late and quickly, which taught me to decide what to cut early and what is actually load-bearing.',
    'What I reach for is unglamorous and specific: a schema that holds up, a login that actually hashes, a build that passes before I push it.',
  ],

  likes: [
    {
      title: 'Front-ends that carry a real product',
      body: 'Scribe is not a landing page. It has Firebase Auth, Firestore listeners that stay live across devices, a timetable imported from a photo with OCR, and a chat between classmates. The interface is the easy half — making it survive real data is the work.',
    },
    {
      title: 'The server side of it',
      body: 'The store behind NSA runs an Express API against MongoDB with bcrypt-hashed passwords, a users collection and product endpoints. The used-car site is plain PHP over SQL with register, login, logout and ratings. I like the boring reliability of that layer.',
    },
    {
      title: 'Things that leave the browser',
      body: 'Two Flutter apps in Dart for phones, two WPF applications in C# for the desktop — the movie catalogue with its add and edit windows is the one I would show first — and some 3D work in Blender.',
    },
  ],

  likesClosing:
    'I switch stacks often. Part of that is how I learn, and part of it is that I would rather see a project through than only ever work inside one framework.',

  experience: [
    {
      org: 'TRISO D.O.O.',
      place: 'Ptuj, Slovenia',
      period: '2023 – 2024',
      role: 'Production work making rulers',
    },
    {
      org: 'KOPIJANOVA D.O.O.',
      place: 'Maribor, Slovenia',
      period: '2021',
      role: 'Hand-packing school material',
    },
  ],

  experienceClosing:
    'Neither of these is a software role. They paid for the laptop; the evenings paid for everything above.',

  education: [
    {
      org: 'Prometna šola Maribor, Višja šola L.I.V.E.',
      place: 'Maribor, Slovenia',
      period: 'Oct 2025 – Present',
      role: 'Computer technician — a vocational programme in computer science, EQF level 5.',
    },
  ],

  contactLead:
    'I am studying and building, so I answer messages in the evenings. If you have a role, a project, or a question about something I have built, I would like to hear about it.',

  contactDetails: [
    { label: 'Email', value: 'jan.vidovic06@gmail.com', href: 'mailto:jan.vidovic06@gmail.com' },
    { label: 'Phone', value: '+386 41 812 148', href: 'tel:+38641812148' },
    { label: 'GitHub', value: 'github.com/NoctsWRLD', href: 'https://github.com/NoctsWRLD' },
    { label: 'Based in', value: 'Maribor, Slovenia' },
  ],
}

export const nav = [
  { id: 'profile', label: 'Profile' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'path', label: 'Path' },
  { id: 'contact', label: 'Contact' },
]
