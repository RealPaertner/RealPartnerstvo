"use client";

import React, { useState } from "react";
import "./Contact.scss";
import { sendWithTg } from "./form.actions";

// P.S. сгенерировал chatGPT
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

const fields = {
  name: "Имя",
  email: "Email",
  message: "Сообщение",
};

const Contact = () => {
  //Для отображения загрузки, пока отправляется сообщение
  const [isLoad, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    const isValidEmail = !RegExp(emailRegex).test(formData.email);
    if (isValidEmail) alert(`Неправильная почта`);

    // Проверка имени на корректность, в данном случае просто запретил все цифры
    const isValidName = !RegExp(/^[^\d]*$/g).test(formData.name);
    if (isValidName) alert(`Некорректное имя`);

    // Завершаем загрузку и закрываем выполнение функции, не вызывая отправление в телеграмм
    if (isEmpty || isValidEmail || isValidName) {
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
    <section id="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h3>СВЯЖИТЕСЬ С НАМИ</h3>
          <div className="links">
            <div className="link">
              <p>
                Создать арендный бизнес с целью получения стабильного пассивного дохода и создания финансовой независимости
              </p>
              <br />
              <p>realpartnerstvo@mail.ru</p>
              <p>+7 995 990 15 14</p>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form
            //Любое изменение поля будет вызывать оonChange и неважно какой это инпут. Все внутренние инпуты или текстареи формы попадут
            // в данный обработчик
            onChange={onFormChange}
            // Пишем кнопке type=submit и в форму прокидываем данный обработчик. Теперь нажмёшь на кнопку-  отправится форма
            onSubmit={onFormSubmit}
            className="form-wrapper"
          >
            <div className="form-item">
              {/* Учти, что очень важно, чтобы name совпадал с ключом объекта formData */}
              <input type="text" name="name" required />
              <label>Имя:</label>
            </div>
            <div className="form-item">
              {/* Учти, что очень важно, чтобы name совпадал с ключом объекта formData */}
              <input type="text" name="email" required />
              <label>Email:</label>
            </div>
            <div className="form-item">
              {/* Учти, что очень важно, чтобы name совпадал с ключом объекта formData */}
              <textarea className="" name="message" required></textarea>
              <label>Комментарий:</label>
            </div>
            {/* disabled чтобы пользователь не нажал тысячу раз на кнопку пока ждёт ответ с сервера */}
            <button disabled={isLoad} type="sumbit" className="submit-btn">
              {/* В зависимости от состояния запроса меняем надписи на кнопках */}
              {isLoad ? "Загрузка..." : "Отправить"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
