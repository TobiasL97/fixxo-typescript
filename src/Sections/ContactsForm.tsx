import React, { useState } from 'react'
import { submitData, validate } from '../Assets/scripts/validation'

const ContactsForm = () => {
  
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [comments, setComments] = useState<string>('')
    const [errors, setErrors] = useState({name, email, comments})
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)
  
    const handleChange = (e:any) => {
      const {id, value} = e.target
  
      switch(id) {
        case 'name':
          setName(value)
          break
        case 'email':
          setEmail(value)
          break
        case 'comments':
          setComments(value)
          break
      }
  
      setErrors({...errors, [id]: validate(e)})
    }
  
    const handleSubmit = async (e:any) => {
      e.preventDefault()
      setErrors(validate(e, {name, email, comments}))
    
      if (errors.name === null && errors.email === null && errors.comments === null) {

        let json = JSON.stringify({name, email, comments})

        setName('')
        setEmail('')
        setComments('')
        setErrors({name, email, comments})
        
        if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform','Post', json)) {
          setSubmitted(true)
          setFailedSubmit(false)
        }
        else {
          setSubmitted(false)
          setFailedSubmit(true)
        }

      } else {
        setSubmitted(false)
      }
    }

    return (
    <section className="contact-form">
        <div className="container-small">

          {
            submitted ? (
              <div className="alert alert-success text-center" role="alert">
                <h3>Thank you for your comment</h3>
                <p>We will contact you as soon as possible.</p>
              </div> ) : (<></>)
          }

          {
            failedSubmit ? (
              <div className="alert alert-danger text-center" role="alert">
                <h3>Something went wrong!</h3>
                <p>We couldn't submit your comment right now.</p>
              </div> ) : (<></>)
          }
            <h2>Come in Contact with Us</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <input id="name" className={(errors.name ? 'error': '')}  type="text" placeholder="Your Name" value={name} onChange={handleChange}/>
                    <div id="nameErrorMessage" className={(errors.name ? 'errorMessage': '')}>{errors.name}</div>
                </div>
                <div>
                    <input id="email" type="email" className={(errors.email ? 'error': '')} placeholder="Your Email" value={email} onChange={handleChange}/>
                    <div id="emailErrorMessage" className="errorMessage">{errors.email}</div>
                </div>
                <div className="textarea">
                    <textarea id="comments" className={(errors.comments ? 'error': '')} placeholder="Comment"  value={comments} onChange={handleChange}></textarea>
                    <div id="commentErrorMessage" className="errorMessage">{errors.comments}</div>
                </div>
                <div>
                    <button className="button-theme" type="submit">Post Comments</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactsForm