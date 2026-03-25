import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import SliderOneImg from '../../assets/images/banner.jpg';
import SliderTwoImg from '../../assets/images/banner-2.jpg';

const Hero = () => {
  return (
    <section className="section-1">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <div
            className="content hero-slide"
            style={{ backgroundImage: `url(${SliderOneImg})` }}
          >
            <div className="banner-overlay"></div>
            <div className="hero-text container">
              <span className="hero-subtitle">New Season Edit</span>
              <h1>Style Crafted For Modern Confidence</h1>
              <p>
                Explore refined fashion essentials designed to elevate your everyday wardrobe.
              </p>
              <Link to="/shop" className="btn btn-primary">
                Explore Collection
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="content hero-slide"
            style={{ backgroundImage: `url(${SliderTwoImg})` }}
          >
            <div className="banner-overlay"></div>
            <div className="hero-text container">
              <span className="hero-subtitle">Signature Looks</span>
              <h1>Minimal. Elegant. Unforgettable.</h1>
              <p>
                Discover curated outfits for men, women, and kids with a premium shopping experience.
              </p>
              <Link to="/shop" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;