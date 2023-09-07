'use client'

import React from 'react';
import s from './NewsActicle.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import phpo from '@/img/1626429203_16-almode_ru-p-dom-iz-kamnya-i-dereva-16 (1).jpg';
import Image from 'next/image';
import News from './News.jsx'

export const NewsActicle = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [windlowClose, setWindowClose] = React.useState(false);

  const addNewClassToBody = () => {
    document.body.classList.add('new-class');
  };

  const addNewClassToBody1 = () => {
    document.body.classList.add('change-class');
  };

  const openNews = () => {
    addNewClassToBody();
    setWindowClose(true);
  }

  const closeNews = () => {
    addNewClassToBody1();
    setWindowClose(false);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [openNews])

  return (
    <div className={s.news}>
      <Slider className={s.news_slide} {...settings}>
        <div className={s.news_slide_wrap}>
          <p className={s.slide_wrap_desc}><Link href='/'>RP</Link> / Статьи и Новости</p>
          <div className={s.slide_wrap_news}>
            <div className={s.slide_wrap_news_desc}>
              <span className={s.news_desc_data}>03</span>
              •
              <span className={s.news_desc_data}>02</span>
              •
              <span className={s.news_desc_data}>23</span>
            </div>
            <p className={s.slide_wrap_title}>Построен новый дом с первым этажом коммерческой недвижисомти , окумаемости меньше 6 лет</p>
          </div>
        </div>
      </Slider>
      <section className={s.section_news}>
        <div className={`${s.container} ${s.news_container}`}>
          <ul className={s.news_articles_list}>
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
            <News openNews={openNews}/>
            <News openNews={openNews}/>
            <News openNews={openNews}/>
          </ul>
        </div>
      </section>
      <div className={`${s.news_window} ${windlowClose ? s.news_window_open : ''}`}>
        <div className={s.news_window_photo_wrapp}>
          <div className={s.news_window_photo_wrapp_box}>
            <div className={`${s.photo_wrapp_item_data} ${s.slide_wrap_news_desc}`}>
              <span className={s.item_data_numb}>03</span>
              •
              <span className={s.item_data_numb}>02</span>
              •
              <span className={s.item_data_numb}>23</span>
            </div>
            <h2 className={`${s.slide_wrap_title} ${s.photo_wrapp_item_desc}`}>Новость №1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam deleniti nihil similique consectetur.</h2>
          </div>
        </div>
        <div className={s.news_window_wrapp}>
          <div className={s.window_wrapp_desc}>
            <p className={s.wrapp_desc_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore veniam minus magnam id nam, beatae debitis facilis? Nobis modi quaerat commodi nisi quo aperiam atque id rem asperiores dolorem!</p>
            <p className={s.wrapp_desc_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore veniam minus magnam id nam, beatae debitis facilis? Nobis modi quaerat commodi nisi quo aperiam atque id rem asperiores dolorem!</p>
            <p className={s.wrapp_desc_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore veniam minus magnam id nam, beatae debitis facilis? Nobis modi quaerat commodi nisi quo aperiam atque id rem asperiores dolorem!</p>
            <p className={s.wrapp_desc_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero maxime necessitatibus hic neque, facere blanditiis odit unde officia saepe nam error nemo illum aliquam. Molestiae ad magni ipsam possimus.
              Fugiat maiores reiciendis culpa, nulla temporibus consequatur vero omnis earum exercitationem. Consequuntur voluptates laudantium ab illum aliquid quod incidunt porro veniam. Sunt suscipit nulla laudantium ducimus magnam quaerat delectus impedit!
              Consequatur, facere voluptate ipsum totam mollitia maxime beatae. Iure optio accusantium quae reprehenderit temporibus eius, voluptatem hic adipisci possimus. Vel voluptate ipsum ad suscipit commodi pariatur optio exercitationem expedita dolorum!
              Ipsam architecto ducimus nesciunt neque, aut illum similique sunt iusto, iste vel quasi earum eos laborum quis facere dolorum necessitatibus ad recusandae maiores est optio corrupti atque facilis consequuntur! Et.</p>
            <p className={s.wrapp_desc_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero maxime necessitatibus hic neque, facere blanditiis odit unde officia saepe nam error nemo illum aliquam. Molestiae ad magni ipsam possimus.
              Fugiat maiores reiciendis culpa, nulla temporibus consequatur vero omnis earum exercitationem. Consequuntur voluptates laudantium ab illum aliquid quod incidunt porro veniam. Sunt suscipit nulla laudantium ducimus magnam quaerat delectus impedit!
              Consequatur, facere voluptate ipsum totam mollitia maxime beatae. Iure optio accusantium quae reprehenderit temporibus eius, voluptatem hic adipisci possimus. Vel voluptate ipsum ad suscipit commodi pariatur optio exercitationem expedita dolorum!
              Ipsam architecto ducimus nesciunt neque, aut illum similique sunt iusto, iste vel quasi earum eos laborum quis facere dolorum necessitatibus ad recusandae maiores est optio corrupti atque facilis consequuntur! Et.</p>
          </div>
          <div className={s.window_wrapp_social}>
            <p className={s.wrapp_social_title}>Мы в соц. сетях</p>
            <div className={s.wrapp_social_logo}></div>
            <Link className={s.social_logo_inst} href=''></Link>
            <Link className={s.social_logo_tg} href=''></Link>
          </div>
        </div>
      </div>
      <span onClick={closeNews} className={`${s.news_window_photo_wrapp_close_op} ${windlowClose ? s.news_window_photo_wrapp_close : ''}`}></span>
    </div>
  );
};

export default NewsActicle;