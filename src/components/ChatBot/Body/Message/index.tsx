import { useChatBot } from '@/context'
import { Step } from '@/data/steps'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// Functional Component
export default function Message({
  id,
  trigger = 0,
  user,
  message,
  options,
}: Step) {
  const { setCurrentStep, setIsUser, currentUser } = useChatBot()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (trigger === 3) {
      return setIsUser(true)
    }
    setIsUser(false)
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      if (trigger !== 3) {
        setCurrentStep(trigger)
      }
    }, 500)
  }, [setCurrentStep, trigger, user])

  function handleOptions(trigger: number) {
    setCurrentStep(trigger)
  }

  // Rendering
  return (
    <div className={`flex gap-2 ${user && 'flex-row-reverse'}`}>
      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-300">
        <Image
          className="h-full w-full object-cover"
          src="/icon/user.svg"
          alt="System"
          width={16}
          height={16}
        />
      </div>
      <div className="max-w-[80%]">
        {loading ? (
          <div className="flex items-center rounded-xl bg-gray-200 px-4 pb-4 pt-2">
            ...
          </div>
        ) : (
          <>
            <div
              className={`w-full rounded-xl bg-gray-200 p-4 ${user ? 'rounded-tr-none' : 'rounded-tl-none'}`}
            >
              <p className="text-sm leading-5 opacity-50">
                {id === 4 && (
                  <>
                    Hi, {currentUser}.
                    <br />
                  </>
                )}
                {message && message}
                {!message && currentUser}
              </p>
            </div>
            {options && (
              <div className="mt-4 flex gap-2">
                {options.map((option, index) => {
                  return (
                    <button
                      onClick={() => handleOptions(option.trigger)}
                      className="rounded-lg bg-gray-200 px-4 py-2 opacity-50"
                      key={index}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
