import React from "react";
import "./Accordion.scss";

const data = [
  {
    title: 'Что лучше,купить квартиру или коммерческий объект ?',
    paragraph: 'Купить коммерческий объект лучше, так как избегается необходимости в дополнительных ремонтах для сдачи в аренду, потомучто арендатор делает под себя ремонт. Так же средняя доходность комерческого объекта в Москве около 10%, а жилой недвижимости около 3% без учета амортизации ремонта.'
  },
  {
    title: 'Какой порог входа в покупке коммерческой недвижимости ?',
        paragraph: 'Ориентир по минимальному порогу входа в коммерческую недвижимость от 10 млн.'
  },
  {
    title: 'Можно ли взять помещение в ипотеку ?',
        paragraph: 'Да, есть определенные банки которые дают выгодные условия.'
  },
  {
    title: 'На какой срок заключается договор аренды ?',
        paragraph: 'В среднем на 5 лет, но все зависит от стратегии сдачи в аренду. Бывают контракты на 1, 3, 5, 10 лет.'
  },
  {
    title: 'Может ли арендатор съехать во время действующего договора ?',
        paragraph: 'Да, может. Но обычно в договоре предусмотрены условия рассторжения договора за 3 месяца. Каждый арендатор обязан уведомить заранее. За этот период обычно находится другой арендатор.'
  },
]

const AccordionItem = ({ paragraph, title }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <div
      className={`accordion-item ${opened ? "accordion-item--opened" : ""}`}
      onClick={() => {
        setOpened(!opened);
      }}
    >
      <div className="accordion-item__line">
        <span className="accordion-item__icon" />
        <h3 className="accordion-item__title">{title}</h3>
      </div>
      <div className="accordion-item__inner">
        <div className="accordion-item__content">
          <p className="accordion-item__paragraph">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="wrapper">
      <div className="text">
        <h3>Популярные вопросы</h3>
      </div>

      <ul className="accordion-list">
        {data.map((item, key) => (
          <li className="accordion-list__item" key={key}>
            <AccordionItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
