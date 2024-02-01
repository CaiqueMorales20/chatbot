'use client'

import { useChatBot } from '@/context'
import Body from './Body'
import Header from './Header'
import Input from './Input'
import Image from 'next/image'

// Functional Component
export default function ChatBot() {
  const { isChatOpened, setChatOpened } = useChatBot()

  // Rendering
  return (
    <div className="flex flex-col">
      <div
        onClick={() => setChatOpened(!isChatOpened)}
        className={`grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white ${isChatOpened && 'hidden'}`}
      >
        <Image
          className="h-auto w-[60%]"
          src="/icon/chat.svg"
          width={800}
          height={800}
          alt="Open Chat"
        />
      </div>
      <div
        className={`chat-transition grid ${isChatOpened ? 'grid-cols-[1fr] grid-rows-[1fr]' : 'grid-cols-[0fr] grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="flex h-[40rem] w-[30rem] flex-col justify-between overflow-hidden rounded-lg shadow-md">
            <Header />
            <Body />
            <Input />
          </div>
        </div>
      </div>
    </div>
  )
}
