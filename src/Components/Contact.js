import React from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const setStatus = string => {
    let span = document.querySelector('#status')
    span.textContent = string
  }

  const sendEmail = e => {
    e.preventDefault()
    let form = e.target
    if (
      form[0].value.length >= 1 &&
      form[1].value.length >= 1 &&
      form[2].value.length >= 1
    ) {
      emailjs
        .sendForm(
          'service_551i1v6',
          'template_aqs5mpm',
          e.target,
          'Nzkqf_QHxs2HoTER6'
        )
        .then(result =>
          result.status === 200
            ? setStatus('Message Sent Succesfully')
            : setStatus('Something Went Wrong, Please Try Again')
        )
    } else {
      setStatus('Please fill all the fields')
    }
  }

  return (
    <div id='contact'>
      <h1>
        Contact <span>Me</span>
      </h1>
      <span id='status'>
        <br />
      </span>
      <form
        onSubmit={e => {
          sendEmail(e)
        }}
      >
        <div className='top'>
          <div id='name' className='container'>
            <span>Name:</span>
            <input
              type='text'
              className='name'
              name='name'
              placeholder='Please enter your name'
            />
          </div>

          <div id='email' className='container'>
            <span>Email:</span>
            <input
              type='email'
              className='email'
              name='email'
              placeholder='Please enter your email'
            />
          </div>
        </div>
        <div id='message' className='container'>
          <span>Message:</span>
          <textarea
            name='message'
            className='message'
            maxLength={5000}
            placeholder='Please enter your message here'
          ></textarea>

          <input type='submit' value='Send' id='button' />
        </div>
      </form>
    </div>
  )
}

export default Contact
