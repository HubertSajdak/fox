import styles from "./FeatureCard.module.scss";
import { BoxProps as FeatureCardProps } from "../Box/Box";

const FeatureCard = ({ icon, title, text }: FeatureCardProps) => {
	return (
		<div className={styles.featureCard}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.textContainer}>
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
