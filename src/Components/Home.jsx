import horsegif from '../assets/images/horsegif.gif'
import '../assets/styles/home.css'

const Home = () => {
  return (
   <div className="homepage">
    <img className='horse' src={horsegif} alt="" /> <img className='horse1' src={horsegif} alt="" /> <img className='horse2' src={horsegif} alt="" /> 
    <div className="container">
      <p>She read books as one would breathe air, to fill up and live</p>
    </div>
   </div>
  )
}

export default Home
