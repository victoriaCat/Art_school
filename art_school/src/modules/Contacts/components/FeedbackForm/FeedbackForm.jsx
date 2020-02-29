import './FeedbackForm.scss';
import React from 'react';

const FeedbackForm = () => {
    return (
        <form action="#" method="post">
            <fieldset>
                <p><input type="text" id="name" placeholder="Ваше имя" required/></p>
                <p><input type="email" id="email" placeholder="Ваш электронный адрес" required/></p>
                <p><input type="text" id="phone" placeholder="Ваш номер телефона" required/></p>
                <p><textarea id="message" cols="100" rows="10" placeholder="Текст Вашего сообщения">
                </textarea></p>
            </fieldset>
            <p><input type="submit" value="ОТПРАВИТЬ"/></p>
        </form>
    );
};

export default FeedbackForm;
