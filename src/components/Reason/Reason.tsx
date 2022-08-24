import styles from "./Reason.module.scss";
export interface ReasonProps {
	text: React.ReactNode;
	icon: React.ReactNode;
}
const Reason = ({ text, icon }: ReasonProps) => {
	return (
		<div className={styles.reason}>
			<div className={styles.icon__container}>{icon}</div>
			<p>{text}</p>
		</div>
	);
};

export default Reason;
