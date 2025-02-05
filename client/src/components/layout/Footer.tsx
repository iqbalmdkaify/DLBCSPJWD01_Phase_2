import Button from '../common/Button'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="contact-container">
        <p className="footer-heading">Contact us to get assistance</p>
        <form className="contact-form">
          <div>
            <p>Enter your email here *</p>
            {/* <input type="email" name="email" onChange={handleChange} value={formData.email} /> */}
            <input type="email" name="email" />
          </div>
          <div>
            <p>Message</p>
            {/* <textarea name="message" onChange={handleChange} value={formData.message}></textarea> */}
            <textarea name="message" ></textarea>
          </div>
          {/* <Button text="Send" type="Secondary" action={handleSubmit} /> */}
          <Button text="Send" type="Secondary" />
        </form>
        <p className="footer-link">&copy; 2024 by Blogify. Powered and secured by Node and Express. Designed by <a href="https://github.com/iqbalmdkaify" className="footer-git-link" target="_blank" rel="noopener noreferrer">@iqbalmdkaify</a></p>
      </div>
    </footer >
  )
}

export default Footer