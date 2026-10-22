// Code volume measured from the GitHub API (`/repos/:owner/:repo/languages`)
// summed across Jan's own repositories.
//
// Two groups, because they mean different things. `authored` is code Jan wrote.
// `generated` is what the Flutter toolchain emits for the platform targets an
// app is built for — real files in the repository, but not his hand. Keeping
// them apart is the honest way to present C and C++, and it is the reason a
// percentage-based skill chart would misrepresent this.

export const authored = [
  {
    language: 'JavaScript',
    bytes: 249377,
    detail: 'Scribe, NSA_REACT, Spletna trgovina',
  },
  {
    language: 'CSS',
    bytes: 32031,
    detail: 'NSA_REACT, Scribe, Spletna trgovina',
  },
  {
    language: 'C#',
    bytes: 24826,
    detail: 'MovieDB, Easistent',
  },
  {
    language: 'PHP',
    bytes: 16737,
    detail: 'Odkup rabljenih vozil',
  },
  {
    language: 'Dart',
    bytes: 12288,
    detail: 'Music_APP, First_app',
  },
  {
    language: 'HTML',
    bytes: 6463,
    detail: 'Across every project',
  },
]

export const generated = [
  { language: 'C++', bytes: 47874, detail: 'Flutter runner and plugin registrants' },
  { language: 'CMake', bytes: 39156, detail: 'Flutter build files' },
  { language: 'Swift', bytes: 3846, detail: 'iOS target scaffold' },
  { language: 'C', bytes: 2850, detail: 'Flutter C runner' },
  { language: 'Kotlin', bytes: 248, detail: 'Android target scaffold' },
  { language: 'Objective-C', bytes: 76, detail: 'iOS target scaffold' },
]

export const generatedNote =
  'Flutter generates these from the platform targets an app is built for. They are real files in the repository and I read them when a build breaks, but I did not write them — so they sit on the other side of the line.'

export const tooling = [
  { category: 'Front end', items: ['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'TypeScript'] },
  { category: 'Back end', items: ['Node.js', 'Express', 'PHP', 'REST', 'JSON', 'bcrypt'] },
  {
    category: 'Data',
    items: ['Firebase', 'Firestore', 'MongoDB', 'PostgreSQL', 'Redis', 'Cassandra', 'SQL', 'LDAP DS'],
  },
  { category: 'Desktop & mobile', items: ['.NET / WPF', 'Flutter', 'Dart', 'XAML'] },
  { category: '3D', items: ['Blender'] },
  { category: 'Tooling', items: ['Git', 'Linux', 'VS Code', 'Figma'] },
]

export function formatBytes(bytes) {
  if (bytes < 1000) return `${bytes} B`
  return `${(bytes / 1000).toFixed(1)} kB`
}

/**
 * Bar width as a percentage of the largest value in the set. A minimum of
 * 1.5% keeps a tiny row visible rather than rounding it away entirely.
 */
export function barWidth(bytes, rows) {
  const max = Math.max(...rows.map((row) => row.bytes))
  if (!Number.isFinite(max) || max <= 0) return 0
  return Math.max((bytes / max) * 100, 1.5)
}
