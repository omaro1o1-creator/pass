import Header from '@/components/Header'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen px-6">
      <Header />
      <h1 className="text-2xl font-bold text-white mt-6">لوحة الطالب</h1>
      <div className="card mt-4 text-emerald-100">حجوزاتك القادمة ستظهر هنا.</div>
    </div>
  )
}
