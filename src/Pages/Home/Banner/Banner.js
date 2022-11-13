import React from 'react';
import './Banner.css';
import bannerImg from '../../../assets/images/chair.png'
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const Banner = () => {
    return (
        <div className="hero bannerBody px-10 py-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src={bannerImg} className="rounded-lg w-1/2 shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Simle Starts Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <ButtonPrimary>Getting Started</ButtonPrimary>
    </div>
  </div>
</div>
    );
};

export default Banner;