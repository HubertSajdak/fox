import styles from "./FactCard.module.scss";
import { useEffect, useState } from "react";
export interface FactCardProps {
	icon: React.ReactNode;
	stopValue: number;
	startValue: number;
	title: string;
	start: boolean;
	aosDelay?: number;
}
const FactCard = ({ icon, title, start, startValue, stopValue, aosDelay = 0 }: FactCardProps) => {
	const [count, setCount] = useState(startValue);

	useEffect(() => {
		if (!start || count === stopValue) return;
		const speed = Math.round(stopValue / 700);
		const counter = setTimeout(() => {
			if (count < stopValue) {
				setCount(count + speed);
			}
		}, 1);
		return () => {
			clearTimeout(counter);
		};
	}, [count, start, stopValue]);

	return (
		<div className={styles.factCard} data-aos="fade-up" data-aos-delay={`${aosDelay}`} data-aos-offset="350">
			<div className={styles.icon}>{icon}</div>
			<h5>{count}</h5>
			<h6>{title}</h6>
		</div>
	);
};

export default FactCard;
