import React from 'react';
import s from './HoverWindow.module.scss';

// интерфейс для пропсов
interface ModalProps {
  visible: boolean;
  title: string;
  content: JSX.Element | string;
  // footer: JSX.Element | string;
  onClose: () => void;
}

export const Modal = ({
  visible = false,
  title = '',
  content = '',
  // footer = '',
  onClose,
}: ModalProps) => {
  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  // https://ru.reactjs.org/docs/hooks-effect.html
  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!visible) return null;

  // или возвращаем верстку модального окна
  return (
    <div className={s.modal} onClick={onClose}>
      <div className={s.modal_dialog} onClick={(e) => e.stopPropagation()}>
        <div className={s.modal_header}>
          {/* <h3 className={s.modal_title}>{title}</h3>ч */}
          {/* <span className={s.modal_close} onClick={onClose}>
            &times;
          </span> */}
        </div>
        <div className={s.modal_body}>
          <div className={s.modal_content}>{content}</div>
        </div>
        {/* {footer && <div className={s.modal_footer}>{footer}</div>} */}
      </div>
    </div>
  );
};

//            !!!ПРИМЕР использования
// export const App = () => {
//   const [isModal, setModal] = React.useState(false);
//   const onClose = () => setModal(false);
//   return (
//     <React.Fragment>
//       <button onClick={() => setModal(true)}>Клик-клик-клик</button>
//       <Modal
//         visible={isModal}
//         title="Заголовок"
//         content={<p>Что-то важное</p>}
//         // footer={<button onClick={onClose}>Закрыть</button>}
//         onClose={onClose}
//       />
//     </React.Fragment>
//   );
// };
