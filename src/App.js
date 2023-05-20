import './App.css';
import {Form1} from "./components/form1";
import React from "react";

function App() {
  return (
    <div>
      <header>
      </header>
        <div>
            <h1>Контактна інформація</h1>
            <div>
                <p>Адреса:</p><p> вул. Чуднівська, 103, м. Житомир, Україна, 10005</p>
                <p>Кабінет:</p><p> 100 (Відповідальний секретар)</p>
                <p>Телефони:</p><p> +38 (0412) 24-14-27; +38 (067) 411-32-95</p>
                <p>E-mail:</p><p> pr_k@ztu.edu.ua</p>
            </div>
            <div class="heading">
                Графік роботи
            </div>
            <div>
                Приймальна комісія Житомирської політехніки працює за таким розкладом:

                Понеділок-П’ятниця – з 09:00 до 17:00
                Субота – з 09:00 до 13:00
                Неділя – вихідний
            </div>
            <Form1/>
        </div>
    </div>
  );
}

export default App;
