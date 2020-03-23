import './SignUpModal.scss';
import React, {Component} from 'react';
import axios from 'axios';
import {formatDate} from '~/modules/WorkshopsCatalog/helpers';
import {PRICE} from '~/assets/infoVars';
import {Link} from "react-router-dom";
import crossImg from '~/assets/images/cross.png';

class SignUpModal extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState = {
        name: '',
        email: '',
        phone: '',
        promo: ''
    };

    state = this.initialState;

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            workshop: this.props.workshop.id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            promo: this.state.promo
        };
        axios.post("https://pushkareva.art/api/apply", data)
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

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };


    render() {
        if (!this.props.showModal) {
            return null;
        }
        return (
            <div className="sign-up-modal">
                <div className="sign-up-modal-close">
                    <button onClick={this.onClose}><img src={crossImg} alt="X"/></button>
                </div>
                <h2>ЗАПИСЬ НА ЗАНЯТИЕ</h2>
                <div className="sign-up-modal-content">
                    <p>Мастеркласс: {this.props.workshop.header}</p>
                    <p>{formatDate(this.props.workshop.date)} | {this.props.workshop.time}, {this.props.workshop.place}</p>
                    <form onSubmit={this.handleSubmit}>
                        <p><input type="text" name="name" placeholder="Ваше имя" pattern="[A-Za-zА-Яа-яёЁ]{1,60}"
                                  title="Введите имя кириллицей или латиницей, имя должно содержать не менее 1 и не более 60 символов"
                                  value={this.state.name} onChange={this.handleChange} required/>
                        </p>
                        <p><input type="email" name="email" placeholder="Ваш электронный адрес"
                                  pattern="([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?"
                                  title="Введите адрес электронной почты, например: mymail@email.ru или email@mymail.com"
                                  value={this.state.email} onChange={this.handleChange} required/>
                        </p>
                        <p><input type="text" name="phone" placeholder="Ваш номер телефона" pattern="[\+?\d]{11,12}"
                                  title="Введите номер телефона в формате 8xxxxxxxxxx или +7xxxxxxxxxx без пробелов"
                                  value={this.state.phone} onChange={this.handleChange} required/>
                        </p>
                        <p><input type="text" name="promo" placeholder="Промокод или подарочный сертификат"
                                  value={this.state.promo} onChange={this.handleChange}/>
                        </p>
                        <p>
                            <button type="submit">ОТПРАВИТЬ</button>
                        </p>
                        <p className="policy-agreement">Нажимая «Отправить» Вы соглашаетесь <br/> c<Link
                            to="/policy" target="_blank"> Политикой
                            конфиденциальности</Link></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUpModal;