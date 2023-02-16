import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact" className="py-1">
   <div className="contact-us p-1 ">
    <h2 className="m-heading bgg">Feel free to ask anyThing</h2>
    <form>
    <div className="form-group">
      <input type="text" name="name" placeholder="Name"/>
      <input type="text" name="email" placeholder="Email"/>
   </div>

   <div>
     <input type="text" name="subject" placeholder="Subject"/>
     <textarea name="message" rows="10" cols="10" placeholder="Message">
     </textarea>
     </div>
     <input className="btn btn-dark" type="submit" value="submit"/>
   </form>
   </div>
 </section>
  )
}

export default Contact
