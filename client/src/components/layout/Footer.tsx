import Button from "../common/Button"

const Footer = () => {
  return (
    <footer className='bg-transparent md:py-16 flex flex-col md:gap-[4.5rem] items-center text-dark text-base'>
      {/* Form section */}
      <div className="flex flex-col md:gap-3 items-center">
        <p className="font-bold">Do you have an insatiable desire to explore the world?</p>
        <p className="font-light">Sign up to receive news and updates.</p>

        <form className="flex items-center md:gap-3 md:mt-10">
          <input type="email" placeholder="E-mail address" className="md:px-9 md:py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark" />
          <Button text="Register" />
        </form>
      </div>
      {/* Copyrights */}
      <div>
        <p className="font-light">&copy; 2025 by Blogify. Powered and secured by Node and Express. Designed by <a href="https://github.com/iqbalmdkaify" className="underline" target="_blank" rel="noopener noreferrer">@iqbalmdkaify</a></p>
      </div>
    </footer >
  )
}

export default Footer