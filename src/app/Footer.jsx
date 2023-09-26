import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className='text-center bg-[#480048] text-white p-8 font-semibold lg:text-xl flex flex-col gap-4'>
      <div className='flex justify-center gap-4 text-2xl'>
        <a href='https://www.facebook.com/brayan.jb.90/' target='_blank'>
          <GrFacebook />
        </a>
        <a href='https://www.instagram.com/retford_obriamjb/' target='_blank'>
          <BsInstagram />
        </a>
        <a href='https://github.com/Retford' target='_blank'>
          <BsGithub />
        </a>
      </div>
      <p>&#169; 2023 Retford O&#39;briam </p>
    </footer>
  );
};

export default Footer;
