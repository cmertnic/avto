import style from './Osago.module.scss'
const Osago = () => {

  return (
    <div className={style.Page}>
      <div className={style.Page_row}>
        <div className={style.text_div}>
          <p className={style.p}><b>Страхование ОСАГО онлайн</b><br /> 
          <p className={style.p}>Вы можете застраховать свой автомобиль в ведущих страховых компаниях, которые сотрудничают с нами.  </p>
          <p className={style.p}>Преимущества страхования у нас:</p>
<li>Вы можете застраховать, как имеющейся у вас автомобиль, так и только что купленный у нас;</li>
<li>Вы можете застраховать свой автомобиль прямо в салоне еще до постановки ТС на учет в ГИБДД;</li>
<li>имеются специальные программы, разработанные для нашей компании по тарифам ниже, чем в страховых компаниях;</li>
<li>мы всегда помогаем на этапе урегулирования убытков. Мы не оставляем наших клиентов один на один со страховой компанией, а сопровождаем в течение всего периода страхования;</li>
<li>в случае наступления страхового события, ваш автомобиль будет направлен на ремонт в специализированную кузовной цех</li>
</p>

<p className={style.p}><b>В нашей компании Вы можете приобрести:</b>
<li>ОСАГО - полис обязательного страхования автогражданской ответственности; страхование ответственности 
  перед третьими лицами за вред, причиненный имуществу, жизни и здоровью людей при эксплуатации вашего автомобиля;</li>
<li>ДСАГО - полис добровольного страхования автогражданской ответственности, позволяющий расширить сумму страхового покрытия;</li>
<li>КАСКО - страхование имущественных рисков, таких как угон (утрата автомобиля в результате угона или хищения), ущерб - гибель и повреждение автомобиля;</li>
<li>риск «Несчастный случай» - причинение вреда жизни и здоровью водителей и/или пассажиров, находящихся в момент ДТП в салоне автомобиля.</li>
</p>

<p className={style.p}><b>Страховые компании:</b>
<li>АО «АлфаСтрахование»</li>
<li>САО «ВСК»</li>
<li>ПАО «АСКО – СТРАХОВАНИЕ»</li>
<li>ООО «Страховая компания Екатеринбург»</li>
<li>СПАО «Ингосстрах»</li>
<li>АО « Группа Ренессанс Страхование»</li>
<li>ООО «Зетта Страхование»</li>
<li>СПАО «РЕСО-Гарантия»</li>
<li>ПАО СК «Росгосстрах»</li>
<li>ООО « Страховая Компания «Согласие»</li>
<li>ОА «ГСК «Югория»</li>
</p>
        </div>
      </div>
    </div>
  );
};

export default Osago;