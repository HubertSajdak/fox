import BaseLink from "../../BaseLink/BaseLink";
import styles from "./Header.module.scss";
import phoneImg from "../../../images/mobile-1.png";
const Header = () => {
	return (
		<header id="home" className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.textContainer}>
					<p style={{ fontSize: "1.6rem" }}>With us you will</p>
					<h1>Succeed</h1>
					<p style={{ maxWidth: "400px", marginBottom: "1.6rem" }}>
						Proactively syndicate open-source e-markets after low-risk high-yield synergy. Professionally simplify
						visionary technology.
					</p>
					<BaseLink variant="secondary" path="/home">
						Read More
					</BaseLink>
				</div>
				<div className={styles.imgContainer}>
					<img src={phoneImg} alt="mobile device" />
				</div>
			</div>
		</header>
	);
};

export default Header;
