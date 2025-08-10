import Header from '@/components/Header'
import TutorCard from '@/components/TutorCard'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Home() {
  const { t } = useI18n()
  return (
    <div className="min-h-screen px-6">
      <Header />
      <main className="mt-8 space-y-6">
        <section>
          <h1 className="text-3xl font-bold text-white">{t('home_title')}</h1>
          <p className="text-emerald-200">{t('home_sub')}</p>
          <Link href="/lesson/demo" className="btn-primary inline-block mt-4">
            {t('join_trial_lesson')}
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TutorCard id={1} name="أ. أحمد" subject="الرياضيات" rating={4.9} />
          <TutorCard id={2} name="Ms. Anna" subject="English" rating={4.8} />
          <TutorCard id={3} name="أ. ليلى" subject="لغة عربية" rating={4.7} />
        </section>
      </main>
      <footer className="mt-10 py-10 text-center text-emerald-300/80">
        © {new Date().getFullYear()} Pass | باس
      </footer>
    </div>
  )
}
