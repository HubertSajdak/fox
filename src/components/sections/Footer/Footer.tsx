import styles from "./Footer.module.scss";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../Button/Button";
import Widget from "../../Widget/Widget";
const Footer = () => {
	const subscriptionValidation = yup.object({
		email: yup.string().email().required("This field can not be empty"),
	});
	const { handleSubmit, register } = useForm<FieldValues>({
		resolver: yupResolver(subscriptionValidation),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = () => {
		alert("Subscribed!");
	};
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.subscribe}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input type="text" className={styles.subscribeEmailInput} placeholder="enter your email" />
						<Button variant="primary" type="button">
							subscribe
						</Button>
					</form>
				</div>
				<div className={styles.widgets}>
					<Widget
						title="Quick Links"
						text={
							<>
								<a href="#home">Home</a> <a href="#home">About Us</a>
								<a href="#home">Services</a> <a href="#home">Products</a>
							</>
						}
					/>
					<Widget
						title="Social Media"
						text={
							<>
								<a href="#home">Facebook</a>
								<a href="#home">LinkedIn</a>
								<a href="#home">Instagram</a>
								<a href="#home">Twitter</a>
							</>
						}
					/>
					<Widget
						title="Quick Contact"
						text={`
							Phone: +2 012 345 6789 Email: fox@contact.com Address : 8 Green Tower, Street Name New York City, USA`}
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
