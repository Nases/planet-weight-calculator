import React from 'react'

export default ({ name, desc, surfaceGravity, img, NASALink }) => {

  return (
    <div className="bg-opacity-on-hover mx-auto px-2 pb-2">
      <div className="w-64">
        <img src={img} alt={name} />
        <h2 className="text-2xl text-gray-400">
          <a className="hover:text-orange-400" href={NASALink} target="_blank" rel="noopener noreferrer">{name}</a>
          &nbsp;
          &#8594;
          &nbsp;
          <input className="bg-transparent text-blue-300 inline w-10" type="text" defaultValue="40" />
          pounds
          </h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  )
}