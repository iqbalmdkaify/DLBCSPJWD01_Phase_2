import aboutMe from '../src/assets/images/about-me.jpg';

const AboutPage = () => {
  return (
    <section className='bg-transparent text-dark'>
      <div className='md:px-[25%] flex flex-col md:gap-12'>
        <p className="font-medium md:text-5xl">Passionate to travel</p>
        <p className="text-base font-light">
          Passionate about creativity and innovation, I thrive on exploring new ideas and bringing them to life. Whether it's through design, writing, or problem-solving, I enjoy the challenge of crafting something meaningful. Every project I take on is an opportunity to learn, improve, and push boundaries.
          <br></br>
          <br></br>
          Curiosity drives me. I believe in continuous growth and embracing change. From small details to big-picture thinking, I approach everything with a mindset of discovery. Adaptability and perseverance define my work ethic—I see obstacles as stepping stones to improvement. Staying open to new experiences and perspectives fuels my creativity and keeps me inspired.
          <br></br>
          <br></br>
          Beyond work, I find joy in learning, traveling, and connecting with like-minded people. Whether it's diving into a book, exploring a new place, or having insightful conversations, I appreciate experiences that expand my understanding. Inspiration can come from anywhere, and I make it a point to seek it out in everyday life.

          Each journey, challenge, and success shapes who I am. I'm always looking forward to the next opportunity to create, grow, and contribute.</p>
      </div>

      {/* About Us image container */}
      <div className="md:mt-[7rem] md:px-[12rem]">
        <img src={aboutMe} alt="about us image" className='md:h-[600px] w-full object-cover' />
      </div>
    </section>
  )
}

export default AboutPage;