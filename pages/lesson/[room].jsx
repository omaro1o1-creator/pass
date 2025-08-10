import { useRouter } from 'next/router'
import Header from '@/components/Header'
import { useEffect, useRef } from 'react'
import { useI18n } from '@/lib/i18n'

export default function LessonRoom() {
  const router = useRouter()
  const { room } = router.query
  const { t } = useI18n()
  const iframeRef = useRef(null)

  const dailyUrl = process.env.NEXT_PUBLIC_DAILY_ROOM_URL || 'https://your-subdomain.daily.co/demo'

  return (
    <div className="min-h-screen px-6">
      <Header />
      <div className="mt-6">
        <h1 className="text-2xl font-bold text-white">{t('join_trial_lesson')} — {room}</h1>
        <div className="mt-4 rounded-2xl overflow-hidden border border-white/10" style={{height: '65vh'}}>
          <iframe
            ref={iframeRef}
            src={dailyUrl}
            allow="camera; microphone; fullscreen; speaker; display-capture"
            className="w-full h-full bg-black"
            title="Daily lesson"
          />
        </div>
      </div>
    </div>
  )
}
