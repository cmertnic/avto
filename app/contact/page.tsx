import style from './Contact.module.scss'
const Contact = () => {

  return (
    <form className={style.Page}>
      <div className={style.Page_row}>
        <div className={style.inputs_div}>
          <div className={style.input_div}><p className={style.p}>Почта</p> <input type="Email" required placeholder="Email" className={style.input} /></div>
          <div className={style.input_div}><p className={style.p2}>Номер телефона</p> <input type="tel" required placeholder="number" className={style.input} /></div>
          <div className={style.input_div}><p className={style.p}>профессия</p>
            <input name="work" list="work" placeholder="Менеджер отдела продаж"className={style.input} />
            <datalist id="work">
              <option value="Автомеханик" />
              <option value="Автомойщик" />
              <option value="Администратор" />
              <option value="Администратор автосервиса (оператор сервис-бюро)" />
              <option value="Маркетолог" />
              <option value="Мастер-консультант" />
              <option value="Мастер цеха" />
              <option value="Менеджер отдела продаж" />
              <option value="Менеджер по продажам автомобилей с пробегом" />
              <option value="Менеджер по продажам новых автомобилей" />
              <option value="Мойщик автомобилей" />
              <option value="Специалист по маркетингу и рекламе" />
            </datalist>


          </div>
        </div>

        <div className={style.text_div}>
          <p className={style.p}>Место для заявки</p>


        </div>
      </div>

      <div className={style.input_div2}>
        <textarea name="" id="" placeholder="number" cols="30" rows="10" maxlength='2000' className={style.input2}></textarea>
        <input type="submit" className={style.submit} />
      </div>
    </form>
  );
};

export default Contact;