
import horsegif from '../assets/images/horsegif.gif'
import '../assets/styles/home.css'


const Home = () => {
  // let [user, setUser] = useState();
  // useEffect(() => {
  //   let fetchapi = async () =>{
  //   await axios.get('http://localhost:4000/users').then((res) => setUser(res.data));
  //   }
  //   fetchapi()
  // }, [user]);
  
  return (
   <div className="homepage">
    {/* {user && user.map((ele) => {
      let {fnm , lnm } = ele
       return(
        <>
        <div className="msg"><h1><span>Welcome &nbsp;</span>{fnm}{lnm}Have a Fun .... !!!</h1></div></>
       )
    })} */}
    <div className="msg"><h1><span>Welcome &nbsp;</span>Have a Fun .... !!!</h1></div>
    <img className='horse' src={horsegif} alt="" /> <img className='horse1' src={horsegif} alt="" /> <img className='horse2' src={horsegif} alt="" /> 
    <div className="container">
      <p>She read books as one would breathe air, to fill up and live</p>
    </div>
   </div>
  )
}

export default Home
