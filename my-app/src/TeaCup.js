import React from "react"
import { Link } from "react-router-dom";
import './TeaCup.css';
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
import Product_Pic1 from './Product.jpg';

function TeaCup() {
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
  
  <div className="Product">
<h3 className="Product_h" >ДЛЯ ЧАШКИ</h3>

<div className="Product_Pic_All"> 
<div className="Procuct_tab">
    <p className="name_1">Gunpowder</p>
    <p className="name_2">Ганпаудер</p>
    <div className="Procuct_tab_1">
<div className="Product_Pic_1"><img src={Product_Pic1} className="Product_img" alt="img"/></div>
<div className="Product_text">
    <p className="Product_text_1">Зелений чай</p>
    <p className="Product_text_2">4.85</p>
    <p className="Product_text_3">грн/шт</p>
    <div className="Button_group">
<div><input type="radio" value="Male" name="gender" /> до 10 - 5.10</div>
<div><input type="radio" value="Female" name="gender" /> від 10 - 4.85</div>
<div><input type="radio" value="Other" name="gender" /> від 100 - 4.50</div></div></div>
        </div> 
</div>
<div className="Procuct_tab">
    <p className="name_1">Gunpowder</p>
    <p className="name_2">Ганпаудер</p>
    <div className="Procuct_tab_1">
<div className="Product_Pic_1"><img src={Product_Pic1} className="Product_img" alt="img"/></div>
<div className="Product_text">
    <p className="Product_text_1">Зелений чай</p>
    <p className="Product_text_2">4.85</p>
    <p className="Product_text_3">грн/шт</p>
    <div className="Button_group">
<div><input type="radio" value="Male" name="gender" /> до 10 - 5.10</div>
<div><input type="radio" value="Female" name="gender" /> від 10 - 4.85</div>
<div><input type="radio" value="Other" name="gender" /> від 100 - 4.50</div></div></div>
        </div> 
</div>

<div className="Procuct_tab">
    <p className="name_1">Gunpowder</p>
    <p className="name_2">Ганпаудер</p>
    <div className="Procuct_tab_1">
<div className="Product_Pic_1"><img src={Product_Pic1} className="Product_img" alt="img"/></div>
<div className="Product_text">
    <p className="Product_text_1">Зелений чай</p>
    <p className="Product_text_2">4.85</p>
    <p className="Product_text_3">грн/шт</p>
    <div className="Button_group">
<div><input type="radio" value="Male" name="gender" /> до 10 - 5.10</div>
<div><input type="radio" value="Female" name="gender" /> від 10 - 4.85</div>
<div><input type="radio" value="Other" name="gender" /> від 100 - 4.50</div></div></div>
        </div> 
</div>

<div className="Procuct_tab">
    <p className="name_1">Gunpowder</p>
    <p className="name_2">Ганпаудер</p>
    <div className="Procuct_tab_1">
<div className="Product_Pic_1"><img src={Product_Pic1} className="Product_img" alt="img"/></div>
<div className="Product_text">
    <p className="Product_text_1">Зелений чай</p>
    <p className="Product_text_2">4.85</p>
    <p className="Product_text_3">грн/шт</p>
    <div className="Button_group">
<div><input type="radio" value="Male" name="gender" /> до 10 - 5.10</div>
<div><input type="radio" value="Female" name="gender" /> від 10 - 4.85</div>
<div><input type="radio" value="Other" name="gender" /> від 100 - 4.50</div></div></div>
        </div> 
</div>

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
  
  export default TeaCup;