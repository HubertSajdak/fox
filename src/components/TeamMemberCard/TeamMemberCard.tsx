import styles from "./TeamMemberCard.module.scss";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
export interface TeamMemberCardProps {
	img: string;
	name: string;
	surname: string;
	role: string;
	description: string;
}
const TeamMemberCard = ({ img, name, surname, role, description }: TeamMemberCardProps) => {
	return (
		<div className={styles.teamMemberCard}>
			<div className={styles.photo}>
				<img src={img} alt={`${name} ${surname}`} />
			</div>
			<h3>{`${name} ${surname}`}</h3>
			<h5>{`${role}`}</h5>
			<p>{description}</p>
			<ul>
				<li>
					<a href="#home">
						<FaFacebookF />
					</a>
				</li>
				<li>
					<a href="#home">
						<FaTwitter />
					</a>
				</li>
				<li>
					<a href="#home">
						<FaLinkedinIn />
					</a>
				</li>
				<li>
					<a href="#home">
						<FaInstagram />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default TeamMemberCard;
