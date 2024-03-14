import Image from "next/image";
import Link from "next/link";
import style from '@/apps/header/Header.module.scss'
import profile from "@/apps/header/img/profile-round-1342-svgrepo-com 1.svg";
import loop from "@/apps/header/img/loupe-search-svgrepo-com 1.svg";
import logo from "@/apps/public_img/logo.png";

const Header = () => {

  return (
    <header className={style.header}>
      <div className={style.header_top}>
        <div>
          <Link href="tel:+79000889691"><p className={style.p}>Контактный номер: +7 (999)999-99-99</p></Link>
        </div>
        <div>
          <Link href="/client"><Image src={profile} alt="profile" /></Link>
        </div>
      </div>
      <div className={style.line}></div>
      <div className={style.header_center}>
        <div>
          <Link href='/main'>
            <Image src={logo} alt="logotipe" />
          </Link>
        </div>
        <div className={style.search_div}>
          <input type="text" list="search" placeholder="Поиск" className={style.search} />  <Image src={loop} id="loop" alt="loop" className={style.loop}></Image>
<datalist id="search">
              <option value="Toyota Camry, 2021"></option>
              <option value="Ferrari 458, 2009" ></option>
              <option value="Ford Mustang, 2017" ></option>
              <option value="Hyundai Santa Fe, 2020" ></option>
              <option value="BMW X3, 2022" ></option>
              <option value="Audi A4, 2023" ></option>
              <option value="Renault Clio 2022" ></option>
              <option value="Land Rover Discovery, 2022" ></option>
              <option value="Nissan Altima, 2022" ></option>
</datalist>


        </div>
      </div>
      <div className={style.header_down}>
        <div className={style.header_down_divs}>
          <div className={style.dropdown}>
            <Link href="/about"><button className={style.dropbtn}>О компании</button></Link>
            <div className={style.dropdown_content}>
              <Link href="/work">Вакансии</Link>
              <Link href="/contact">Контакты</Link>
            </div>
          </div>
          <div className={style.dropdown}>
            <button className={style.dropbtn}>Услуги</button>
            <div className={style.dropdown_content}>
              <Link href="/lizing">Лизинг</Link>
              <Link href="/osago">Осаго</Link>
              <Link href="/ur_lic">Юр.лицам</Link>
              <Link href="/credit">Кредит</Link>
              <Link href="/test_drive">Тест драйв</Link>
            </div>
          </div>
          <div className={style.dropdown}>
            <button className={style.dropbtn}>Сервис</button>
            <div className={style.dropdown_content}>
              <Link href="/garant_remont">Гарантийный ремонт</Link>
              <Link href="/tech_obsl">Тех обслуживание</Link>
              <Link href="/zapac_det">Запасные детали</Link>
            </div>
          </div>
          <div className={style.dropdown}>
            <button className={style.dropbtn}>Автомобили</button>
            <div className={style.dropdown_content}>
              <Link href="/probeg">С пробегом</Link>
              <Link href="/new">Новые</Link>
            </div>
          </div>
          <div className={style.dropdown}>
            <Link href='/politice_conf'>
              <button className={style.dropbtn} >Политика конфиденциальности</button>
            </Link>

          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;