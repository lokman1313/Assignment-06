import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content '>
            <footer className="footer sm:footer-horizontal p-30">
                <div className='space-y-3'>
                    <h2 className='text-4xl font-bold'>DigiTools</h2>
                    <p>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a className='p-2 bg-gray-400 rounded-full'>
        <FaTwitter />
      </a>
      <a className='p-2 bg-gray-400 rounded-full'>
        <FaFacebook />
      </a>
      <a className='p-2 bg-gray-400 rounded-full'>
        <AiFillInstagram />
      </a>
    </div>
  </nav>
</footer>
<div className="divider before:bg-white after:bg-white"></div>
  <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center pb-6 text-sm gap-4 text-white">
    <p>© 2026 Digitools. All rights reserved.</p>

    <ul className='flex gap-4'>
      <li>Privacy Policy</li>
      <li>Terms of Service</li>
      <li>Cookies</li>
    </ul>
  </div>
        </div>
    );
};

export default Footer;