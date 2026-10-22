// The four projects featured on the site, plus the two public links that exist.
//
// `source: 'public'` means the repository is on GitHub and the link works.
// `source: 'private'` means the code is not published — the description stands
// on its own and the site says so plainly rather than implying a broken link.

export const projects = [
  {
    id: 'scribe',
    name: 'Scribe',
    year: '2025 – present',
    kind: 'Web application',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Firebase'],
    body: 'A study planner for school and university students: subjects, tasks, a timetable you can import from a photo, a real-time chat with classmates, flashcards, and friends you find by a six-character code instead of by a name. Firebase Auth for accounts and Firestore listeners so data stays live across devices. The interface and the copy are in Slovenian.',
    image: {
      webp: 'smartstudy.webp',
      jpeg: 'smartstudy.jpg',
      width: 1120,
      height: 700,
      alt: 'The Scribe login screen: the wordmark and a study rail on the left, the sign-in form on the right.',
      caption: 'The sign-in screen at scribeslo.vercel.app',
    },
    links: [
      { label: 'Live site', href: 'https://scribeslo.vercel.app/' },
      { label: 'Source', href: 'https://github.com/NoctsWRLD/Scribe' },
    ],
    source: 'public',
  },
  {
    id: 'nsa-react',
    name: 'NSA_REACT',
    year: '2024',
    kind: 'Full-stack store',
    stack: ['React', 'Express', 'MongoDB', 'bcrypt'],
    body: 'A full-stack store: a React client over an Express API backed by MongoDB, with registration and login using bcrypt-hashed passwords, and product endpoints for listing and creating items. CORS, dotenv for configuration, and a users collection alongside products.',
    links: [],
    source: 'private',
  },
  {
    id: 'moviedb',
    name: 'MovieDB',
    year: '2024',
    kind: 'Desktop application',
    stack: ['C#', '.NET', 'WPF', 'XAML'],
    body: 'A desktop movie catalogue in C# with WPF. A Movie model, separate windows for adding and editing entries, and a settings screen. A desktop app is a different discipline from the web — XAML layouts, data binding and event-driven code.',
    links: [],
    source: 'private',
  },
  {
    id: 'used-cars',
    name: 'Odkup rabljenih vozil',
    year: '2023',
    kind: 'Marketplace',
    stack: ['PHP', 'SQL'],
    body: 'A used-car marketplace, in Slovenian. PHP over SQL with a shared database handler and a functions file, and separate include files for registration, login and logout. Listings carry reviews and ratings, with a small front end of its own.',
    links: [],
    source: 'private',
  },
]
