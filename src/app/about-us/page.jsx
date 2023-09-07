'use client';

import React from 'react';
import s from './AboutUs.module.scss';
import mapsIcon from '@/img/photo_2023-07-12_15-40-26-transformed.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link'
import Image from 'next/image';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const AboutUs = () => {
  
  return (
    <>
      <Slider className={s.about_slide} {...settings}>
        <div className={s.about_slide_wrap}>
          <p className={s.slide_wrap_desc}><Link href='/'>RP</Link> / О компании</p>
          <h2 className={s.slide_wrap_title}>Real Partners - это компания, которая ...</h2>
        </div>
      </Slider>
      <section className={s.section_aboutus}>
        <div className={s.aboutus__background}>
          <Image src={mapsIcon} alt="" />
        </div>

        <div className={`${s.aboutus_container} ${s.container}`}>
          <h2 className={s.aboutus__head}>
            <b className={s.head_text}>&gt;20</b>
            <div className={s.head_desc}>
              {/* <b>объектов</b> */}
              объектов под нашим управлением
            </div>
          </h2>
          <div className={s.aboutus__desc}>
            <div className={s.aboutus__desc_wrap}>
              <div className={s.wrap__box}>
                <div className={s.wrap__box_about}>
                  <p className={s.box_about_desc}>
                    Сотрудничая с&nbsp;нами, Вы&nbsp;получите оптимальные условия продажи и&nbsp;аренды без посредников, а&nbsp;значит, сможете выгодно инвестировать капитал в&nbsp;развитие Вашего бизнеса. Если Вы&nbsp;решили открыть собственное дело или Ваш текущий проект требует расширения, у&nbsp;нас есть предложения, которые могут Вас заинтересовать. Продажа и&nbsp;аренда нежилых помещений напрямую от&nbsp;собственника, без посредников&nbsp;— это Ваша возможность выгодно разместить офис, отделение банка, аптеку, салон, магазин, кафе, торговую точку практически в&nbsp;любом районе города.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;