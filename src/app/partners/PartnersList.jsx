import s from './Partners.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersData = [
  // {
  //   number: '01',
  //   title: 'Для покупателей',
  //   description: 'Using our great experience in a variety of technology stacks and industries, we provide customized software tailored to your business needs. Our experts design and develop a fast-loading, secure, and scalable SaaS solution that easily integrates with third-party services.',
  // },
  // {
  //   number: '02',
  //   title: 'Для арендаторов',
  //   description: 'Our team will help you find the perfect location for your business or investments. We take into account your requirements and offer options that best suit your needs.',
  // },
  // {
  //   number: '03',
  //   title: 'Для собственников',
  //   description: 'Whether you are looking to sell, lease, or manage your property, we provide professional assistance to achieve your real estate goals.',
  // },
];

export const PartnersList = () => {
  return (
    <div className={s.serviseslist_wrapp}>
      <div className={s.serviseslist_container}>
        <h2 className={s.serviseslist_title}>Что мы предлагаем партнерам</h2>
        <ul className={s.serviseslist_list}>
          {PartnersData.map((item, index) => (
            <li className={s.serviseslist_item} key={index}>
              <div className={s.serviseslist_item_title}>
                <span className={s.serviseslist_item_number}>{item.number}</span>
                <h4 className={s.serviseslist_item_name}>{item.title}</h4>
              </div>
              <div className={s.serviseslist_item_desc}>
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div >
    </div >
  );
};

export default PartnersList;