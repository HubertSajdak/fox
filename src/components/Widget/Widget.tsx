import styles from "./Widget.module.scss";
export interface WidgetProps {
	title: string;
	text: React.ReactNode;
}
const Widget = ({ title, text }: WidgetProps) => {
	return (
		<div className={styles.widget}>
			<h6>{title}</h6>
			<p>{text}</p>
		</div>
	);
};

export default Widget;
