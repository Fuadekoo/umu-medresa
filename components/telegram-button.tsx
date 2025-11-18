"use client"

import { Send } from 'lucide-react'
import { useEffect, useState } from "react"

export function TelegramButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a small delay for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const username = "fuad0859"
  const message = encodeURIComponent("I come from the website I want to start education")
  const telegramUrl = `https://t.me/${username}?text=${message}`

  return (
    <a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#229ED9] focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      aria-label="Contact on Telegram"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#229ED9] opacity-20"></span>
      <Send className="relative h-6 w-6 -ml-1 mt-1" />
    </a>
  )
}
