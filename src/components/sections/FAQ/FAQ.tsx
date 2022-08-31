import Accordion from "../../Accordion/Accordion";
import styles from "./FAQ.module.scss";
import phoneImg from "../../../images/mobile-1.png";
const faqList = [
	{
		id: 0,
		question: "What is Fox?",
		answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam laboriosam dignissimos dolorum minus quia sed distinctio in mollitia laborum sint delectus accusamus!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam.`,
	},
	{
		id: 1,
		question: "How to use the App?",
		answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam laboriosam dignissimos dolorum minus quia sed distinctio in mollitia laborum sint delectus accusamus!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam.`,
	},
	{
		id: 2,
		question: "How to connect with the Support?",
		answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam laboriosam dignissimos dolorum minus quia sed distinctio in mollitia laborum sint delectus accusamus!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur dicta commodi, totam atque fugit ut magnam.`,
	},
];

const FAQ = () => {
	return (
		<section id="faq" className={styles.faq}>
			<div className={styles.wrapper}>
				<div className={styles.textContainer}>
					<h3>
						Common <span>FAQ</span>
					</h3>
					<p>
						Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem
						ipsum amet madolor sit amet.
					</p>
				</div>
				<div className={styles.content}>
					<div className={styles.accordion} data-aos="fade-right" data-aos-offset="350">
						<Accordion list={faqList} />
					</div>
					<div className={styles.imgContainer} data-aos="fade-left" data-aos-offset="350">
						<img src={phoneImg} alt="mobile device" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
