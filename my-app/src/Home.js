import React from "react"
import { Link } from "react-router-dom";
import './Home.css';
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
import Button_l from './Button_l.svg';
import Button_r from './Button_r.svg';
import Popular_img from './Popular.jpg';
import Gifts_Pic1 from './Gifts_1.jpg';
import Gifts_Pic2 from './Gifts_2.jpg';
import Gifts_Pic3 from './Gifts_3.jpg';


function Home() {
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
<Link
  to="/teacup">ПРОДУКЦІЯ ЧАЙ</Link>
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

<div className="Popular">
<h3 className="Popular_h" >ПОПУЛЯРНІ ТОВАРИ</h3>
<p className="Popular_p">Найпопулярніші смаки чаю ТМ «Palmira» у зручному пакуванні. Ідеальне рішення для барів, ресторанів, кафе, готелів, кав’ярень.</p>
<div className="Popular_Pic_All"> 
<div className="Popular_button_l"><img src={Button_l} className="Button_l_img" alt="button"/></div> 
<div className="Popular_Pic"><img src={Popular_img} className="Popular_img" alt="img"/></div>
<div className="Popular_Pic"><img src={Popular_img} className="Popular_img" alt="img"/></div>
<div className="Popular_Pic"><img src={Popular_img} className="Popular_img" alt="img"/></div>
<div className="Popular_Pic"><img src={Popular_img} className="Popular_img" alt="img"/></div>
<div className="Popular_Pic"><img src={Popular_img} className="Popular_img" alt="img"/></div>
<div className="Popular_button_r"><img src={Button_r} className="Button_r_img" alt="button"/></div>
</div>
</div>

<div className="Gifts">
<h3 className="Gifts_h" >АКСЕСУАРИ, ПОСУД, ПОДАРУНКОВІ НАБОРИ</h3>
<p className="Gifts_p">Зручні полиці в різних кольорових рішеннях для вашого інтер’єру. Дійсно чудовий посуд для чаювання вдома або у закладі. Смачні та гарно запаковані подарункові набори для створення чудового святкового настрою близьким та друзям.</p>
<div className="Gifts_Pic_All">  
<div className="Gifts_Pic_1"><img src={Gifts_Pic1} className="Gifts_img" alt="img"/><p className="Gifts_Pic_text">АКСЕСУАРИ</p></div>
<div className="Gifts_Pic"><img src={Gifts_Pic2} className="Gifts_img" alt="img"/><p className="Gifts_Pic_text">ПОСУД</p></div>
<div className="Gifts_Pic"><img src={Gifts_Pic3} className="Gifts_img" alt="img"/><p className="Gifts_Pic_text">ПОДАРУНКОВІ НАБОРИ</p></div>
</div>
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
  <div className="Footer3_2_2"><p> <br></br>
  <Link
  to="/exporttea">ЕКСПОРТ</Link>
  <br></br>ДОСТАВКА ТА ОПЛАТА<br></br>СПІВПРАЦЯ<br></br>КОНТАКТИ</p></div> </div>
</div>



</div>
</footer>

</div>
  );
}

export default Home;
