interface option {
  label: string
  trigger: number
}

export interface Step {
  id: number
  message?: string
  trigger?: number
  user?: boolean
  end?: boolean
  options?: option[]
}

const steps: Step[] = [
  {
    id: 1,
    message: 'Hello, do you need any help?',
    options: [
      { label: 'Yes', trigger: 2 },
      { label: 'No', trigger: 0 },
    ],
  },
  {
    id: 2,
    message: "First of all, what's your name?",
    trigger: 3,
  },
  {
    id: 3,
    user: true,
    trigger: 4,
  },
  {
    id: 4,
    message: `Now, with what do you wanna help:`,
    options: [
      { label: 'Next', trigger: 5 },
      { label: 'Tailwind', trigger: 6 },
      { label: 'Context', trigger: 7 },
    ],
  },
  {
    id: 5,
    message: `Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.`,
    end: true,
  },
  {
    id: 6,
    message: `Tailwind CSS is the only framework that I've seen scale on large teams. Its easy to customize, adapts to any design, and the build size is tiny.`,
    end: true,
  },
  {
    id: 7,
    message: `useContext returns the context value for the calling component. It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree. If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context.e`,
    end: true,
  },
]

export { steps }
