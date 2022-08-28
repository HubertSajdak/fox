import FactCard from "../../FactCard/FactCard";
import styles from "./Facts.module.scss";
import { TbCup } from "react-icons/tb";
import { BiCodeAlt } from "react-icons/bi";
import { BsDownload, BsShare } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
const Facts = () => {
	const [isFactVisible, setIsFactVisible] = useState<boolean>(false);
	const factsRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const entry = entries[0];
				setIsFactVisible(entry.isIntersecting);
			},
			{
				threshold: 0.25,
				rootMargin: "-300px",
			}
		);
		if (factsRef.current) {
			observer.observe(factsRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section id="facts" className={styles.facts} ref={factsRef}>
			<div className={styles.wrapper}>
				<div className={styles.textContainer}>
					<h3>
						Fun <span>Facts</span>
					</h3>
					<p>
						Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem
						ipsum amet madolor sit amet.
					</p>
				</div>
				<div className={styles.factsContainer}>
					<FactCard title="coffe cups" stopValue={743} icon={<TbCup />} startValue={0} start={isFactVisible} />
					<FactCard title="lines of code" stopValue={3000} icon={<BiCodeAlt />} startValue={0} start={isFactVisible} />
					<FactCard title="downloads" stopValue={1768} icon={<BsDownload />} startValue={0} start={isFactVisible} />
					<FactCard title="shares" stopValue={5284} icon={<BsShare />} startValue={0} start={isFactVisible} />
				</div>
			</div>
		</section>
	);
};

export default Facts;
