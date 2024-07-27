import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Info from "../Info/Info"
// import Name from "../Name/Name"
import "./Home.css"
const Home = () => {
  return (
    <div className="home-container">      
      <Navbar />
      {/* <Name /> */}
      <Info />
      <Footer />
    </div>
  )
}

export default Home
