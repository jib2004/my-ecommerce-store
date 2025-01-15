import PropTypes from 'prop-types';
import Footer from "./components/users/Footer"
import Navbar from "./components/users/Navbar"


function App({children}) {
 

  return (
    <>
    <Navbar />
      {children}
      <Footer />
    </>
  )
}
App.propTypes ={
  children: PropTypes.node
}


export default App
