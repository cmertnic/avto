import style from './Zapac_det.module.scss'
import Card_post from '@/apps//card_post/Card';
import Link from "next/link";
import Masive_postav from '@/apps/masive/postav/masive_postav';
import Masive_postav2 from '@/apps/masive/postav/masive_postav2';
import Masive_postav3 from '@/apps/masive/postav/masive_postav3';
import Masive_postav4 from '@/apps/masive/postav/masive_postav4';
import Masive_postav5 from '@/apps/masive/postav/masive_postav5';
import Masive_postav6 from '@/apps/masive/postav/masive_postav6';
import Masive_postav7 from '@/apps/masive/postav/masive_postav7';
import Masive_postav8 from '@/apps/masive/postav/masive_postav8';
import Masive_postav9 from '@/apps/masive/postav/masive_postav9';
import Masive_postav10 from '@/apps/masive/postav/masive_postav10';
import Masive_postav11 from '@/apps/masive/postav/masive_postav11';
import Masive_postav12 from '@/apps/masive/postav/masive_postav12';
const Zapac_det = () => {

  return (
    <div className={style.Page}>
      <form className={style.Page_row}>
      <div className={style.text_div3}>
        <h2>Наши поставщики</h2>          
        </div>
        <div className={style.cards}>
<Link href="https://armtek.ru/armtek.ru">{Masive_postav.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://autoeuro.ru/">{Masive_postav2.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://berg.ru/">{Masive_postav3.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://emex.ru/">{Masive_postav4.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://exist.ru/">{Masive_postav5.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://forum-auto.ru/">{Masive_postav6.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://ad-z.ru/">{Masive_postav7.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://mc-auto.ru/">{Masive_postav8.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="http://next-auto.pro/">{Masive_postav9.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://www.part-kom.ru/">{Masive_postav10.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://chel.rossko.ru/">{Masive_postav11.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
<Link href="https://the-parts.ru/">{Masive_postav12.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>
</div>
        <div className={style.text_div3}>
        <h2>Заказать детали</h2>          
        </div>

        <div className={style.inputs_div}>
          <div className={style.input_div}><p className={style.p2}>Почта</p> <input type="Email" required placeholder="Email" className={style.input} /></div>
          <div className={style.input_div}><p className={style.p3}>Номер телефона</p> <input type="tel" required placeholder="number" className={style.input} /></div>
          <div className={style.input_div}><p className={style.p2}>Имя</p>
          <input type="text" placeholder="Илья" className={style.input} />
          </div>

        </div>          
        <div className={style.text_div2}>
          <p className={style.p}>место для формы</p>
        </div>
               <div className={style.input_div_submit}>
               <textarea name="" id="" placeholder="number" cols="30" rows="10" maxlength='2000' className={style.input2}></textarea>
        <input type="submit" className={style.submit} />
        </div>
      </form>  
    </div>
  );
};

export default Zapac_det;