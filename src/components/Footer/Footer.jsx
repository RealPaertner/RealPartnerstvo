import React from 'react'
// import Logo from "@/img/rfFooter.png";
import Logo from "@/img/olnylogo.jpg";
import "./Footer.scss";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>

      <footer className="footer-14398">

        <div className="container">
          <div className="footer_content">
            <Link className='footer_img_link' href='/'>
              <Image className='footer_img' src={Logo} />
            </Link>
            <div className="footer_content_social">
              <Link className='social_tg' href="https://t.me/RPMSKRP" target='_blank'></Link>
              <Link className='social_wa' href="https://wa.me/79959901514?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..." target='_blank'></Link>
            </div>
            <div className="footer_content_contacts">
              <h2 className="content_contacts_title">Контакты</h2>
              <div className="content_contacts_wrapp">
                <Link className='content_contacts_phone' href="tel:+79959901514">+7 995 990 15 14</Link>
                <Link className='content_contacts_mail' href="mailto:realpartnerstvo@mail.ru"
                >realpartnerstvo@mail.ru</Link>
                <div className="footer_content_social_contact">
                  <Link className='social_tgc' href="https://t.me/RPMSKRP" target='_blank'></Link>
                  <Link className='social_wac' href="https://wa.me/79959901514?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..." target='_blank'></Link>
                </div>
              </div>
            </div>
          </div>
          <Link href='/politics-konf' className="footer_politika">Политика конфеденциальности</Link>
        </div >
      </footer >
    </>
  )
}

export default Footer