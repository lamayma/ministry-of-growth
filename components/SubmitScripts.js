'use client'
import { useEffect } from 'react'

export default function SubmitScripts() {
  useEffect(() => {
    document.body.classList.add('submit-page')

    const nav = document.querySelector('.nav')

    const handleScroll = () => {
      nav.style.borderBottomColor =
        window.scrollY > 40 ? 'rgba(36,42,39,0.9)' : 'var(--border)'
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const form = document.getElementById('submit-form')
    const handleSubmit = async (e) => {
      e.preventDefault()
      const name     = document.getElementById('sub-name').value.trim()
      const email    = document.getElementById('sub-email').value.trim()
      const region   = document.getElementById('sub-region').value.trim()
      const species  = document.getElementById('sub-species').value.trim()
      const cond         = document.getElementById('sub-condition').value
      const locDesc      = document.getElementById('sub-location-desc').value.trim()
      const workerStatus = document.getElementById('sub-worker-status').value
      const emailOk      = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      const photoUrl     = document.getElementById('sub-photo-url').value.trim()
      const photoUrlOk   = !photoUrl || /^https?:\/\/.+/.test(photoUrl)

      if (!name || !email || !region || !species || !cond || !locDesc || !workerStatus || !emailOk || !photoUrlOk) {
        if (!workerStatus) {
          const el = document.getElementById('sub-worker-status')
          el.setCustomValidity('Укажите статус работника')
          el.reportValidity()
          el.setCustomValidity('')
        } else if (!emailOk) {
          const el = document.getElementById('sub-email')
          el.setCustomValidity('Введите корректный email (нужен символ @)')
          el.reportValidity()
          el.setCustomValidity('')
        } else if (!photoUrlOk) {
          const el = document.getElementById('sub-photo-url')
          el.setCustomValidity('Ссылка должна начинаться с http:// или https://')
          el.reportValidity()
          el.setCustomValidity('')
        } else {
          e.target.style.animation = 'none'
          requestAnimationFrame(() => { e.target.style.animation = 'shake 0.4s ease' })
        }
        return
      }

      await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          region,
          species,
          condition:      cond,
          location_desc:  locDesc,
          worker_status:  workerStatus,
          age:            document.getElementById('sub-age').value.trim() || null,
          category:       document.querySelector('input[name="category"]:checked')?.value || null,
          photo_url:      photoUrl || null,
          description:    document.getElementById('sub-description').value.trim() || null,
          codename:       document.getElementById('sub-codename').value.trim() || null,
          priority:       document.getElementById('sub-priority').value || null,
          observer_class: null,
        }),
      })

      e.target.classList.add('hidden')
      document.getElementById('submit-success').classList.remove('hidden')
      document.getElementById('submit-ref').textContent =
        Math.floor(100000 + Math.random() * 900000)
    }
    form.addEventListener('submit', handleSubmit)

    return () => {
      document.body.classList.remove('submit-page')
      window.removeEventListener('scroll', handleScroll)
      form.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return null
}
