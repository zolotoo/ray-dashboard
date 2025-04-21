import { useState, Children, isValidElement } from 'react'

export function Tabs({ children, defaultValue }) {
  const [active, setActive] = useState(defaultValue)

  return (
    <div>
      {Children.map(children, child => {
        if (!isValidElement(child)) return null
        if (child.type?.name === 'TabsList') {
          return <child.type {...child.props} setActive={setActive} active={active} />
        } else if (child.props?.value === active) {
          return child
        } else {
          return null
        }
      })}
    </div>
  )
}

export function TabsList({ children, setActive, active, className }) {
  return (
    <div className={className}>
      {Children.map(children, child => {
        if (!isValidElement(child)) return null
        return (
          <child.type
            {...child.props}
            isActive={child.props.value === active}
            onClick={() => setActive(child.props.value)}
          />
        )
      })}
    </div>
  )
}

export function TabsTrigger({ value, children, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 font-medium border-b-2 transition-colors duration-200 ${
        isActive ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
      }`}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value }) {
  return <>{children}</>
}
