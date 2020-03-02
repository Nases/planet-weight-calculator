import React from 'react';
import planets from './assets/planets.json'
import Planet from './components/planet'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className="grid grid-cols-4">
        {planets.map(value => (<Planet name={value.name} desc={value.description} img={process.env.PUBLIC_URL + value.img} />))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
