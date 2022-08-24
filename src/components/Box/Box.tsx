import styles from "./Box.module.scss";
export interface BoxProps {
	title: string;
	text: string;
	icon: React.ReactNode;
}

const Box = ({ title, text, icon }: BoxProps) => {
	return (
		<div className={styles.box}>
			<div className={styles.icon}>{icon}</div>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default Box;
