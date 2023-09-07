'use client'

import React from 'react';
import s from './Serveses.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServesesMain } from './ServesesMain';
import ServisesList from './ServesesList';
import Link from 'next/link'

export const Servises = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Slider className={s.servises_slide} {...settings}>
        <div className={s.servises_slide_wrap}>
          <p className={s.slide_wrap_desc}><Link href='/'>RP</Link> / Услуги</p>
          <h2 className={s.slide_wrap_title}>В разделе услуги мы напишем заголовок для данного раздела ...</h2>
        </div>
      </Slider>
      <section className={s.section_servises}>
       <ServesesMain />
       <ServisesList />
      </section>
    </>
  );
};

export default Servises;