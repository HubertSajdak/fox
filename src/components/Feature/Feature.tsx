import styles from "./Feature.module.scss";
export interface FeatureProps {
	title: string;
	text: string;
	icon: React.ReactNode;
	variant: "left" | "right";
}
const Feature = ({ title, text, icon, variant }: FeatureProps) => {
	return (
		<div className={variant === "left" ? styles.featureLeft : styles.featureRight}>
			<div className={styles.titleContainer}>
				<h5>{title}</h5>
				<div className={styles.icon}>{icon}</div>
			</div>
			<p>{text}</p>
		</div>
	);
};

export default Feature;
