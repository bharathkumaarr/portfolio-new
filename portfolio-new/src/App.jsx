import './App.css'

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
      <h5> code or cosmo, hit me up w a <span> </span>
        <a href="https://cal.com/bharath-kumar-reddy/30min" target='_blank'> quick video chat</a>
      </h5> 
      <h2 className='title'>latest works</h2>
      <div className='latest-works'>
        <div className='works-line'>
          <div className='latest-work-cards'></div>
          <div className='latest-work-cards'></div>
        </div>
        <div className='works-line'>
          <div className='latest-work-cards'></div>
          <div className='latest-work-more-card'>More Work</div>
        </div>

      </div>
      <h2 className='title'>places i worked at</h2>
      <h2 className='title'>education</h2>
      <div className='uni'>
        <div className='uni-icon'> <img src="../Public/dsce-icon-monochrome.svg" alt="" /></div>
        <div className='uni-mid'>
        <div className="uni-name">DSCE, Bangalore</div>
        <div className="uni-major">electronics and telecommunication</div>
        </div>
        <div className="uni-year">2021-2025</div>

      </div>
      <h2 className='title'>skills</h2>
      <h2 className='title'>socials</h2>

      
    </main>

    </>
  )
}

export default App
