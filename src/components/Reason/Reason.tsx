import styles from "./Reason.module.scss";
import { BoxProps as ReasonProps } from "../Box/Box";

const Reason = ({ text, icon }: Omit<ReasonProps, "title">) => {
	return (
		<div className={styles.reason}>
			<div className={styles.icon__container}>{icon}</div>
			<p>{text}</p>
		</div>
	);
};

export default Reason;
