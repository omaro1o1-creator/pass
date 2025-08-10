import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Header() {
  const { t, locale, setLocale } = useI18n()
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <img src="/logos/02_book_check_green.svg" alt="Pass | باس" className="h-10 w-auto" />
        <div className="leading-tight">
          <div className="text-xl font-bold text-white">{t('brand')}</div>
          <div className="text-sm text-emerald-300">{t('brand_ar')}</div>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        <Link href="/" className="nav-link text-gray-200">Home / الرئيسية</Link>
        <Link href="/dashboard/student" className="nav-link text-gray-200">{t('dashboard')}</Link>
        <Link href="/auth" className="btn-primary">{t('signin')}</Link>
        <select
          className="ml-3 bg-white/10 text-white rounded-lg px-2 py-1"
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
          aria-label={t('language')}
        >
          <option value="ar">{t('arabic')}</option>
          <option value="en">{t('english')}</option>
        </select>
      </nav>
    </header>
  )
}
