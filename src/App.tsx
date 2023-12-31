import { useEffect, useState } from "react"
import NavBar from "./scenes/navbar"
import { SelectedPage } from "./scenes/navbar/shared/types"
import Home from "./scenes/Home"
import Benefits from "./scenes/Benefits"



function App() {
  const [selectedPage, setSelectedPage]= useState <SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] =useState<boolean>(true)

  useEffect (()=>{
    const handleScroll = ()=>{
        if(window.scrollY === 0){
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home)
        }

        if(window.scrollY !==0)setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  
  return (
    <div className="app bg-gray-20">
      <NavBar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      
    </div>
  )
}

export default App
