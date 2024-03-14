"use client"
import Image from "next/image";
import Link from "next/link";
import style from "@/apps/card/Card.module.scss";
import { useState } from "react";
const Card = ({ title, img, text, running, Manufacturer_country, car_brand, engine_type, engine_location, body_type, Number_of_seats, Engine_Strong }) => {
	const [ismodal, setmodal] = useState(false)


	return (
		<>
			{ismodal &&
				<div className={style.card}>
					<button onClick={() => setmodal(!ismodal)} className={style.btn_exit}>Выход</button>
					<div className={style.back__room}></div>
					<div className={style.card__content}>
						<div className={style.flex}>
							<div className={style.info}>
								<h3 className={style.title}>{title}</h3>
								<Image src={img} />
							</div>
							<ul className={style.haract}>
								<li>Пробег км: {running}</li>
								<li>Страна изготовитель: {Manufacturer_country}</li>
								<li>Марка: {car_brand}</li>
								<li>Тип топлива: {engine_type}</li>
								<li>Расположение двигателя: {engine_location}</li>
								<li>Тип кузова: {body_type}</li>
								<li>Колличество мест: {Number_of_seats}</li>
								<li>Лошадинных сил: {Engine_Strong}</li>
							</ul>
							<div className={style.conf}>
								<ul className={style.comfotr}>
									<li>Коврики<input type="checkbox" /></li>
									<li>Беспроводная зарядка<input type="checkbox" /></li>
									<li>Гидростойки<input type="checkbox" /></li>
									<li>Мультимедиа<input type="checkbox" /></li>
									<li>Диски<input type="checkbox" /></li>
									<li>LIM<input type="checkbox" /></li>
								</ul>
								<div className={style.submit}>
									<p className={style.price}>{text}</p>
									<Link href="/test_drive"><button className={style.submit__btn}>Отправить заявку</button></Link>
								</div>
							</div>
						</div>

					</div>

				</div>
			}
			<div className={style.Card} onClick={() => setmodal(!ismodal)}>

				<div className={style.image}>
					<Image src={img} alt={text} />
				</div>
				<div className={style.textdivs}>
					<div className={style.textdiv}>
						<div className={style.text}>
							{title}
						</div>
						<div className={style.text2}>
							{text}
						</div>
					</div>
				</div>

			</div>
		</>


	);
}

export default Card;

