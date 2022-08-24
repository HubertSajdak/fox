import styles from "./BaseLink.module.scss";

export interface BaseLinkProps {
	variant: "primary" | "secondary";
	path: string;
	children: React.ReactNode;
}
const BaseLink = ({ variant, path, children }: BaseLinkProps) => {
	return (
		<a className={variant === "primary" ? styles.primary : styles.secondary} href={path}>
			{children}
		</a>
	);
};

export default BaseLink;
