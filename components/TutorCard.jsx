import Link from 'next/link'

export default function TutorCard({ id, name, subject, rating }) {
  const safeId = typeof id === 'number' ? String(id) : id

  return (
    <div className="card">
      <div className="font-semibold text-white">{name}</div>
      <div className="text-sm text-emerald-200">{subject}</div>
      <div className="mt-2 text-emerald-100">Rating: {rating}</div>
      <Link
        href={`/tutors/${encodeURIComponent(safeId)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-emerald-300 underline"
      >
        View profile / عرض الملف
      </Link>
    </div>
  )
}
