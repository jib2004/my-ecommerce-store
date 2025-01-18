import Navbar from "./components/Navbar"
import Topbanner from "./components/Topbanner"
import { appProps } from "./types"

function App({children}:appProps) {
  return (
    <>
    <Topbanner/>
    <Navbar />
      {children}
    </>
  )
}

export default App
