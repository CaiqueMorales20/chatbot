type IChatBotContext = {
  currentUser: string
  setCurrentUser: (value: string) => void
  currentStep: number
  setCurrentStep: (value: number) => void
  isUser: boolean
  setIsUser: (value: boolean) => void
  isChatOpened: boolean
  setChatOpened: (value: boolean) => void
}

export type { IChatBotContext }
