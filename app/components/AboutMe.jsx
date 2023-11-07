import React from 'react'
import Image from 'next/image'

function AboutMe() {
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/aboutme.png" width={400} height={400} alt="aboutme" />
        <div>
          <h2>About me</h2>
          <p>As a seasoned Full-Stack Software Developer with a diverse background that spans finance, education, and healthcare, I bring a unique perspective to the tech industry.<br></br> <br></br> My journey in the tech world is fueled by a desire to develop solutions that make a difference, backed by a solid foundation in both front-end and back-end development, and a commitment to delivering exceptional digital experiences. <br></br><br></br>Launching SuperQuiz as its founder, I've refined my leadership and innovation capabilities, specializing in the creation of engaging, AI-assisted quizzes tailored to enhance educational experiences. This experience has sharpened my skills in product development, enabling me to intuitively align software functionalities with customer needs, and to deliver personalized solutions that resonate with users. My role has also expanded my expertise in SaaS platforms, where I've embraced the dynamic process of bringing a product to market, continually iterating based on user feedback to fine-tune features and user interface for optimal engagement and customer satisfaction.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
