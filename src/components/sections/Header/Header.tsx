import BaseLink from "../../BaseLink/BaseLink";
import styles from "./Header.module.scss";
import phoneImg from "../../../images/mobile-1.png";
import { useContext, useEffect, useRef } from "react";
import NavbarContext, { NavbarContextProps } from "../../../context/NavbarContext";

const Header = () => {
	const { setIsNavPosFixed } = useContext(NavbarContext) as NavbarContextProps;

	const headerRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const entry = entries[0];
				setIsNavPosFixed(entry.isIntersecting);
			},
			{
				threshold: 0.25,
			}
		);
		if (headerRef.current) {
			observer.observe(headerRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [setIsNavPosFixed]);

	return (
		<header id="home" className={styles.header} ref={headerRef}>
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
