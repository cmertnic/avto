import style from './Tech_obsl.module.scss'
const Tech_obsl = () => {

  return (
    <div className={style.Page}>
      <form className={style.Page_row}>
        <div className={style.text_div}>
<p className={style.p }>Неотъемлемая часть содержания любого автомобиля - это его техническое обслуживание. 
Преимущества проведения технического обслуживания автомобиля вне зависимости от пробега и возраста авто, стоит отдать сервисным центрам авторизованных дилеров. 
Для новых машин это обязательное условия сохранения гарантии. Для автомобилей с пробегом - качество предоставляемых услуг и запчастей.</p>

<p className={style.p }>Диагностика проводится планово и сезонно. Рекомендуется обратиться в сервис, если вы преодолевали 
сложные трассы или условия эксплуатации автомобиля были экстремальными, 
- все это могло отразиться на его работоспособности (Например: высокие или низкие температуры).</p>

<p className={style.p }>Регулярное прохождение ТО обеспечит безопасность и поможет сократить расходы на возможный ремонт.</p>

<p className={style.p }>Автохолдинг MAIKURO предлагает полный спектр услуг по ремонту и обслуживанию ваших автомобилей. 
Современная ремонтная зона, профессиональное фирменное оборудование для диагностики, осмотра и ремонта автомобиля. </p>

<p className={style.p }>По желанию клиента мы можем провести не только техническое обслуживание гарантийного автомобиля, 
но и установить на него любое дополнительное оборудование, аксессуары, произвести керамическое покрытие или тонировку автомобиля. </p>

<p className={style.p }>Вы доверяете автомобиль в профессиональные руки. </p>

<p className={style.p }>За нашими плечами огромный опыт работы, а наши мастера на постоянной основе проходят обучающие курсы повышения квалификации по представленным 
у нас брендам, а также со специалистами Южно-Уральского государственного университета.  </p>
        </div>
        <div className={style.inputs_div}>
          <div className={style.input_div}><p className={style.p2}>Почта</p>  <input autocomplete="on" type="Email" required placeholder="Email" className={style.input} /></div>
          <div className={style.input_div}><p className={style.p3}>Номер телефона</p> <input autocomplete="on" type="tel" required placeholder="number" className={style.input} /></div>
          <div className={style.input_div}><p className={style.p2}>Имя</p>
          <input type="text" autocomplete="on" placeholder="Илья"   className={style.input} />
          </div>

        </div>          
        <div className={style.text_div2}>
          <p className={style.p}>место для формы</p>
        </div>
               <div className={style.input_div_submit}>
               <textarea name="" id=""   placeholder="number" cols="30" rows="10" maxlength='2000' className={style.input2}></textarea>
        <input type="submit" className={style.submit} />
        </div>
      </form>  
    </div>
  );
};

export default Tech_obsl;