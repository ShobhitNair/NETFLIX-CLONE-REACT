import Navbar from "../components/navbar/Navbar"

import Featured from "../components/featured/Featured"
import List from "../components/list/List"
import "./home.scss"
import { originals,action, comedy, drama } from "../urls"

const Home = () => {
  return (
    <div className='home'>
       <Navbar />
       <Featured  />
       <List url={originals} title='Netflix Originals'/>
       <List url={action} title='Action' isSmall />
       <List url={comedy} title='Comedy' isSmall />
       <List url={drama} title='Drama' isSmall />
    </div>
  )
}

export default Home