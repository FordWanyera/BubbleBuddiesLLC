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
  return (
    <RouterProvider router={router} />
  );
}

export default App;
