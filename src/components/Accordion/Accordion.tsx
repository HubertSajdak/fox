import styles from "./Accordion.module.scss";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
export interface AccordionProps {
	id: number;
	question: string;
	answer: string;
}
const Accordion = ({ list }: { list: AccordionProps[] }) => {
	const [open, setOpen] = useState<number | null>(null);

	const openHandler = (id: number) => {
		if (open !== id) {
			setOpen(id);
		} else if (open === id) {
			setOpen(null);
		}
	};

	return (
		<div className={styles.accordion}>
			{list.map(item => {
				return (
					<div className={styles.card} key={item.id}>
						<div
							className={open === item.id ? `${styles.cardHeader} ${styles.headerOpen}` : styles.cardHeader}
							onClick={() => openHandler(item.id)}>
							<h5>{item.question}</h5>
							{open === item.id ? <MdClose /> : <MdKeyboardArrowDown />}
						</div>
						<div className={open === item.id ? `${styles.cardBody} ${styles.showCard}` : styles.cardBody}>
							<p>{item.answer}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Accordion;
