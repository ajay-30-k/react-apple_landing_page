


import NavBar from './components/NavBar'
import Hero from'./components/Hero'
import Gsapfrom from './gsapanimtions/Gsapfrom'
import Gsapfromto from './gsapanimtions/Gsapfromto'
import Gsaptimeline from './gsapanimtions/Gsaptimeline'
import Gsapto from './gsapanimtions/Gsapto'
import Hightlights from './components/Hightlights'
import Model from './components/Model'
import Features from './components/Features'
import Chip from './components/Chip'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     <main className='bg-black'>
        <NavBar/>
        <Hero/>
        <Hightlights/>
        <Model/>
        <Features/>
        <Chip/>
        <Footer/>
     </main>
        
    </>
  )
}

export default App
