import style from './Garant_remont.module.scss'
const Garant = () => {

  return (
    <div className={style.Page}>
      <div className={style.Page_row}>
        <div className={style.text_div}>
          <p className={style.p}> Срок гарантийного ремонта установлен производителями и указан
            в фирменном гарантийном талоне. Гарантия распространяется на изделия, использующиеся только для личных, семейных, домашних нужд.</p>

          <p className={style.p}>При сдаче техники в ремонт обязательно нужно проверить фирменный гарантийный талон. В нем должны быть указаны:</p>

          <p className={style.p}>
            <li>дата продажи товара,</li>
            <li>серийный номер изделия,</li>
            <li>штамп торгующей организации,</li>
            <li>подпись продавца,</li>
            <li>модель и серийный номер изделия.</li></p>

          <p className={style.p}>Гарантийный ремонт в сервисном центре обычно проводится в течение трех-пяти дней при наличии необходимых
            запасных частей на складе. В случае их отсутствия срок ремонта может быть продлен до получения необходимых деталей от поставщика.
          </p>

          <p className={style.p}>Сервисный центр оставляет за собой право отказать в гарантийном ремонте в случаях:
          </p>

          <p className={style.p}>
            <li>неправильного заполнения гарантийного талона;</li>
            <li>при наличии механических повреждений;</li>
            <li>нарушения сохранности гарантийных пломб;</li>
            <li>не соблюдения правил установки, подключения изделия;</li>
            <li>повреждения техники, вызванного сверхнормативными отклонениями параметров электро-, водоснабжения от номинальных значений;</li>
            <li>использования техники на предприятиях, связанных с осуществлением предпринимательской деятельности.</li></p>

          <p className={style.p}>Сервисный центр имеет право перевести ремонт в платный с обязательным
            уведомлением владельца, если при вскрытии и техническом обследовании аппарата обнаруживается:
          </p>
          <p className={style.p}>
            <li>повреждение в результате неправильной эксплуатации;</li>
            <li>изменение конструкции, не указанное в технической документации;</li>
            <li>наличие внутри предметов, не являющихся частями данного аппарата;</li>
            <li>повреждение жидкостями, насекомыми;</li>
            <li>дефекты, вызванные стихийными бедствиями (в том числе последствия разряда молнии).</li></p>

          <p className={style.p}>Прежде чем вызвать специалиста сервисного центра, внимательно прочитайте инструкцию по эксплуатации изделия.
            Если изделие окажется исправным, услуги специалиста необходимо оплатить по действующему прейскуранту СЦ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Garant;