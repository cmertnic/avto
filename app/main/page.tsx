import style from './Main.module.scss'
import Masive_avto from '@/apps/masive/avto/masive_avto';
import Masive_avto2 from '@/apps/masive/avto/masive_avto2';
import Masive_avto3 from '@/apps/masive/avto/masive_avto3';
import Masive_avto4 from '@/apps/masive/avto/masive_avto4';
import Card from '@/apps/card/Card';
const Main = () => {

  return (
    <div className={style.main}>
      <div className={style.main_row}>
        <div className={style.text_div}>
          <h2>О нас</h2>
          <p className={style.p}>Наша компания была основана с целью предоставлять высококачественный<br />сервис и уникальный опыт покупки автомобиля.
            Мы стремимся обеспечить<br /> полную удовлетворенность наших клиентов,
            предлагая широкий выбор<br /> автомобилей различных марок, моделей и комплектаций.</p>
        </div>
        <div className={style.text_div}>
          <h2>Наши товары</h2>
          <div className={style.cards}>
            {Masive_avto.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type} engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
            {Masive_avto2.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type} engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
            {Masive_avto3.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type} engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
            {Masive_avto4.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type} engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
          </div>
        </div>
        <div className={style.text_div}>
          <h2>Ассортимент</h2>
          <p className={style.p}>У нас найдут авто по душе клиенты с разными финансовыми возможностями.<br /> В продаже новые и с пробегом, в наличии и под заказ:
            Cadillac, Chery, Chevrolet, Fiat, Ford, Geely, Hyundai, Jaguar, Land Rover, Mitsubishi, Jeep, Škoda, Subaru, Volkswagen, Chevrolet Niva, УАЗ.<br />
            Полностью представлены модельные ряды каждой марки – новинки и комплектации из прошлых сезонов.</p>
        </div>
        <div className={style.text_div}>
          <h2>Почему стоит обратиться в автосалон «MAIKURO»?</h2>
          <p className={style.p}>Преимущества сотрудничества с нами:</p>
          <div className={style.padding} >
            <p className={style.p}>
              1. Продажа авто за наличные и в кредит.<br />
              2. Гарантийное и техническое обслуживание. Есть собственные точки автосервиса, где проведут кузовной ремонт, выполнят тюнинг, установят дополнительное оборудование.<br />
              3. Trade-In. Меняем старые авто на новые по всем правилам. По этой же программе можно купить и подержанное авто по привлекательной цене в идеальном техническом состоянии.<br />
              4. Оформляем Каско и ОСАГО.<br />
              5. Предоставляем авто в лизинг по выгодным ценам.<br />
            </p>
          </div>
          <div className={style.padding}>
            <p className={style.p}>
              Записывайтесь на тест-драйв по телефонам на сайте или приезжайте в наши автосалоны.
            </p>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Main;