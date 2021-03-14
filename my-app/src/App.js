import React from "react"
import './App.css';
import Palmira from './Palmira.svg';
import Faceb from './facebook1.svg';
import Insta from './instagram1.svg';
import Viber from './viber.svg';
import Yourtube from './youtube1.svg';
import Heart from './heart.svg';
import Search from './Search.svg';
import User from './user.svg';
import Basket from './shopping-cart.svg';
import Banner_1 from './Banner1.jpg';
import Prodact_1 from './Prodact1.jpg';
import PDFcat from './PDFcat.svg';
import Elite_Portioned_Pic1 from './Elite_Portioned_Pic1.jpg';
import Elite_Portioned_Pic2 from './Elite_Portioned_Pic2.jpg';
import Elite_Portioned_Pic3 from './Elite_Portioned_Pic3.jpg';
import Elite_Portioned_Pic4 from './Elite_Portioned_Pic4.jpg';

import Flash_Tips_Pic1 from './Flash_Tips_Pic1.jpg';
import Flash_Tips_Pic2 from './Flash_Tips_Pic2.jpg';
import Flash_Tips_Pic3 from './Flash_Tips_Pic3.jpg';


function App() {
  return (

    <div>
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

<div className="Banner_1"><img src={Banner_1} className="Banner_1_img" alt="img"/></div>

<div className="Main_1">
  <div className="Main_1_1">
    <h3>ПРО НАС</h3>
    <p>Чайна компанія ТОВ «Палміра Трейд» пропонує Вам чай першокласних сортів преміум якості, з найкращих чайних плантацій світу, який ретельно відібраний в колекцію чаїв TM «Palmira».<br></br>
Чайна компанія ТОВ «Палміра Трейд» пропонує Вам чай першокласних сортів преміум якості, з найкращих чайних плантацій світу, який ретельно відібраний в колекцію чаїв TM «Palmira».<br></br>
Чайна компанія ТОВ «Палміра Трейд» пропонує Вам чай першокласних сортів преміум якості, з найкращих чайних плантацій світу, який ретельно відібраний в колекцію чаїв TM «Palmira».<br></br>
Пріоритетом нашої компанії є задоволення кінцевого споживача, тож ми гарантуємо 100% якості нашого чаю та найприємніший сервіс. Ми розробили абсолютно новий, сучасний дизайн ярликів та практичне пакування, яке не завдає клопоту під час використання. Дізнатись більше</p>
<div className="Add_Catalog"><img src={PDFcat} className="PDF_cat" alt="img"/><p>Завантажити каталог чаю Elite Portiomed Tea</p></div>
<div className="Add_Catalog"><img src={PDFcat} className="PDF_cat" alt="img"/><p>Завантажити каталог чаю Flash&Tips</p></div>
  </div>

  <div className="Main_1_2"><img src={Prodact_1} className="Prodact_1_img" alt="img"/></div>

</div>

<div className="Elite_Portioned">
<h3 className="ElitePorTea_h" >СЕРІЯ ЧАЮ ELITE PORTIONED TEA</h3>
<p className="ElitePorTea_p">Високоякісний, свіжий листовий чай, зібраний вручну на чайних плантаціях Індії, Китаю та Цейлону. Оберіть найулюбленіші смаки у зручному форматі пакування та насолоджуйтесь неповторним смаком чаю ТМ «Palmira».</p>


<div className="Elite_Portioned_Pic_All">  
<div className="Elite_Portioned_Pic_1"><img src={Elite_Portioned_Pic1} className="Portioned_img" alt="img"/><p className="Elite_Portioned_Pic_text">T-CUP, ЧАЙ ДЛЯ ЧАШКИ</p></div>
<div className="Elite_Portioned_Pic"><img src={Elite_Portioned_Pic2} className="Portioned_img" alt="img"/><p className="Elite_Portioned_Pic_text">T-POT,ЧАЙ ДЛЯ ЗАВАРНИКА</p></div>
<div className="Elite_Portioned_Pic"><img src={Elite_Portioned_Pic3} className="Portioned_img" alt="img"/><p className="Elite_Portioned_Pic_text">GRAND PACK, ВАГОВИЙ ЧАЙ</p></div>
<div className="Elite_Portioned_Pic"><img src={Elite_Portioned_Pic4} className="Portioned_img" alt="img"/><p className="Elite_Portioned_Pic_text">T-CUP BOX, ЧАЙ З САШЕ ДЛЯ ЧАШКИ</p></div>
</div></div>

<div className="Flash_Tips">
<h3 className="Flash_Tips_h" >КОЛЕКЦІЯ ЧАЮ ЗІ СВІТОВИМ ІМ'ЯМ FLASH&TIPS</h3>
<p className="Flash_Tips_p">Зустрічайте нову колекцію іменного чаю, представники якого входять у ТОП найкращих чаїв світу. Чай для цієї колекції збирають вручну з найсвіжіших бруньок (тіпсів) та верхніх листків чайного дерева. Ці представники багаторічної чайної історії завоювали своє ім’я та любов справжніх поціновувачів довершеного смаку та аромату. </p>
<div className="Flash_Tips_Pic_All">  
<div className="Flash_Tips_Pic_1"><img src={Flash_Tips_Pic1} className="Portioned_img" alt="img"/><p className="Elite_Portioned_Pic_text">T-CUP, ЧАЙ ДЛЯ ЧАШКИ</p></div>
<div className="Flash_Tips_Pic"><img src={Flash_Tips_Pic2} className="Portioned_img" alt="img"/><p className="Elite_Portioned_Pic_text">T-POT,ЧАЙ ДЛЯ ЗАВАРНИКА</p></div>
<div className="Flash_Tips_Pic"><img src={Flash_Tips_Pic3} className="Portioned_img" alt="img"/><p className="Elite_Portioned_Pic_text">T-CUP BOX, ЧАЙ З САШЕ ДЛЯ ЧАШКИ</p></div>
</div>
</div>

</div>
  );
}

export default App;
