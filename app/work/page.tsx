import style from './Work.module.scss'
import Card_post from '@/apps/card_post/Card';
import Masive_worker from '@/apps/masive/work/masive_worker';
import Link from "next/link";
const Work = () => {

  return (
    <div className={style.Page}>
      <div className={style.Page_row}>
        <div className={style.text_div}>
          <h2>ВАКАНСИИ</h2>
          <p className={style.p}> Вакансии<br />
            Компания "MAIKURO" - мультибрендовое стабильное предприятие автомобильного бизнеса. Мы работаем на рынке более четверти века.
            Продажи своих автомобилей нам доверяют следующие марки: TOYOTA, LEXUS, HYUNDAI, GENESIS, KIA, SKODA, MITSUBISHI, MAZDA, NISSAN, INFINITI,
            HAVAL, GEELY, VOLKSWAGEN, RENAULT, CHERY, CHANGAN, OPEL, PEUGEOT, CITROEN.</p>
          <div className={style.text_blocks}>
            <div className={style.text_block_l}>
              <p className={style.p}><b>Карьера в компании друзей</b><br />
              </p>

              <p className={style.p}>
                Мы всегда способствуем продвижению своих сотрудников по "карьерной лестнице". В нашей компании успешно строят свою карьеру более 900 сотрудников.
              </p>
            </div>
            <div className={style.text_block}>
              <p className={style.p}><b>Стабильная своевременная зарплата</b><br />
              </p>
              <p className={style.p}>
                Мы предлагаем официальное трудоустройство, полный социальный пакет, уровень заработной платы "выше рынка".
              </p>
            </div>
<Link href="/contact" className={style.cards}>{Masive_worker.map((card,i)=><Card_post title={card.title} text={card.text} img={card.img}/>)}</Link>

          </div>


        </div>
      </div>
    </div>
  );
};

export default Work;