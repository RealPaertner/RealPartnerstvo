import React from 'react';
import s from './Serveses.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ph from '@/img/lunar-moskva-jk-1181.jpg';
import Image from 'next/image';

export const ServesesMain = () => {
  return (
    <div className={s.servises_wrapp}>
      <div className={s.servises_container}>
        <h2 className={s.servises_title}>Какие услуги мы предоставляем ?</h2>
        <div className={s.servises_wrapps}>
          <div className={s.servises_wrapp_animated}>
            <div className={`${s.servises_photo} ${s.d_n}`}>
              <Image
                className={s.photo_img}
                src={ph}
                alt=""
              />
            </div>
          </div>
          <div className={s.servises_wrapp_animated}>
            <div className={s.servises_wrapp_about_desc}>
              <h3 className={s.servises_wrapp_about}>Привет! Мы команда профессионалов в сфере коммерческой недвижимости</h3>
              <p className={s.servises_about_desc}></p>
              <p className={s.servises_about_desc}>обладающая богатым опытом продажи, покупки а так же введения коммерческой недвижимости для наших клиентов.</p>
            </div>
            <div className={s.servises_wrapp_about_desc}>
              <h3 className={s.servises_wrapp_about}>Об услугах</h3>
              <p className={s.servises_about_desc}></p><p className={s.servises_about_desc}>Мы рады предложить широкий спектр услуг в сфере недвижимости, которые помогут нашим клиентам достичь своих бизнес-целей и максимизировать инвестиции. В частности, мы специализируемся на следующих услугах:</p>
              <p className={s.servises_about_desc}></p>
            </div>
          </div >
        </div >
      </div >
    </div >
  );
};

export default ServesesMain;
