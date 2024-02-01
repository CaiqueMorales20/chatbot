'use client'

import { useEffect, useState } from 'react'
import Message from './Message'
import { Step, steps } from '@/data/steps'
import { useChatBot } from '@/context'

// Functional Component
export default function Body() {
  const [messagesToBeShown, setMessagesToBeShown] = useState<Step[] | []>([
    steps[0],
  ])
  const { currentStep } = useChatBot()

  useEffect(() => {
    if (currentStep === 1) return
    const localMessages = steps.filter((step) => step.id === currentStep)
    setMessagesToBeShown((prev: Step[]) => [...prev, ...localMessages])
  }, [currentStep])

  // Rendering
  return (
    <div className="flex flex-1 flex-col gap-5 overflow-y-auto bg-white p-4 pb-10">
      {messagesToBeShown.map((step: Step, index: number) => {
        return <Message key={index} {...step} />
      })}
    </div>
  )
}
