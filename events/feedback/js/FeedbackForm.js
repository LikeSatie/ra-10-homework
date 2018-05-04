'use strict';

const FeedbackForm = props => {
    let salutationField, nameField, emailField, subjectField, messageField, snacksField;

  const submitData = event => {
        event.preventDefault();
        const form = {
            salutation: salutationField.querySelector('input[type=radio]:checked').value,
            name: nameField.value,
            subject: subjectField.value,
            message: messageField.value,
            email: emailField.value,
            snacks: Array.from(snacksField.querySelectorAll('input[type=checkbox]:checked')).map(elem => elem.value)
        }
        props.onSubmit(JSON.stringify(form));
    }

    return (
        <form className="content__form contact-form">
            <div className="testing">
                <p>Чем мы можем помочь?</p>
            </div>
            <div ref={elem => salutationField = elem} className="contact-form__input-group">
                <input defaultChecked={props.data.salutation === 'Мистер'} className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер"/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>

                <input defaultChecked={props.data.salutation === 'Мисис'} className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис"/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>

                <input defaultChecked={props.data.salutation === 'Мис'} className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис"/>
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="name">Имя</label>
                <input ref={elem => nameField = elem} className="contact-form__input contact-form__input--text" defaultValue={props.data.name} id="name" name="name" type="text"/>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
                <input ref={elem => emailField = elem} className="contact-form__input contact-form__input--email" defaultValue={props.data.email} id="email" name="email" type="email"/>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
                <select ref={elem => subjectField = elem} className="contact-form__input contact-form__input--select" defaultValue={props.data.subject} id="subject" name="subject">
                    <option>У меня проблема</option>
                    <option>У меня важный вопрос</option>
                </select>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
                <textarea ref={elem => messageField = elem} className="contact-form__input contact-form__input--textarea" defaultValue={props.data.message} id="message" name="message" rows="6" cols="65"></textarea>
            </div>
            <div ref={elem => snacksField = elem} className="contact-form__input-group">
                <p className="contact-form__label--checkbox-group">Хочу получить:</p>

                <input className="contact-form__input contact-form__input--checkbox" defaultChecked={props.data.snacks.indexOf('пицца') !== -1} id="snacks-pizza" name="snacks" type="checkbox" value="пицца"/>
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>

                <input className="contact-form__input contact-form__input--checkbox" defaultChecked={props.data.snacks.indexOf('пирог') !== -1} id="snacks-cake" name="snacks" type="checkbox" value="пирог"/>
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
            </div>
            <button className="contact-form__button" onClick={submitData} type="submit">Отправить сообщение!</button>
            <output id="result" />
        </form>
    );
}