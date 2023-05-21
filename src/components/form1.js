import React from "react";

export class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            email : '',
            theme : '',
            message : '',
        }
    }

    render() {
        return (
            <form>
                <div class="heading">
                    Зворотній зв'язок
                </div>
                <div>
                    Задай своє запитання, або повідом про порушення під час вступної кампанії
                </div>
                <div>
                    <input type="text" name="firstName" placeholder="Ім'я" value={this.state.firstName} />
                </div>
                <div>
                    <input type="email" name="email" placeholder="E-mail*" value={this.state.email} />
                </div>
                <div>
                    <input type="text" name="theme" placeholder="Тема*" value={this.state.theme} />
                </div>
                <div>
                    <textarea name="message" placeholder="Повідомлення" value={this.state.message} />
                </div>
                <div>
                    Поля відмічені * мають бути обов'язково заповненими
                </div>
                <div>
                    <input type="submit" name="send" value='Відправити' />
                </div>
            </form>
        );
    }
}