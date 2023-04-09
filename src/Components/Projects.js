import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
      <h1 className='color'>Projects</h1>
      <div className='project'>
        <div className='container youtube-clone'>
          <button
            onClick={() => {
              window.location =
                'https://ionitacosminvalentin.github.io/YouTube-Clone/'
            }}
          >
            Youtube Clone
          </button>
          <button
            onClick={() => {
              window.location =
                'https://github.com/IonitaCosminValentin/YouTube-Clone'
            }}
          >
            Github Page
          </button>
        </div>

        <div className='container amazon-clone'>
          <button
            onClick={() => {
              window.location =
                'https://ionitacosminvalentin.github.io/amazon-clone/'
            }}
          >
            Amazon Clone
          </button>
          <button
            onClick={() => {
              window.location =
                'https://github.com/IonitaCosminValentin/amazon-clone'
            }}
          >
            Github Page
          </button>
        </div>

        <div className='container a-star'>
          <button
            onClick={() => {
              window.location =
                'https://ionitacosminvalentin.github.io/A-Star-Pathfinding-Algorithm/'
            }}
          >
            A* Algorithm
          </button>
          <button
            onClick={() => {
              window.location =
                'https://github.com/IonitaCosminValentin/A-Star-Pathfinding-Algorithm'
            }}
          >
            Github Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
