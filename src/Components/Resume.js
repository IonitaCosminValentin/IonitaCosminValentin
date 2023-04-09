import React from 'react'
import CV from './Assets/cv.pdf'

const Resume = () => {
  return (
    <div id='resume'>
      <h1 className='color'>Resume</h1>
      <div className='education'>
        <h2 className='color'>Education</h2>
        <br />
        <span>
          2019 <br />
          Iordache Golescu, Gaesti{' '}
        </span>
        <br />
        I got my high school diploma in Mechatronics Engineering
        <br />
        <br />
        <span>
          2021 <br />
          Iordache Golescu, Gaesti
          <br />
        </span>
        I got my bachelor's degree
        <br />
        <br />
      </div>

      <div className='languages'>
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
      </div>

      <div className='experience'>
        <h2 className='color'>Experience</h2>
        <br />
        <span>2020</span>
        <br /> I got into coding
        <br />
        <br />
        <span>Early 2021</span>
        <br /> Started learning about web development
        <br />
        <br />
        <span>Late 2021</span>
        <br /> I started using React for one-page applications
        <br />
        <br />
        <span>Late 2022</span>
        <br /> First time applying for a job
        <br />
        <br />
      </div>

      <div className='skills'>
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
      </div>
      <div className='other-strengths'>
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
      </div>
      <div className='cv'>
        <button
          onClick={() => {
            window.open(CV)
          }}
        >
          Download CV
        </button>
      </div>
    </div>
  )
}

export default Resume
