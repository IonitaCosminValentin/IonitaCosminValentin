import React from 'react'
import { motion as m } from 'framer-motion'

const Projects = () => {
  return (
    <div id='projects'>
      <h1 className='color'>Projects</h1>
      <div className='project'>
        <m.div
          className='container youtube-clone'
          initial={{ borderRadius: '100%', opacity: 0 }}
          whileInView={{
            borderRadius: '5px',
            opacity: 1
          }}
          transition={{ duration: 1 }}
        >
          <span
            onClick={() => {
              window.location =
                'https://ionitacosminvalentin.github.io/YouTube-Clone/'
            }}
          >
            Youtube Clone
          </span>
          <m.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              window.location =
                'https://ionitacosminvalentin.github.io/YouTube-Clone/'
            }}
          >
            Youtube Clone
          </m.button>
          <m.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              window.location =
                'https://github.com/IonitaCosminValentin/YouTube-Clone'
            }}
          >
            Github Page
          </m.button>
        </m.div>

        <m.div
          className='container amazon-clone'
          initial={{ borderRadius: '100%', opacity: 0 }}
          whileInView={{ borderRadius: '5px', opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span
            onClick={() => {
              window.location =
                'https://ionitacosminvalentin.github.io/amazon-clone/'
            }}
          >
            Amazon Clone
          </span>
          <m.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              window.location =
                'https://ionitacosminvalentin.github.io/amazon-clone/'
            }}
          >
            Amazon Clone
          </m.button>
          <m.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              window.location =
                'https://github.com/IonitaCosminValentin/amazon-clone'
            }}
          >
            Github Page
          </m.button>
        </m.div>

        <m.div
          className='container a-star'
          initial={{ borderRadius: '100%', opacity: 0 }}
          whileInView={{ borderRadius: '5px', opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span
            onClick={() => {
              window.location =
                'https://ionitacosminvalentin.github.io/A-Star-Pathfinding-Algorithm/'
            }}
          >
            A* Algorithm
          </span>
          <m.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              window.location =
                'https://ionitacosminvalentin.github.io/A-Star-Pathfinding-Algorithm/'
            }}
          >
            A* Algorithm
          </m.button>
          <m.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => {
              window.location =
                'https://github.com/IonitaCosminValentin/A-Star-Pathfinding-Algorithm'
            }}
          >
            Github Page
          </m.button>
        </m.div>
      </div>
    </div>
  )
}

export default Projects
