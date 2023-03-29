import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <h1>
        About <span>Me</span>
      </h1>

      <div className='info'>
        <p>
          I am a quick and dedicated person, focused on personal and
          professional growth, with an inclination for problem-solving and
          computer science, a self-taught front-end developer with over two
          years of experience writing <span>JavaScript, HTML, CSS</span>, and
          more than a year using
          <span> React, Redux</span>, and <span>CSS preprocessors.</span>
        </p>
        <br />
        <br />
        <p>
          I was born and raised in <span>Romania</span> and never had the
          opportunity to leave the country. I hope to see the world someday,
          learn about other cultures, and see the beauty of nature and people in
          all its forms.
        </p>
        <br />
        <br />
        <p>
          I got my first computer with internet access when I was
          <span> eleven</span>. Since then it has never stopped amazing me. The
          worlds it could generate, the detail and the accuracy, and all the
          data it could manage were just mind-blowing. My mind didn't understand
          it literally, but I was astonished by all the games I played. The NPCs
          seemed real, alive, even though it was all just zeros and ones. And
          the older I got the more I understood it until I had to try to
          recreate that myself...
        </p>
        <br />
        <br />
        <p>
          I got into <span>self-improvement</span> in 2020, about the same time
          I started learning to code. At that time I was feeling so low, my
          self-esteem was on the ground. My life felt out of my control like
          days would pass without me noticing, I had no purpose until I found a
          video about self-improvement. Even before watching the video I wanted
          to change something about myself, I just didn't know where to start.
          After that, I bought some books about self-improvement, got into
          reading, stopped playing games when it got frustrating and found
          myself super interested in coding. I had so much free time to enjoy
          little things, I was less stressed, more aware, and overall{' '}
          <span>happier</span>.
        </p>
      </div>
      <div className='more-info'>
        <div className='hobbies'>
          <h2>Passions/Hobbies</h2>
          Coding, Reading,
          <br />
          Traveling, Computers,
          <br />
          Self-Improvment,
          <br />
          Sports, Gaming.
          <br />
        </div>
        <br />
        <span>Age </span>22
        <br />
        <span>Country </span>Romania
      </div>
      <div className='contact'>
        <h2>Contact</h2>
        <br />
        <span>Phone </span>+40 721 732 718
        <br />
        <br />
        <span>Adress </span>Uliesti, Str. Plopilor, Nr 12
        <br />
        <br />
        <span>Email </span>cosminvalentinionita@gmail.com
        <br />
      </div>
    </div>
  )
}

export default About
