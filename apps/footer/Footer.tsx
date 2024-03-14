import Image from "next/image";
import Link from "next/link";
import style from "@/apps/footer/Footer.module.scss";
import clock from "@/apps/footer/img/clock-circle-svgrepo-com 1.svg";
import email from "@/apps/footer/img/email-svgrepo-com 1.svg";
import news from "@/apps/footer/img/news-svgrepo-com 1.svg";
import phone from "@/apps/footer/img/phone-plus-svgrepo-com 1.svg";
import logo from "@/apps/public_img/logo.png";
import Odn from "@/apps/footer/img/odnoklassniki_778rm4lwhn6w 1.png";
import Vk from "@/apps/footer/img/vk-svgrepo-com 1.png";
const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.line}></div>
			<div className={style.divs_top}>
				<div className={style.div_clock}>
					<div className={style.clock_img}>
						<Image src={clock} alt="clock" />
					</div>
					<div className={style.clock_text}>
						<p className={style.clock}>Пн-Сб: 09:00-19:00</p>
						<p className={style.p}>Вс: 09:00-18:00</p>
					</div>

				</div>
				<div className={style.div_news}>
					<div className={style.clock_img}>
						<Image src={news} alt="politice_confindenc" />
					</div>
					<div className={style.clock_text}>
					<Link href='/politice_conf'>
						<Link href=""><p className={style.clock}>Политика</p></Link>
						<Link href='/politice_conf'><p className={style.p}>конфинденциальности</p></Link>
						</Link>
					</div>
				</div>
				<div className={style.div_logo}>
				<Link href='/main'>
					<Image src={logo} alt="logotip" />
				</Link>
				</div>
			</div>
			<div className={style.divs_down}>
				<div className={style.div_clock}>
					<div className={style.clock_img}>
						<Image src={phone} alt="phone" />
					</div>
					<div className={style.clock_text}>
						<Link href="tel:+79000889691"><p className={style.p}> +7 (999)999-99-99</p></Link>
					</div>

				</div>
				<div className={style.div_news}>
					<div className={style.clock_img}>
						<Image src={email} alt="email" />
					</div>
					<div className={style.clock_text}>
						<Link href=" mailto:Lskutin@yandex.ru "><p className={style.p}>Lskutin@yandex.ru</p>	</Link>
					</div>

				</div>
				<div className={style.VKiOdn}>
					<div className={style.VK}><Link href="https://vk.com/lskytinsus"><Image src={Vk} alt="Vk" /></Link></div>
					<div><Link href="https://example.com"><Image src={Odn} alt="Odnoklasniki" /></Link></div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;