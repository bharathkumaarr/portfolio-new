import './App.css'
import './components/uni.css'
import LatestWorks  from './components/LatestWorks'
import Socials from './components/Socials'
import Education from './components/Education'


function App() {

  return (
    <>
    <main className='main'>
      <h1 className='name'>hey, it's Bharath Kumar </h1>
      <h5 className='first-line'>that 21 year old generalist guy. Engineer.</h5>
      <h2 className='title'>about</h2>
      <h5>i write software.</h5>
      <h5> <span className='curiosity'> fueled by Curiosity.</span></h5>
      <h5>physics, math, CS, space, and design—I’m hooked.</h5>
      <h5> code or cosmos, hit me up w a <span> </span>
        <a href="https://cal.com/bharath-kumar-reddy/30min" target='_blank'> quick video chat</a>
      </h5> 
      <h2 className='title'>latest works</h2>
      <LatestWorks />
      <h2 className='title'>places i worked at</h2>
      <h2 className='title'>education</h2>
      <Education />
      <h2 className='title'>skills</h2>
      <h2 className='title'>socials</h2>
      <Socials />

      
    </main>

    </>
  )
}

export default App
