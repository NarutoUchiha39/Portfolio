import './App.scss'
import FeaturedWorks from './assets/components/FeaturedWorks/FeaturedWorks';
import Me from './assets/components/Me/Me';
import Navbar from './assets/components/Navbar/Navbar';
import Parallax from './assets/components/parallax/Parallax';

function App() {


  return (
    <>

      <section>
        <Navbar/>
        <Me/>
      </section>
      <section id='Projects'>
        <Parallax/>
      </section>
      <FeaturedWorks/>
      <section>Contact</section>
    </>

  )
}

export default App
