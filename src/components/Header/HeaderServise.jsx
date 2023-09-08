import React from 'react';
import s from './Nav.module.scss';
import Link from 'next/link'

export const HeaderServise = ({ data, setModal }) => {
  const onClickListItem = () => {
    setModal(false); //Выбери какой-нибудь пункт и далее скройся
  };

  const onClose = () => setModal(false);

  return (
    <div className={s.menu_category__box}>
      <ul className={s.menu_category__list}>
        {data.map(({ title, description }, i) => (
          <li key={i} className={s.menu_category__list_item}>
            <ul>
              <li>
                <Link
                  onClick={onClickListItem}
                  rel=""
                  className={s.menu_category__list_link}
                  href="/servises"
                >
                  <span className={s.menu_category__link_text}>{title}</span>
                  {description.map((desc, j) => (
                    <div key={j} className={s.menu_category__link_preview_wrapp}>
                      <span className={s.preview_wrapp_icon}></span>
                      <span className={s.menu_category__link_preview}>
                        {desc.text}
                      </span>
                    </div>
                  ))}
                </Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <Link href="/servises" onClick={onClose} className={s.menu_category_more}>
        Посмотреть все услуги
      </Link>
    </div>
  );
};

export default HeaderServise;
