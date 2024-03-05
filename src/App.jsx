import './App.scss'
import Contact from './assets/components/Contact/Contact';
import FeaturedWorks from './assets/components/FeaturedWorks/FeaturedWorks';
import Me from './assets/components/Me/Me';
import Navbar from './assets/components/Navbar/Navbar';
import Parallax from './assets/components/parallax/Parallax';

function App() {


  return (
    <>

      <section id='Homepage'>
        <Navbar/>
        <Me/>
      </section>
      <section id='Projects'>
        <Parallax/>
      </section>
      <FeaturedWorks/>
      <section id='Contact Me'><Contact/></section>
    </>

  )
}

export default App
