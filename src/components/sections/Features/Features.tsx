import styles from "./Features.module.scss";
import phoneImg from "../../../images/mobile-2.png";
import eclipse from "../../../images/eclipse.svg";
import Feature from "../../Feature/Feature";
import { FaShippingFast } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiOutlineCloud, AiOutlineGift } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { BsSave } from "react-icons/bs";
const Features = () => {
	return (
		<section id="features" className={styles.features}>
			<div className={styles.wrapper}>
				<div className={styles.textContainer}>
					<h3>
						Main
						<span> Features</span>
					</h3>
					<p>
						Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem
						ipsum amet madolor sit amet.
					</p>
				</div>
				<div className={styles.itemsContainer}>
					<div className={styles.featuresContainerOne}>
						<Feature
							title="Very Fast"
							text="Our system is comprehesive system of applied creativity"
							icon={<FaShippingFast />}
							variant="left"
							aosDelay={400}
						/>
						<Feature
							title="Easy to manage"
							text="For more than 5 years, we've been passionate about achieving better."
							icon={<FiSettings />}
							variant="left"
							aosDelay={800}
						/>
						<Feature
							title="Cloud storage"
							text="Our system is comprehesive system of applied creativity"
							icon={<AiOutlineCloud />}
							variant="left"
							aosDelay={1200}
						/>
					</div>
					<div className={styles.imgContainer}>
						<img src={eclipse} alt="" className={styles.eclipse} data-aos="zoom-in-up" />
						<img src={phoneImg} alt="mobile device" className={styles.phone} data-aos="zoom-in-up" />
					</div>
					<div className={styles.featuresContainerTwo}>
						<Feature
							title="Easy download"
							text="Our system is comprehesive system of applied creativity"
							icon={<BsSave />}
							variant="right"
							aosDelay={400}
						/>
						<Feature
							title="Up to 50% sale"
							text="For more than 5 years, we’ve been passionate about achieving better."
							icon={<AiOutlineGift />}
							variant="right"
							aosDelay={800}
						/>
						<Feature
							title="Data base"
							text="Our system is comprehesive system of applied creativity"
							icon={<HiOutlineDatabase />}
							variant="right"
							aosDelay={1200}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
