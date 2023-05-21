import './App.css';
import {Form1} from "./components/form1";
import React from "react";

function App() {
  return (
    <div>
      <header>
      </header>
        <div class='container'>
            <div class="container2">
                <h1>Контактна інформація</h1>
                <div>
                    <p><strong>Адреса:</strong> вул. Чуднівська, 103, м. Житомир, Україна, 10005</p>
                    <p><strong>Кабінет:</strong> 100 (Відповідальний секретар)</p>
                    <p><strong>Телефони:</strong> +38 (0412) 24-14-27; +38 (067) 411-32-95</p>
                    <p><strong>E-mail:</strong> <a title="Написати листа" href="mailto:pr_k@ztu.edu.ua">pr_k@ztu.edu.ua</a></p>
                </div>
                <div className="map">
                    <iframe width="720" height="400"
                            src="//maps.google.com/maps?q=%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%BD%D0%B8%D0%B9%20%D1%83%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%20%C2%AB%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D1%8C%D0%BA%D0%B0%20%D0%BF%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0%C2%BB&amp;output=embed"
                            title=""></iframe>
                </div>
                <div class="heading">
                    Графік роботи
                </div>
                <div>
                    Приймальна комісія Житомирської політехніки працює за таким розкладом:
                    <ul>
                        <li>Понеділок-П’ятниця – з 09:00 до 17:00</li>
                        <li>Субота – з 09:00 до 13:00</li>
                        <li>Неділя – вихідний</li>
                    </ul>
                </div>
                <Form1 />
            </div>
        </div>
        <footer>
            <p>© 2023 Приймальна комісія Житомирської політехніки.
                <a href="https://ztu.edu.ua/">Державний університет «Житомирська політехніка»</a></p>
        </footer>
    </div>
  );
}

export default App;
