import React from 'react'

export default ({ name, desc, surfaceGravity, img }) => {
  return (
    <div className="px-10 py-8">
      <div className="w-64">
        <img src={img} alt={name} />
        <h2 className="text-2xl text-gray-200">
          {name}
          &#8594;
          &nbsp;
            <input className="bg-transparent text-blue-300 inline w-10" type="text" defaultValue="40" />
          pounds</h2>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  )
}