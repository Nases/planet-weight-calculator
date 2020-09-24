import React, { useState } from 'react'
import planets from './assets/planets.json'
import Planet from './components/Planet'
import Footer from './components/Footer'

function App() {

  const [weightInput, setWeightInput] = useState(150)
  const [isWeightConverted, setIsWeightConverted] = useState(false)

  const weightChange = e => {
    const re = /^[1-9]\d{0,2}(?:\,\d{1,3})?$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setWeightInput(e.target.value)
    }
  }

  const convertWeight = weight => {
    if (isWeightConverted) {
      setWeightInput(prevState => Math.round(prevState * 2.205))
      setIsWeightConverted(prevState => !prevState)
    } else {
      setWeightInput(prevState => Math.round(prevState / 2.205))
      setIsWeightConverted(prevState => !prevState)
    }
  }

  return (
    <div>
      <div className="text-center p-8">
        <p className="text-gray-300 inline text-3xl">Enter your weight: </p>
        <input className="w-16 text-3xl bg-transparent text-blue-300" type="text" onChange={weightChange} value={weightInput} />
        &nbsp;
        <p onClick={convertWeight}
          className="text-gray-300 inline text-3xl cursor-pointer">
          {isWeightConverted ? 'kg' : 'lb'}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {planets.map(value => (
          <Planet
            name={value.name}
            desc={value.description}
            img={process.env.PUBLIC_URL + value.img}
            NASALink={value.NASALink}
            surfaceGravityMultiplier={value.surfaceGravityMultiplier}
            weightInput={weightInput}
            weightType={isWeightConverted ? 'kg' : 'lb'}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
