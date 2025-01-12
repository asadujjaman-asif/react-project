import { useState,React } from 'react'
import './App.css'
import Header from './components/header.js'
import Sidebar from './components/sidebar.js'
import Dashboard from './components/dashboard.js'
import SidebarContext from '../contexts/sidebar-context'
import ThemeContext from '../contexts/theme-context'
import MenuContext from '../contexts/menu-context'
function App() {
  const [count, setCount] = useState(0)
  const [isCollapsed,setIsCollapsed]= useState(false);

  const [theme,setTheme] = useState<"light" | "dark">('light');
  const toggleTheme=()=>{
    setTheme((prevTheme)=>prevTheme=='light'?'dark':'light');
  }
  //this code for menu context
  const [menuName,setMenuName]= useState('Dashboard');
  return (
    <ThemeContext.Provider value = {{theme,toggleTheme}}>
      <SidebarContext.Provider value={{isCollapsed,setIsCollapsed}}>
        <div className='w-full flex bg-gray-100 font-sans text-gray-800'>
        <MenuContext.Provider value={{menuName,setMenuName}}>
            <Sidebar/>
            <div className={`flex-1 ${theme=="light"?" bg-gray-100  text-slate-800":" bg-gray-800 text-slate-100"} ms-0`}>
              <Header />
                <main className='p-8 h-[calc(100vh-4rem)] '>
                  <Dashboard />
                </main>
            </div>
            </MenuContext.Provider>
        </div>
      </SidebarContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
