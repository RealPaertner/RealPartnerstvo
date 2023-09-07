'use client'

import React from 'react';
import s from './NewsActicle.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import phpo from '@/img/1626429203_16-almode_ru-p-dom-iz-kamnya-i-dereva-16 (1).jpg';
import Image from 'next/image';

export const News = ({windlowClose, openNews, closeNews}) => {

  return (
    <li onClick={openNews} className={s.news_articles_item}>
      <div className={s.articles_item_data}>
        <span className={s.item_data_numb}>03</span>
        •
        <span className={s.item_data_numb}>02</span>
        •
        <span className={s.item_data_numb}>23</span>
      </div>
      <Image src={phpo} alt="" className={s.articles_item_img} />
      <p className={s.articles_item_desc}>Новость №1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam deleniti nihil similique consectetur.</p>
    </li>
  );
};

export default News;