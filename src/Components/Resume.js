import React from 'react'
import CV from './Assets/cv.pdf'
import { motion as m } from 'framer-motion'

const Resume = () => {
  return (
    <div id='resume'>
      <h1 className='color'>Resume</h1>
      <m.div
        className='education'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className='color'>Education</h2>
        <br />
        <ul>
          <li>
            <span>
              2019 <br />
              Iordache Golescu, Gaesti{' '}
            </span>
            <br />
            I got my high school diploma in Mechatronics Engineering
            <br />
          </li>
          <br />
          <li>
            <span>
              2021 <br />
              Iordache Golescu, Gaesti
              <br />
            </span>
            I got my bachelor's degree
            <br />
          </li>
          <br />
        </ul>
      </m.div>

      <m.div
        className='languages'
        initial={{ translateX: '20%', opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className='color'>Languages</h2>
        <br />
        <div className='text'>
          <span>Romanian</span>
          <span>Native</span>
        </div>
        <div className='bar'>
          <div className='romanian-color inner-color'></div>
        </div>
        <br />

        <div className='text'>
          <span>English</span>
          <span>Proficent</span>
        </div>
        <div className='bar'>
          <div className='english-color inner-color'></div>
        </div>
      </m.div>

      <m.div
        className='experience'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className='color'>Experience</h2>
        <ul>
          <br />
          <li>
            <span>2020</span>
            <br /> I got into coding
          </li>
          <br />
          <br />
          <li>
            <span>Early 2021</span>
            <br /> Started learning about web development
          </li>
          <br />
          <br />
          <li>
            <span>Late 2021</span>
            <br /> I started using React for one-page applications
          </li>
          <br />
          <br />
          <li>
            <span>Late 2022</span>
            <br /> First time applying for a job
          </li>
          <br />
          <br />
        </ul>
      </m.div>

      <m.div
        className='skills'
        initial={{ translateX: '-50%', opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className='color'>Skills</h2>
        <br />
        <div className='skill'>
          <div className='text'>
            <h4>Javascript/HTML/CSS</h4>
            <h4>90%</h4>
          </div>
          <div className='bar'>
            <div className='html-color inner-color'></div>
          </div>
          <br />
        </div>

        <div className='skill'>
          <div className='text'>
            <h4>React</h4>
            <h4>80%</h4>
          </div>
          <div className='bar'>
            <div className='react-color inner-color'></div>
          </div>
          <br />
        </div>
        <div className='skill'>
          <div className='text'>
            <h4>Redux</h4>
            <h4>60%</h4>
          </div>
          <div className='bar'>
            <div className='redux-color inner-color'></div>
          </div>
          <br />
        </div>

        <div className='skill'>
          <div className='text'>
            <h4>Web Design</h4>
            <h4>50%</h4>
          </div>
          <div className='bar'>
            <div className='web-design-color inner-color'></div>
          </div>
          <br />
        </div>
      </m.div>
      <m.div
        className='other-strengths'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className='color'>Other Strengths</h2>
        Team player
        <br />
        Thinking outside the box
        <br />
        Always positive
        <br />
        Curious
        <br />
        Passionate
        <br />
        Dedicated
      </m.div>
      <m.div
        className='cv'
        initial={{ translateX: '30%', opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button
          onClick={() => {
            window.open(CV)
          }}
        >
          Download CV
        </button>
      </m.div>
    </div>
  )
}

export default Resume
