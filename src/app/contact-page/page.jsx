'use client'

import React from 'react';
import s from './ContactPage.module.scss';
import {Ymaps} from './Ymaps.jsx'

export const ContactPage = () => {

  return (<>
    <section className={s.section_constact}>
      <h2 className={s.contacts__title}>
        Контакты: <br />
        <span>115093, Москва, Дубининская улица д.90</span>
      </h2>
      <div className={s.contacts_container + " " + s.container}>
        <div className={s.contact_online}>
          <div className={s.online_timeline}>
            <h3 className={s.timeline_header}>Режим работы :</h3>
            <p className={s.timeline_time}>ПН-ВС 10:00 - 20:00</p>
          </div>
          <div className={s.online_connection}>
            <h3 className={s.connection_header}>Телефоны и почта:</h3>
            <div className={s.connection_tel}>
              <a href="tel:+79959901514" className={s.connection_tel_number}>
                +7 995 990 15 14
              </a>
            </div>
            <div className={s.connection_mail}>
              <div className={s.connection_mail_client}>
                <a href="mailto:realpartnerstvo@mail.ru" className={s.mail_client_telink}>
                  info@moi-brend.ru
                </a>
                <span className={s.mail_client_tedesc}> - для клиентов и сотрудничества</span>
              </div>
            </div>
          </div>
        </div>
        <div >
          <Ymaps />
        </div>
      </div>
    </section>
  </>
  );
};

export default ContactPage;