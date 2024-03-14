import style from './Client.module.scss'
import Profile from '@/apps/Profile/Profile';
import Masive_client from '@/apps/masive/client/masive_client';
import Image from "next/image";
import Profile_image from "@/apps/header/img/profile-round-1342-svgrepo-com 1.svg";
const Client = () => {

  return (
    <div className={style.Page}>
      <div className={style.div_header_prof}>
        <div>
          {Masive_client.map((card, i) => <Profile title={card.title} text={card.text} img={card.img} town={card.town} />)}
        </div>
        <div className={style.input_div_submit2}>
          <input type="submit" value="Загрузить фото" className={style.submit} />
          <input type="submit" value="Удалить аккаунт" className={style.submit2} />
        </div>
      </div>
      <form className={style.Page_row}>
        <div className={style.inputs_div}>

          <div className={style.input_div}>
            <div>
              <p className={style.p}>ФИО</p>
              <input type="name" id="name" name="name" placeholder='Ваше ФИО' className={style.input} />
            </div>
            <div>
              <p className={style.p}>Адрес Почты</p>
              <input type="tel" id="tel" name="tel" placeholder='Primer@gmail.com' className={style.input} />
            </div>
          </div>

          <div className={style.input_div}>
            <div>
              <p className={style.p}>Пароль</p>
              <input type="password" id="pasword" name="pasword" placeholder='*****' className={style.input} />
            </div>
            <div>
              <p className={style.p}>Номер телефона</p>
              <input type="tel" id="tel" name="tel" placeholder='+79000000000' className={style.input} />
            </div>
          </div>

          <div className={style.input_div}>
            <div>
              <p className={style.p}>Серия паспорта</p>
              <input type="number" id="number" name="number" placeholder='2212' className={style.input} />
            </div>
            <div>
              <p className={style.p}>Номер паспорта</p>
              <input type="number" id="number" name="number" placeholder='213314' className={style.input} />
            </div>
          </div>
        </div>
              <div className={style.input_div_submit}>
          <input type="submit" value="Отменить" className={style.submit} />
          <input type="submit" value="Сохранить" className={style.submit2} />
        </div>
      </form>

    </div>
  );
};

export default Client;