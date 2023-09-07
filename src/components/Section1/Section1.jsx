import Logo from "@/img/logo.jpg";
import tg from "@/img/telegram.png";
import wa from "@/img/whatsapp-svgrepo-com.svg";
import s from "./Section1.module.scss";
import SwiftSlider from 'react-swift-slider';
import Image from 'next/image';

const Section1 = () => {

  const data = [
    {
      id: "1",
      src: "https://previews.123rf.com/images/dny3d/dny3d1903/dny3d190300010/118498088-contemporary-modern-house-on-a-white-background-3d-illustration.jpg ",
    },
    {
      id: "2",
      src: "https://media.istockphoto.com/id/845555910/photo/house-isolated-on-white-real-estate-concept-3d.jpg?s=612x612&w=0&k=20&c=RPWu39sqSrNABNapGIHSgBaESvP8eUVDooLelv_7rnE=",
    },
    {
      id: "3",
      src: "https://media.istockphoto.com/id/831360678/photo/house-isolated-on-white-real-estate-concept-3d.jpg?s=1024x1024&w=is&k=20&c=M9Wq6sYnzOmQMo8XsU1lYPI4Mq7ekcv1hN6aaUnpq4M=",
    },
  ];




  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.wrapperItem}>

          <div className={s.side1}>
            <Image src={Logo} alt="" />

            <div className={s.block1}>
              <h3>
                Инвестиции в недвижимость - ваш путь к финансовой стабильности! <br />
              </h3>
              <p className={s.block1p}>
                Управление и продажа коммерческой недвижимости
              </p>
              <a href="#projects" className={s.button}>
                Стать инвестором
              </a>
            </div>
          </div>


          <div className={s.side2}>

            <div className={s.tel}>
              <a className={s.telHeader} href="tel:+79959901514">
                +7 995 990 15 14
              </a>
              <div className={s.icons}>
                <a href="https://t.me/RPMSKRP" target="_blank">
                  <Image src={tg} alt="" className={`${s.bx} ${s.bxl_telegram}`} />
                </a>
                <a href="https://wa.me/79959901514?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..." target="_blank">
                  <Image src={wa} alt="" className={`${s.bx} ${s.bxl_whatsapp}`} />
                </a>
              </div>
            </div>

            <div className={s.Slider2}>
              <SwiftSlider
                width={200}
                data={data}
                showDots={true}
                enableNextAndPrev={false}
                interval={3000}
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Section1;
