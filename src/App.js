import React from 'react';
import mercuryImg from './assets/img/1_mercury.jpg'
import planets from './assets/planets.json'
import Planet from './components/planet'

function App() {
  return (
    <div className="px-20 py-16">

      {planets.map(value => console.log(value))}
      {/* {planets.map(value => value.map(value => console.log(value)))} */}

      <Planet img={mercuryImg} />

      <footer className="text-gray-500 text-center">
        &copy;
        &nbsp;
        {new Date().getFullYear()}
        &nbsp;
        <a className="hover:text-white" href="https://hasansefaozalp.com/" target="_blank" rel="noopener noreferrer">Hasan Sefa Ozalp</a>
        &nbsp;
        |
        &nbsp;
        <a className="hover:text-white" href="https://github.com/Nases/planet-weight-calculator" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
      </footer>
    </div>
  );
}

export default App;
