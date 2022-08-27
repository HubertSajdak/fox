import styles from "./Navbar.module.scss";
import { GiFox } from "react-icons/gi";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import links from "./links";
import { useState } from "react";
const Navbar = () => {
	const [navOpen, setNavOpen] = useState<boolean>(false);
	return (
		<nav className={styles.navbar}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<GiFox />
					<p style={{ fontFamily: "Silkscreen" }}>fox</p>
				</div>
				<div className={styles.burgerMenu}>
					{navOpen ? (
						<AiOutlineClose onClick={() => setNavOpen(false)} />
					) : (
						<RiMenu3Line onClick={() => setNavOpen(true)} />
					)}
				</div>
				<div className={styles.menu}>
					<ul className={navOpen ? `${styles.menuItems} ${styles.showMenu}` : styles.menuItems}>
						{links.map(link => {
							if (link.dropdown) {
								return (
									<li key={link.id} className={styles.linkItem}>
										<a className={styles.link} href={link.path}>
											{link.label}
										</a>
									</li>
								);
							} else {
								return (
									<li key={link.id} className={styles.linkItem}>
										<a className={styles.sublinks} href={link.path}>
											{link.label}
										</a>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
