import styles from "./About.module.scss";
import phoneImg from "../../../images/mobile-1.png";
import Reason from "../../Reason/Reason";
import { AiOutlineCheckCircle } from "react-icons/ai";


const About = () => {
	return (
		<section id="about" className={styles.about}>
			<div className={styles.wrapper}>
				<div className={styles.imgContainer} data-aos="fade-right">
					<img src={phoneImg} alt="mobile device" />
				</div>
				<div className={styles.textContainer} data-aos="fade-left">
					<h3 className={styles.title}>Make Business Easy With Us</h3>
					<p className={styles.description}>
						Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem
					</p>
					<div className={styles.reasonsContainer}>
						<Reason
							icon={<AiOutlineCheckCircle />}
							text={`Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.`}
						/>
						<Reason
							icon={<AiOutlineCheckCircle />}
							text={`It doesn't matter if you are in an office or on an airplane. You will never lose a second.`}
						/>
						<Reason
							icon={<AiOutlineCheckCircle />}
							text={`It doesn't matter if you are in an office or on an airplane. You will never lose a second.`}
						/>
						<Reason
							icon={<AiOutlineCheckCircle />}
							text={`Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
