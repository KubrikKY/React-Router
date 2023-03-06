import { useState } from 'react';
import './App.css';
import Cars from './component/Cars/Cars';
function App() {
  const [cars, setCars] = useState([
    { car: 'Mazda', year: 2015 },
    { car: 'Ford', year: 2009 },
    { car: 'Lada', year: 2002 },
    { car: 'Mersedes', year: 2009 },
  ]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Cars cars={cars} />
      </div>
    </>
  );
}

export default App;
