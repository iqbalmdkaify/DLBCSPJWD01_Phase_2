import Button from "../common/Button"

const Footer = () => {
  return (
    <footer className='bg-transparent py-8 lg:py-16 flex flex-col gap-8 lg:gap-[4.5rem] items-center text-dark text-base w-full'>
      {/* Form section */}
      <div className="flex flex-col md:gap-3 items-center w-full">
        <p className="font-bold text-center text-wrap text-lg">Do you have an insatiable desire to explore the world?</p>
        <p className="font-light text-center">Sign up to receive news and updates.</p>

        <form className="flex flex-col md:flex-row items-center gap-8 lg:gap-3 mt-8 lg:mt-10">
          <input type="email" placeholder="E-mail address" className="w-full px-9 py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark" />
          <Button text="Register" />
        </form>
      </div>
      {/* Copyrights */}
      <div>
        <p className="font-light text-sm md:text-base text-center">&copy; 2025 by Blogify. Powered and secured by Node and Express. Designed by <a href="https://github.com/iqbalmdkaify" className="underline" target="_blank" rel="noopener noreferrer">@iqbalmdkaify</a></p>
      </div>
    </footer >
  )
}

export default Footer