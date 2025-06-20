import './App.css'
import Nav1 from './Header/nav1'
import Nav2 from './Header/Nav2'
import Heroleft from './Hero/Heroleft'
import HerorRight from './Hero/Heroright'


function App() {

  return (
 <div>
   <section className='navbar'>
 <Nav1></Nav1>
  <Nav2></Nav2>
    </section>

    <section className='hero'>
      <Heroleft></Heroleft>
      <HerorRight></HerorRight>
    </section>

  </div>
 
  )


 
}

export default App
