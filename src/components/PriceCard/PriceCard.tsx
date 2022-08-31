import BaseLink from "../BaseLink/BaseLink";
import styles from "./PriceCard.module.scss";

export interface PriceCardProps {
	title: string;
	price: string;
	isSpecialOffer?: boolean;
	list: {
		id: number;
		text: string;
	}[];
	aosDelay?: number;
	aosAnimation?: string;
	aosOffset?: number;
}
const PriceCard = ({
	title,
	price,
	list,
	isSpecialOffer = false,
	aosAnimation,
	aosDelay = 0,
	aosOffset = 120,
}: PriceCardProps) => {
	return (
		<div
			className={styles.priceCard}
			data-aos={aosAnimation}
			data-aos-delay={`${aosDelay}`}
			data-aos-offset={`${aosOffset}`}>
			<div className={styles.topBackground}>
				<h4>{title}</h4>
				<h3>{price}</h3>
				<h5>Per year</h5>
				{isSpecialOffer && <span>offer</span>}
			</div>
			<div className={styles.bottom}>
				<ul>
					{list.map(listItem => {
						return <li key={listItem.id}>{listItem.text}</li>;
					})}
				</ul>
				<BaseLink variant="secondary" path="#home" children="Choose Plan" />
			</div>
		</div>
	);
};

export default PriceCard;
