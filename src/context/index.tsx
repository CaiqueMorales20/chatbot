'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { IChatBotContext } from './types'

export const ChatBotContext = createContext<null | IChatBotContext>(null)

// Functional Component
export default function ChatBotContextProvider({
  children,
}: {
  children: ReactNode
}) {
  // Variables
  const [currentUser, setCurrentUser] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [isUser, setIsUser] = useState(false)
  const [isChatOpened, setChatOpened] = useState(false)

  // Rendering
  return (
    <ChatBotContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentStep,
        setCurrentStep,
        isUser,
        setIsUser,
        isChatOpened,
        setChatOpened,
      }}
    >
      {children}
    </ChatBotContext.Provider>
  )
}

export const useChatBot = (): IChatBotContext =>
  useContext(ChatBotContext) as IChatBotContext
