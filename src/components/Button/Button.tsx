import styles from "./Button.module.scss";
export interface ButtonProps {
	variant: "primary" | "secondary";
	onClick?: () => void | (() => Promise<void>);
	children: React.ReactNode;
	type: "button" | "submit" | "reset" | undefined;
}
const Button = ({ variant, onClick, children, type }: ButtonProps) => {
	return (
		<button type={type} className={variant === "primary" ? styles.primary : styles.secondary} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
