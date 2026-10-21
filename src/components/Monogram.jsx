import { profile } from '../data/profile'

/**
 * A typographic monogram plate with print crop-marks. It stands in for a
 * photograph, which this site does not have, and it does the job better than
 * a stock avatar would: it is specific to this person and it is honest about
 * being a plate rather than a face.
 */
export function Monogram() {
  return (
    <div className="relative border border-line bg-panel p-7">
      <span
        aria-hidden="true"
        className="absolute -left-1 -top-1 h-4 w-4 border-l border-t border-brass"
      />
      <span
        aria-hidden="true"
        className="absolute -right-1 -top-1 h-4 w-4 border-r border-t border-brass"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-1 -left-1 h-4 w-4 border-b border-l border-brass"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-1 -right-1 h-4 w-4 border-b border-r border-brass"
      />

      <div className="font-display text-6xl leading-none text-brass">
        {profile.initials}
      </div>

      <dl className="mt-7 space-y-3 border-t border-line pt-6">
        {profile.plate.map((row) => (
          <div key={row.label} className="grid grid-cols-[4.25rem_minmax(0,1fr)] gap-3">
            <dt className="mono pt-0.5 text-xs text-dim">{row.label}</dt>
            <dd className="text-sm text-ash">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
