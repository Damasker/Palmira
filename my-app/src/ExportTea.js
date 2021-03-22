import React from "react"
import './ExportTea.css';

import Palmira from './Palmira.svg';
import Faceb from './facebook1.svg';
import Insta from './instagram1.svg';
import Viber from './viber.svg';
import Yourtube from './youtube1.svg';
import Heart from './heart.svg';
import Search from './Search.svg';
import User from './user.svg';
import Basket from './shopping-cart.svg';
import Map from './Map.jpg';


function ExportTea() {
    return ( 
        <div className="Func_Main">
        <header className="Header">
          
    
    <div className="Header_2">
    
    <div className="Header_3">
      <div className="Header_3_1"><p>050 555-0-333, 096 282-88-90<br></br>Передзвоніть мені</p> </div>
      <div className="Header_3_2">
      <img src={Faceb} className="S-logo" alt="logo" />
      <img src={Insta} className="S-logo" alt="logo" />
      <img src={Viber} className="S-logo" alt="logo" />
      <img src={Yourtube} className="S-logo" alt="logo" />
         </div>
      <div className="Header_3_1"><p>Форма зворотного зв’язку</p></div>
    </div>
    
    <div className="Header_3"><img src={Palmira} className="Palmira-logo" alt="logo" /></div>
    
    <div className="Header_3">
      <div className="Header_3_4">
    <div className="Header_3_3"><p>Ua</p></div>
    <div className="Header_3_3"><p>Ru</p></div>
    <div className="Header_3_3"><p>En</p></div>
    </div>
    <div className="Header_3_4"><p>Вітаю, NAME!</p></div>
    <div className="Header_3_4">
    <img src={Search} className="l-logo" alt="logo" />
    <img src={Heart} className="l-logo_2" alt="logo" />
    <img src={Basket} className="l-logo_2" alt="logo" />
    <img src={User} className="l-logo_2" alt="logo" />
    </div>
    </div>
    </div>
    </header>
    
    
    <div className="Body_menu">
    <p>ПРО НАС</p>
    <p>ПРОДУКЦІЯ ЧАЙ</p>
    <p>САХАР</p>
    <p>АКЦІЇ</p>
    <p>ДОСАВКА ТА ОПЛАТА</p>
    <p>СПІВПРАЦЯ</p>
    <p>КОНТАКТИ</p>
    </div>

    <div className="BodyCont">
      <div className="ExportTea_d1">
      <h3 className="ExportTea_h">ЕКСПОРТ</h3>
      <p className="ExportTea_p">Чайна компанія ТОВ «Палміра Трейд» пропонує Вам чай першокласних сортів преміум якості, з найкращих чайних плантацій світу, який ретельно відібраний в колекцію чаїв TM «Palmira».<br></br>
Чайна компанія ТОВ «Палміра Трейд» пропонує Вам чай першокласних сортів преміум якості, з найкращих чайних плантацій світу, який ретельно відібраний в колекцію чаїв TM «Palmira».<br></br>
Чайна компанія ТОВ «Палміра Трейд» пропонує Вам чай першокласних сортів преміум якості, з найкращих чайних плантацій світу, який ретельно відібраний в колекцію чаїв TM «Palmira».<br></br>
Пріоритетом нашої компанії є задоволення кінцевого споживача, тож ми гарантуємо 100% якості нашого чаю та найприємніший сервіс. Ми розробили абсолютно новий, сучасний дизайн ярликів та практичне пакування, яке не завдає клопоту під час використання.
 Дізнатись більше</p>

 </div>
 <div className="ExportTea_d2"><img src={Map} className="Map" alt="img" /></div>
    </div>
    
    
    
    <footer className="Footer">
          
    
    <div className="Footer_2">
    
    <div className="Footer_3">
      <div className="Footer3_1"><p>050 555-0-333, 096 282-88-90<br></br>Передзвоніть мені<br></br>Форма зворотнього зв'язку</p> </div>
      <div className="Footer_3_1"><p>Договір оферти</p></div>
    </div>
    <div className="Footer_3"><img src={Palmira} className="Palmira-logo" alt="logo" /></div>
    <div className="Footer_3">
    <div className="Footer3_2"><div className="Footer3_2_1"></div>
      <p>Оптовим покупцям<br></br>ПРО НАС<br></br>ПРОДУКЦІЯ ЧАЙ<br></br>ЦУКОР<br></br>АКЦІІ</p>
      <div className="Footer3_2_2"><p> <br></br>ЕКСПОРТ<br></br>ДОСТАВКА ТА ОПЛАТА<br></br>СПІВПРАЦЯ<br></br>КОНТАКТИ</p></div> </div>
    </div>
    
    
    
    </div>
    </footer>
    
    </div>   
    );
}

export default ExportTea;
