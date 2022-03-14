import { createContext } from 'react'

const ToggleSidebarContext = createContext({
  Toggle: true,
  setToggle: (Toggle) => {},
})

export default ToggleSidebarContext
