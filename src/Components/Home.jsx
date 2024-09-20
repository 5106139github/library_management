import horsegif from '../assets/images/horsegif.gif'
import '../assets/styles/home.css'

const Home = () => {
  return (
   <div className="homepage">
    <img src={horsegif} alt="" /> 
    <div className="container">
      <p>She read books as one would breathe air, to fill up and live</p>
    </div>
   </div>
  )
}

export default Home
