"use client";

import React, { useState } from 'react';
import s from './ReturnForm.module.scss';
import { sendWithTg } from '../Contact/form.actions';

// const phoneRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
// const phoneRegex = /^[+]?\d{1,3}[-.\s]?\d{1,14}$/;
const phoneRegex = /^(?:\+7|8)?9\d{9}$/;


const fields = {
  name: "Имя",
  phone: "Телефон",
};


export const ReturnForm = () => {
  const [isLoad, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  // Я реализовал грамотную и удобную работу с формами, советую проанализировать и почитать про неподконтрольные инпуты
  const onFormChange = (e) => {
    //Когда мы пишем у input name="email", у e.target.name поле становится как раз email. Если ничего не напишешь - поле будет пустым.
    const { value } = e.target;
    const name = e.target.name;
    // Дестуктуризируем все поля из formData, обращаемся по ключу, который мы меняем (name, email, message) и записываем в него value
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Фукнция для отправки сообщения в форму
  const onFormSubmit = async (e) => {
    //Для того, чтоб форма не перезагружала страницу
    e.preventDefault();
    //Чтобы мы не могли кликнуть по кнопке несколько раз и отправить 10 одинаковых сообщений и дождались ответа от телеграма, что
    // сообщение доставлено или нет
    setLoad(true);

    // Кастомная простая валидация, попробуй разберись или загрузи участок кода в chatGPT, он пояснит.
    // Для простых проектов не стоит тянуть огромные библиотеки и можно сделать что-то такое.

    // Проходимся по каждому ключу объекта и ищем хотя бы один пустой ключ
    // Вообще данная валидация не нужна, тк ты сделал required на инпутах, но просто запомни данную реализацию, потому что она очень хитрая и умная
    // some ищет первый true и приостанавливает свою работу.
    // Если результат внутренних проверок false - то и some выведет false, что будет значить, что все поля существуют
    const isEmpty = Object.entries(formData).some((item) => {
      //Если поле пустое - то появится ошибка
      let check = item[1] === "";
      if (check) {
        alert(`Заполни поле ${fields[item[0]]}`);
      }
      return check;
    });

    // Проверка email на корректность, попробуй ввести что-то без собаки и он заругается
    const isValidPhone = !RegExp(phoneRegex).test(formData.phone);
    if (isValidPhone) alert(`Неправильный телефон`);
    // Завершаем загрузку и закрываем выполнение функции, не вызывая отправление в телеграмм
    if (isEmpty || isValidPhone) {
      setLoad(false);
      return;
    }

    // Если же валидация успешна - отправляем запрос
    await sendWithTg(formData)
      // Если запрос сломался - показываем ошибку
      .catch(() => alert("Что-то пошло не так, попробуйте отправить позже"))
      // очень важно сделать на finally setLoad(false).
      // Вне зависимости от ответа у нас должна снова появиться возможность нажать кнопку
      .finally(() => setLoad(false));
  };
  return (
    <div className={s.collab_subscribe}>
      <div className={s.collab_container}>
        <p>С радостью начнем сотрудничество уже сегодня!</p>
        {/* <p>Заполните форму обратной связи и мы свяжемся с вами в ближайшее время</p> */}
        <form
          onChange={onFormChange}
          onSubmit={onFormSubmit}
          className={s.collab_subscribe__form}>
          <div className={s.collab_subscribe__wrap}>
            <input
              className={s.collab_subscribe__input}
              type="text"
              name="name"
              placeholder="Имя *"
              required
            />
            <input
              className={s.collab_subscribe__input}
              type="text"
              name="phone"
              placeholder="Телефон *"
              required
            />
            <button disabled={isLoad} type="sumbit" className={s.collab_subscribe__btn}>
              {isLoad ? "Загрузка..." : "Отправить"}
            </button>
          </div>
          <div className={s.collab_subscribe__error}></div>
        </form>
      </div>
    </div>)
}