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
    const handleSubmit = (e) => {
      e.preventDefault()
      const name    = document.getElementById('sub-name').value.trim()
      const email   = document.getElementById('sub-email').value.trim()
      const region  = document.getElementById('sub-region').value.trim()
      const species = document.getElementById('sub-species').value.trim()
      const cond    = document.getElementById('sub-condition').value
      const locDesc = document.getElementById('sub-location-desc').value.trim()
      if (!name || !email || !region || !species || !cond || !locDesc) {
        e.target.style.animation = 'none'
        requestAnimationFrame(() => { e.target.style.animation = 'shake 0.4s ease' })
        return
      }
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
