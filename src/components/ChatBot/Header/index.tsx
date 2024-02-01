import { useChatBot } from '@/context'
import Image from 'next/image'

// Functional Component
export default function Header() {
  const { setChatOpened } = useChatBot()

  // Rendering
  return (
    <header className="flex justify-between bg-blue-400 p-4 text-white">
      <h1>Header</h1>
      <Image
        onClick={() => setChatOpened(false)}
        src="/icon/close.svg"
        alt="Close chat"
        width={800}
        height={800}
        className="h-auto w-[1.25rem] cursor-pointer"
      />
    </header>
  )
}
