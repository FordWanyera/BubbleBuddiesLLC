import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Navbar from './Navbar';

//pages
import Home from './pages/Home'
import About from './pages/About'
import JaneHopkins from './pages/JaneHopkins'
import FDA from './pages/FDA'
import Bavaria from './pages/Bavaria'

//layouts
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element ={<Home />} />
      <Route path = "about" element ={<About />} />
      <Route path = "jane-hopkins" element ={<JaneHopkins />} />
      <Route path = "fda" element ={<FDA />} />
      <Route path = "bavaria" element ={<Bavaria />} />
    </Route>
  )
)

function App(){ 
  const likes = 50;
  //const person = {name: 'yoshi', age: 30}
  //hello world
  const link = "https://www.google.com";

  return (
    <RouterProvider router={router} />
    
    // <div className="App">
    //   <Navbar />
    //   <div className="content">

    //     <Home />
    //     <p>Liked {likes} times</p>

    //     <p>{10}</p>
    //     <p>"Hello, BubbleBuddiesLLC"</p>
    //     <p>{[1, 2, 3, 4, 5]}</p>
    //     <p>{Math.random() * 10}</p>

    //     <a href={link} link>Google Site</a>

    //   </div>
    // </div>

  );
}
export default App;
