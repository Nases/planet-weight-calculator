import React from 'react'

export default () => {
  return (
    <footer className="text-gray-500 text-center py-8 border-t-2 border-gray-600">
      &copy;
      &nbsp;
        {new Date().getFullYear()}
      &nbsp;
        <a className="hover:text-white" href="https://hasansefaozalp.com/" target="_blank" rel="noopener noreferrer">Hasan Sefa Ozalp</a>
      &nbsp;
      |
      &nbsp;
        <a className="hover:text-white" href="https://solarsystem.nasa.gov/planets/overview/" target="_blank" rel="noopener noreferrer">NASA</a>
      &nbsp;
      |
      &nbsp;
        <a className="hover:text-white" href="https://github.com/Nases/planet-weight-calculator" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
    </footer>
  )
}