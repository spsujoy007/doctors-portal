import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../../../assets/images/footer.png'

const Footer = () => {
    return (
        <section className='bg-white' >
          <footer className="flex justify-between px-28 footer p-10  mt-20" style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: 'center'
        }}>
  <div>
    <span className="footer-title">Services</span> 
    <Link to='/' className="link link-hover">Branding</Link>
    <Link to='/' className="link link-hover">Design</Link>
    <Link to='/' className="link link-hover">Marketing</Link>
    <Link to='/' className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to='/' className="link link-hover">About us</Link>
    <Link to='/' className="link link-hover">Contact</Link>
    <Link to='/' className="link link-hover">Jobs</Link>
    <Link to='/' className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link to='/' className="link link-hover">Terms of use</Link>
    <Link to='/' className="link link-hover">Privacy policy</Link>
    <Link to='/' className="link link-hover">Cookie policy</Link>
  </div>

</footer>
<p className='text-center py-5 text-secondary uppercase'>Copyright © 2022 - All right reserved by SUJOY PAUL</p>
        </section>
    );
};

export default Footer;