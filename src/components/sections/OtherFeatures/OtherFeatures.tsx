import FeatureCard from "../../FeatureCard/FeatureCard";
import styles from "./OtherFeatures.module.scss";
import Slider from "react-slick";
import otherFeaturesList from "./otherFeaturesList";
const OtherFeatures = () => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		swipeToSlide: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className={styles.otherFeatures}>
			<div className={styles.wrapper}>
				<div className={styles.textContainer}>
					<h3>
						Other <span>Awesome</span> Features
					</h3>
					<p>
						Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem
						ipsum amet madolor sit amet.
					</p>
				</div>
				<Slider {...settings}>
					{otherFeaturesList.map(item => {
						return <FeatureCard title={item.title} text={item.text} icon={item.icon} key={item.id} />;
					})}
				</Slider>
			</div>
		</section>
	);
};

export default OtherFeatures;
