import './FeedbackForm.scss';
import React, {Component} from 'react';
import axios from 'axios';

class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    state = this.initialState;

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        };
        e.target.reset();
        axios.post("https://pushkareva.art/api/feedback", data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
        this.setState(() => this.initialState);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="feedback-form">
                <p><input type="text" name="name" placeholder="Ваше имя" pattern="[A-Za-zА-Яа-яёЁ]{1,60}"
                          title="Введите имя кириллицей или латиницей, имя должно содержать не менее 1 и не более 60 символов"
                          value={this.state.name} onChange={this.handleChange} required/></p>
                <p><input type="email" name="email" placeholder="Ваш электронный адрес"
                          pattern="([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?"
                          title="Введите адрес электронной почты, например: mymail@email.ru или email@mymail.com"
                          value={this.state.email} onChange={this.handleChange} required/></p>
                <p><input type="text" name="phone" placeholder="Ваш номер телефона" pattern="[\+?\d]{11,12}"
                          title="Введите номер телефона в формате 8xxxxxxxxxx или +7xxxxxxxxxx без пробелов"
                          value={this.state.phone} onChange={this.handleChange} required/></p>
                <p><textarea name="message" cols="40" rows="7" placeholder="Текст Вашего сообщения"
                             value={this.state.message} onChange={this.handleChange}>
                </textarea></p>
                <p><input className="input-submit-button" type="submit" value="ОТПРАВИТЬ"/></p>
            </form>
        );
    }
}

export default FeedbackForm;
