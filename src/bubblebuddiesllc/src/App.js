
import Navbar from './Navbar';
import Home from './Home'

function App(){ 
  const likes = 50;
  //const person = {name: 'yoshi', age: 30}
  //hello world
  const link = "https://www.google.com";

  return (

    <div className="App">
      <Navbar />
      <div className="content">

        <Home />
        <p>Liked { likes } times</p>

        <p>{ 10 }</p>
        <p>"Hello, BubbleBuddiesLLC"</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}link>Google Site</a>

      </div>
    </div>

  );
}
export default App;
