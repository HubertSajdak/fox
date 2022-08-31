import styles from "./Box.module.scss";
export interface BoxProps {
	title: string;
	text: string;
	icon: React.ReactNode;
	aosDelay?: number;
}

const Box = ({ title, text, icon, aosDelay = 0 }: BoxProps) => {
	return (
		<div className={styles.box} data-aos="fade-up" data-aos-delay={`${aosDelay}`}>
			<div className={styles.icon}>{icon}</div>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default Box;
