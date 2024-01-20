
import Baner from "./Componets/Baner/Baner"
import Movies from "./Componets/Movies/Movies"
import NavBar from "./Componets/Navbar/NavBar"
import {actionUrl, popularUrl ,comedyUrl,romanceUrl,horrorUrl,documentary} from './Constants/constants';


function App() {
  return (
    <div>
      <NavBar/>
      <Baner/>
      <Movies url={popularUrl} title='Popular on Netlix'/>
      <Movies url={actionUrl} title='Action Movies'/>
      <Movies url={documentary} title='Documentary on netflix'/>
      <Movies url={romanceUrl} title='Romance Movies'/>
      <Movies url={comedyUrl} title='Comedy Movies'/>
      <Movies url={horrorUrl} title='Horror Movies'/>
    </div>
  )
}

export default App