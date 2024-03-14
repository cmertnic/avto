import style from './Test_drive.module.scss'
const Test_drive = () => {

  return (
    <div className={style.Page}>
        <form action="" className={style.Page_row}>
        <div className={style.inputs_div}>
          <div className={style.input_div}>
            <p className={style.p}>Тест драйв</p>
          </div>
          <div className={style.input_div}>
            <input type="name" id="name" name="name" placeholder='Ваше имя' autocomplete="on" className={style.input} />
            <input type="tel" id="tel" name="tel" placeholder='ваш телефон' autocomplete="on" className={style.input} />
          </div>
          <div className={style.input_div}>
            <input name="town" list="town" placeholder="Город" maxlength="20" className={style.input} />
            <datalist id="town">
              <option value="Челябинск" />
              <option value="Москва" />
              <option value="Санкт-Питербург" />
              <option value="Екатеринбург" />
              <option value="Казань" />
            </datalist>
            <input name="Salon" list="Salon" placeholder="Салон" maxlength="20" className={style.input} />
            <datalist id="Salon">
              <option value="Центральный салон" />
              <option value="Салавата Юлаева 22" />
              <option value="Братьев Кашириных 137" />
            </datalist>
          </div>
          <div className={style.input_div}>
            <input type="date" id="start" name="trip-start" value="2024-02-01" min="2024-02-01" max="2025-02-01" className={style.input} />
            <input name="avto" list="avto" placeholder="Автомобиль" maxlength="20" className={style.input} />
            <datalist id="avto">
              <option value="BMW X3" />
              <option value="Toyota Camry" />
              <option value="Ferrari 458" />
              <option value="Ford Mustang" />
              <option value="Hyundai Santa Fe" />
              <option value="Audi A4" />
              <option value="Renault Clio" />
              <option value="Land Rover Discovery" />
              <option value="Nissan Altima" />
              <option value="Mercedes E-Class" />
            </datalist>
          </div>
        </div>
        <div className={style.input_div_submit}>
          <input type="submit" className={style.submit} />
        </div>
        </form>
      </div>
  );
};

export default Test_drive;