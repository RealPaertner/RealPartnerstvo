'use client'

import React from 'react'
import "./Navbar.scss"
import Logo from "@/img/olnylogobl.jpg";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MouseOverModal } from '../../utils/MouseOverModal';
import Link from 'next/link'
import Image from 'next/image';
import tg from "@/img/telegram.png";
import wa from "@/img/whatsapp-svgrepo-com.svg";

const Header = () => {
  const [nav, setNav] = React.useState(false)


  return (
    <>
      <nav className="header-section is-sticky">
        <div className="borderLeft"></div>
        <div className="contianer av_container">
          <div className="navigationMenu">
            <Link className='w55' href='/'>
              <Image src={Logo} alt="" />
            </Link>
            <ul className='noneUl'>
              <li><Link href="/about-us">О компании</Link></li>
              <li>
                <MouseOverModal />
              </li>
              {/* <li><Link href="">Услуги</Link=#></li> */}
              <li><Link href="/news-article">Cтатьи и Новости</Link>
              </li>
              <li><Link href="/contact-page">Контакты</Link></li>
              <li><Link href="/partners">Партнёрам</Link></li>
            </ul>
            <div className="navbar">
              <div className="container nav-container">
                <div className="logo">
                  <Link href="/"><Image className='Logo' src={Logo} alt="" /></Link>
                  <div className="tel">
                    <a className="telHeader" href="tel:+79959901514">
                      +7 995 990 15 14
                    </a>
                    <div className='icons'>
                      <a href="https://t.me/RPMSKRP" target="_blank">
                        <Image src={tg} alt="" className='bx bxl_telegram' />
                      </a>
                      <a href="https://wa.me/79959901514?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..." target="_blank">
                        <Image src={wa} alt="" className='bx bxl_whatsapp' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div
                    className={
                      nav ? ["menu-items", "active"].join(' ') : ["menu-items"]
                    }
                  >
                    <div className="telo">
                      <a className="telHeader" href="tel:+79959901514">
                        +7 995 990 15 14
                      </a>
                      <div className='icons'>
                        <a href="https://t.me/RPMSKRP" target="_blank">
                          <Image src={tg} alt="" className='bx bxl_telegram' />
                        </a>
                        <a href="https://wa.me/79959901514?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..." target="_blank">
                          <Image src={wa} alt="" className='bx bxl_whatsapp' />
                        </a>
                      </div>
                    </div>
                    <li><Link onClick={() => setNav(false)} href="/about-us">О компании</Link></li>
                    {/* <li>
                      <Dropdown />
                    </li> */}
                    <li><Link onClick={() => setNav(false)} href="/servises">Услуги</Link>
                    </li>
                    <li><Link onClick={() => setNav(false)} href="/news-article">Cтатьи и Новости</Link>
                    </li>
                    <li><Link onClick={() => setNav(false)} href="/contact-page">Контакты</Link></li>
                    <li><Link onClick={() => setNav(false)} href="/partners">Партнёрам</Link></li>
                  </div>
                  <div onClick={() => setNav(!nav)} className={"mobile_btn"}>
                    {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header