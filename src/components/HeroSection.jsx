import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import img1 from '../img/hero-carousel/hero-carousel-1.jpg';

const HeroSection = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      mirror: true,
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero bg-cover bg-no-repeat bg-center relative"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">Welcome to UpConstruction</h2>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">
                Get Started
              </a>
              <p>fgsaflkdj</p>
              <p>fgsaflkdj</p>
              <p>fgsaflkdj</p>
              <p>fgsaflkdj</p>
              <p>fgsaflkdj</p>
              <p>fgsaflkdj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
