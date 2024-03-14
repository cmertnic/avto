import Image from "next/image";
import style from "@/apps/card_post/Card_post.module.scss";
const Card_post = ({ title, img, text, }) => {
	return (
		<div className={style.Card}>		
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

	);
}

export default Card_post;