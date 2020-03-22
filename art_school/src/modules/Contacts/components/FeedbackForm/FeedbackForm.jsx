import './FeedbackForm.scss';
import React, {Component} from 'react';
import axios from 'axios';

class FeedbackForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        };
        axios.post("https://jsonplaceholder.typicode.com/users", data)
            .then(response =>{
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }
    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <p><input type="text" name="name" placeholder="Ваше имя" value={this.state.name} onChange={this.handleChange} required/></p>
                    <p><input type="email" name="email" placeholder="Ваш электронный адрес" value={this.state.email} onChange={this.handleChange}
                              required/></p>
                    <p><input type="text" name="phone" placeholder="Ваш номер телефона" value={this.state.phone} onChange={this.handleChange}
                              required/></p>
                    <p><textarea name="message" cols="100" rows="10" placeholder="Текст Вашего сообщения"
                                 value={this.state.message} onChange={this.handleChange}>
                </textarea></p>
                <p><input type="submit" value="ОТПРАВИТЬ"/></p>
            </form>
        );
    }
}

export default FeedbackForm;
