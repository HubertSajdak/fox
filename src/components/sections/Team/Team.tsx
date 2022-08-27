import styles from "./Team.module.scss";
import Slider from "react-slick";
import teamList from "./teamList";
import TeamMemberCard from "../../TeamMemberCard/TeamMemberCard";
const Team = () => {
	const settings = {
		className: "center",
		dots: true,
		infinite: true,
		autoplay: true,
		slickPlay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 3,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section id="team" className={styles.team}>
			<div className={styles.wrapper}>
				<div className={styles.textContainer}>
					<h3>
						Our <span>Team</span>
					</h3>
					<p>
						Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem
						ipsum amet madolor sit amet.
					</p>
				</div>
				<Slider {...settings}>
					{teamList.map(member => {
						return (
							<TeamMemberCard
								key={member.id}
								img={member.photo}
								name={member.name}
								surname={member.surname}
								role={member.role}
								description={member.description}
							/>
						);
					})}
				</Slider>
			</div>
		</section>
	);
};

export default Team;
