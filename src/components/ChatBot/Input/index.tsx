import { useChatBot } from '@/context'
import React, { useState } from 'react'

// Functional Component
export default function Input() {
  const { setCurrentStep, currentStep, setCurrentUser, isUser } = useChatBot()
  const [message, setMessage] = useState('')

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setCurrentStep(currentStep + 1)
      setCurrentUser(message)
      setMessage('')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.currentTarget.value)
  }

  // Rendering
  return (
    <input
      disabled={!isUser}
      type="text"
      value={message}
      className="w-full bg-gray-200 p-4 text-sm text-opacity-50 outline-none"
      placeholder="Write your message..."
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />
  )
}
