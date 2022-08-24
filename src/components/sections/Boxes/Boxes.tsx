import Box from "../../Box/Box";
import styles from "./Boxes.module.scss";
import { FaMagic } from "react-icons/fa";
import { IoRocketSharp, IoDiamondSharp } from "react-icons/io5";
const Boxes = () => {
	return (
		<section id="boxes" className={styles.boxes}>
			<div className={styles.wrapper}>
				<Box
					icon={<FaMagic fontSize="5.5rem" />}
					title="Creative Design"
					text="Proactively syndicate open-source e-markets after low-risk high-yeld synergy."
				/>
				<Box
					icon={<IoRocketSharp fontSize="5.5rem" />}
					title="Free Support"
					text="Proactively syndicate open-source e-markets after low-risk high-yeld synergy."
				/>
				<Box
					icon={<IoDiamondSharp fontSize="5.5rem" />}
					title="Exclusive Design"
					text="Proactively syndicate open-source e-markets after low-risk high-yeld synergy."
				/>
			</div>
		</section>
	);
};

export default Boxes;
