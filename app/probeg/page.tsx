import style from './Probeg.module.scss'
import Masive_avto from '@/apps/masive/avto/masive_avto';
import Masive_avto2 from '@/apps/masive/avto/masive_avto2';
import Masive_avto3 from '@/apps/masive/avto/masive_avto3';
import Masive_avto4 from '@/apps/masive/avto/masive_avto4';
import Masive_avto5 from '@/apps/masive/avto/masive_avto5';
import Masive_avto6 from '@/apps/masive/avto/masive_avto6';
import Masive_avto7 from '@/apps/masive/avto/masive_avto7';
import Masive_avto8 from '@/apps/masive/avto/masive_avto8';
import Masive_avto9 from '@/apps/masive/avto/masive_avto9';
import Card from '@/apps/card/Card';
const Probeg = () => {

  return (
    <div className={style.page}>
      <div className={style.page_row}>
        <form className={style.panel}>
          <div className={style.text_div}>
            <p className={style.p}>Цена</p>
          </div >
          <div className={style.group_inputs}>

            <div className={style.group_input}>
              <p className={style.p}>От</p>
              <input type="number" id="number" name="number" placeholder='0' min="0" max="1000000000" className={style.input} />
            </div>
            <div className={style.group_input}>
              <p className={style.p}>До</p>
              <input type="number" id="number" name="number" placeholder='1000000000' min="0" max="1000000000" className={style.input} />
            </div>
          </div>

          <div className={style.text_div}>
            <p className={style.p}>Год</p>
          </div >
          <div className={style.group_inputs}>

            <div className={style.group_input}>
              <p className={style.p}>От</p>
              <input type="number" id="number" name="number" placeholder='1950' min="1950" max="2024" className={style.input} />
            </div>
            <div className={style.group_input}>
              <p className={style.p}>До</p>
              <input type="number" id="number" name="number" placeholder='2024' min="1950" max="2024" className={style.input} />
            </div>
          </div>

          <div className={style.text_div}>
            <p className={style.p}>Пробег км</p>
          </div >
          <div className={style.group_inputs}>

            <div className={style.group_input}>
              <p className={style.p}>От</p>
              <input type="number" id="number" name="number" placeholder='0' min="0" max="999999" className={style.input} />
            </div>
            <div className={style.group_input}>
              <p className={style.p}>До</p>
              <input type="number" id="number" name="number" placeholder='999999' min="0" max="999999" className={style.input} />
            </div>
          </div>

          <div className={style.text_div}>
            <p className={style.p}>Страна изготовитель</p>
          </div >
          <div className={style.group_inputs}>

            <div className={style.group_input}>
            <input name="fediration" list="fediration" placeholder="ALL"className={style.input2} />
            <datalist id="fediration">
              <option value="Germany" />
              <option value="Japan" />
              <option value="Italy" />
              <option value="USA" />
              <option value="South Korea" />
              <option value="France" />
              <option value="UK" />
              <option value="ALL" />
            </datalist>
            </div>
          </div>


          <div className={style.text_div}>
            <p className={style.p}>Марка</p>
          </div >
          <div className={style.group_inputs}>

            <div className={style.group_input}>
            <input name="MARK" list="MARK" placeholder="ALL"className={style.input2} />
            <datalist id="MARK">
              <option value="BMW" />
              <option value="Toyota" />
              <option value="Ferrari" />
              <option value="Ford" />
              <option value="Hyundai" />
              <option value="Audi" />
              <option value="Renault" />
              <option value="Land Rover" />
              <option value="Nissan" />
              <option value="Mercedes" />
              <option value="ALL" />
            </datalist>
            </div>
          </div>

          <div className={style.text_div}>
            <p className={style.p}>Тип топлива</p>
          </div >
          <div className={style.group_inputs}>

            <div className={style.group_input}>
            <input name="tipe_benz" list="tipe_benz" placeholder="ALL"className={style.input2} />
            <datalist id="tipe_benz">
              <option value="Бензин" />
              <option value="Дизель" />
              <option value="Электричество" />
              <option value="ALL" />
            </datalist>
            </div>
          </div>

          <div className={style.text_div}>
            <p className={style.p}>Расположение двигателя</p>
          </div >
          <div className={style.group_inputs}>

            <div className={style.group_input}>
            <input name="engine_location" list="engine_location" placeholder="ALL"className={style.input2} />
            <datalist id="engine_location">
              <option value="Капот" />
              <option value="Бампер" />
              <option value="ALL" />
            </datalist>
            </div>
          </div>

          <div className={style.text_div}>
            <p className={style.p}>Тип кузова</p>
          </div >
          <div className={style.group_inputs}>

            <div className={style.group_input}>
            <input name="body_tipe" list="body_tipe" placeholder="ALL"className={style.input2} />
            <datalist id="body_tipe">
              <option value="Седан" />
              <option value="Внедорожник" />
              <option value="Хэтчбек" />
              <option value="Купе" />
              <option value="Кабриолет" />
              <option value="Пикап" />
              <option value="Van" />
              <option value="Wagon" />
              <option value="Кроссовер" />
              <option value="Трак" />
              <option value="ALL" />
            </datalist>
            </div>
          </div>

        </form>
        <div className={style.cards}>
        {Masive_avto.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type}engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
        {Masive_avto2.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type}engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
        {Masive_avto3.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type}engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
        {Masive_avto4.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type}engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
        {Masive_avto5.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type}engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
        {Masive_avto6.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type}engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
        {Masive_avto7.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type}engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
        {Masive_avto8.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type}engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
        {Masive_avto9.map((card, i) => <Card title={card.title} text={card.text} img={card.img} running={card.running} Manufacturer_country={card.Manufacturer_country} car_brand={card.car_brand} engine_type={card.engine_type}engine_location={card.engine_location} body_type={card.body_type} Number_of_seats={card.Number_of_seats} Engine_Strong={card.Engine_Strong} />)}
        </div>
      </div>





    </div>
  );
};

export default Probeg;