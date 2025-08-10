import { useRouter } from 'next/router'

export default function TutorProfile() {
  const router = useRouter()
  const { id } = router.query

  if (!id) return <div className="min-h-screen p-6 text-white">جارٍ التحميل...</div>

  return (
    <div className="min-h-screen p-6 text-white">
      <h1 className="text-2xl font-bold">ملف المدرس #{id}</h1>
      <p className="text-emerald-200">وصف قصير، خبرات، وسعر للدرس التجريبي.</p>
      <button className="btn-primary mt-4">احجز تجربة</button>
    </div>
  )
}
