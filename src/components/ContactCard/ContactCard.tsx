import { BoxProps } from "../Box/Box";
import styles from "./ContactCard.module.scss";

const ContactCard = ({ icon, text }: Omit<BoxProps, "title">) => {
	return (
		<div className={styles.contactCard}>
			<div className={styles.icon}>{icon}</div>
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default ContactCard;
