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

function App() {
  const title = 'Welcome to BubbleBuddiesLLC';

  const likes = 50;
   // Trang was here
  //const person = {name: 'yoshi', age: 30}
  //hello world 
  const link = "https://www.google.com";
  return (
    <RouterProvider router={router} />
  );
}

export default App;
