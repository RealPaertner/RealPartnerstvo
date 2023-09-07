import React from 'react';
import s from './MouseOverModal.module.scss';
import { HeaderServise } from '../components/Header/HeaderServise';
import { Modal } from './HoverWindow/HoverWindow.tsx';
import Link from 'next/link'

const data = [
  {
    categoryItem: 'Услуги',
    dataProduct: [
      {
        title: 'Для покупателей',
        description: [
          {
            text: 'Создание или покупка готового арендного бизнеса',
            link: '/'
          },
          {
            text: 'Покупка помещения под ваши задачи',
            link: '/'
          }
        ]
      },
      {
        title: 'Для собственников',
        description: [
          {
            text: 'Продажа',
            link: '/'
          },
          {
            text: 'Сдача в аренду',
            link: '/'
          },
          {
            text: 'Управление недвижимостью',
            link: '/'
          }
        ]
      },
      {
        title: 'Для арендаторов',
        description: [
          {
            text: 'Подберем помещение под ваш бизнес',
            link: '/'
          },
          {
            text: 'Предложим вам свои помещения для вашего бизнеса',
            link: '/'
          }
        ]
      },
    ],
  },
];

export const MouseOverModal = () => {
  const [isModal, setModal] = React.useState(false);
  const onClose = () => setModal(false);
  return (
    <>
      {data.map(({ categoryItem, dataProduct }, i) => (
        <div
          // href="/cons"
          key={i}
          className={s.header_low_item}
          onMouseOver={() => setModal(true)}
          onMouseLeave={() => setModal(false)}>
          <button className={s.low_item_btn}>
            <Link href='/servises' className={s.low_item_heading}>{categoryItem}</Link>
            <span className={s.low_item_icon}></span>
          </button>
          <Modal
            visible={isModal}
            title="ghbdtn"
            content={<HeaderServise data={dataProduct} setModal={setModal} />}
            onClose={onClose}
          />
        </div>
      ))}
    </>
  );
}