import PriceCard from "../../PriceCard/PriceCard";
import styles from "./Prices.module.scss";
const Prices = () => {
	return (
		<section id="prices" className={styles.prices}>
			<div className={styles.wrapper}>
				<div className={styles.textContainer}>
					<h3>
						App <span>Price</span>
					</h3>
					<p>
						Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem
						ipsum amet madolor sit amet.
					</p>
				</div>
				<div className={styles.cardsContainer}>
					<PriceCard
						title="Personal"
						price="30"
						list={[
							{
								id: 0,
								text: "100 MB Disk Space",
							},
							{
								id: 1,
								text: "2 Subdomains",
							},
							{
								id: 2,
								text: "5 Email Accounts",
							},
							{
								id: 3,
								text: "Webmail Support",
							},
							{
								id: 4,
								text: "Customer Support 24/7",
							},
						]}
					/>
					<PriceCard
						isSpecialOffer={true}
						title="Business"
						price="50"
						list={[
							{
								id: 0,
								text: "100 MB Disk Space",
							},
							{
								id: 1,
								text: "2 Subdomains",
							},
							{
								id: 2,
								text: "5 Email Accounts",
							},
							{
								id: 3,
								text: "Webmail Support",
							},
							{
								id: 4,
								text: "Customer Support 24/7",
							},
						]}
					/>
					<PriceCard
						title="Enterprise"
						price="30"
						list={[
							{
								id: 0,
								text: "100 MB Disk Space",
							},
							{
								id: 1,
								text: "2 Subdomains",
							},
							{
								id: 2,
								text: "5 Email Accounts",
							},
							{
								id: 3,
								text: "Webmail Support",
							},
							{
								id: 4,
								text: "Customer Support 24/7",
							},
						]}
					/>
				</div>
			</div>
		</section>
	);
};

export default Prices;
