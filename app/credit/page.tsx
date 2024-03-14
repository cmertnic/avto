import style from './Credit.module.scss'
const Credit = () => {

  return (
    <div className={style.Page}>
      <form className={style.Page_row}>
        <div className={style.inputs_div}>
        <div className={style.input_div}> 
        <p className={style.p}>Взнос</p>
        </div>
        <div className={style.input_div}>
          <input name="srok" list="srok" placeholder="Срок"required  maxlength="5" className={style.input} />
          <datalist id="srok">
            <option value="1 год" />
            <option value="2 года" />
            <option value="3 года" />
            <option value="4 года" />
            <option value="5 лет" />
            <option value="6 лет" />
            <option value="7 лет" />
            <option value="8 лет" />
            <option value="9 лет" />
            <option value="10 лет" />
          </datalist>
           <input type="number" id="number" name="number"required placeholder='сумма взноса'   min="1" max="100000000000" className={style.input}/>          
        </div> 
        <div className={style.input_div}>
        <input type="name" id="name" name="name" placeholder='Ваше имя'required    className={style.input}/>      
        <input type="tel" id="tel" name="tel" placeholder='ваш телефон'required    className={style.input}/>      
        </div>
        <p className={style.p}>Контактная информация</p>
        <div className={style.input_div}>
        <input name="town" list="town" placeholder="Город"required  maxlength="20" className={style.input} />
          <datalist id="town">
            <option value="Челябинск" />
            <option value="Москва" />
            <option value="Санкт-Питербург" />
            <option value="Екатеринбург" />
            <option value="Казань" />
          </datalist>
          <input name="Salon" list="Salon" placeholder="Салон"required  maxlength="20" className={style.input} />
          <datalist id="Salon">
            <option value="Центральный салон" />
            <option value="Салавата Юлаева 22" />
            <option value="Братьев Кашириных 137" />
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

export default Credit;