import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import ar from '@/locales/ar/common.json'
import en from '@/locales/en/common.json'

const dicts = { ar, en }
const dirByLocale = { ar: 'rtl', en: 'ltr' }

const I18nContext = createContext({ t: k => k, locale: 'ar', setLocale: () => {} })

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('ar')
  const t = useMemo(() => (key) => dicts[locale]?.[key] ?? key, [locale])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
      document.documentElement.dir = dirByLocale[locale] || 'rtl'
    }
  }, [locale])

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
