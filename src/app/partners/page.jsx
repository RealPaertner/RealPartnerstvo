'use client'

import React from 'react';
import s from './Partners.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersList from './PartnersList';
import Link from 'next/link'

export const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Slider className={s.partners_slide} {...settings}>
        <div className={s.partners_slide_wrap}>
          <p className={s.slide_wrap_desc}><Link href='/'>RP</Link> / Партнерам</p>
          <h2 className={s.slide_wrap_title}>В разделе партнерам мы напишем заголовок для данного раздела ...</h2>
        </div>
      </Slider>
      <section className={s.section_partners}>
        <PartnersList />
      </section>
    </>
  );
};

export default Partners;