import React from "react";

export class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            email : '',
            theme : '',
            message : '',
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInput (event)
    {
        this.setState(
            {[event.target.name] : event.target.value}
        );
    }
    handleSubmit (event)
    {
        console.log(this.state.firstName + ' ' + this.state.email + ' ' + this.state.theme + ' ' + this.state.message);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="heading">
                    Зворотній зв'язок
                </div>
                <div class="parag">
                    Задай своє запитання, або повідом про порушення під час вступної кампанії
                </div>
                <div>
                    <input type="text" name="firstName" placeholder="Ім'я" value={this.state.firstName} onChange={this.handleInput} />
                </div>
                <div>
                    <input type="email" name="email" placeholder="E-mail*" value={this.state.email} onChange={this.handleInput} required />
                </div>
                <div>
                    <input type="text" name="theme" placeholder="Тема*" value={this.state.theme} onChange={this.handleInput} required />
                </div>
                <div>
                    <textarea cols="40" rows="10" name="message" placeholder="Повідомлення" value={this.state.message} onChange={this.handleInput} />
                </div>
                <div class="comment">
                    Поля відмічені * мають бути обов'язково заповненими
                </div>
                <div>
                    <input type="submit" name="send" value='Відправити' />
                </div>
            </form>
        );
    }
}