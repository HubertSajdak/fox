import TextInput from "../../TextInput/TextInput";
import styles from "./Contact.module.scss";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../Button/Button";
import TextArea from "../../TextArea/TextArea";
import ContactCard from "../../ContactCard/ContactCard";
import { VscLocation } from "react-icons/vsc";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
export interface FormInputValues {
	name: string;
	email: string;
	subject: string;
}
const Contact = () => {
	const contactValidation = yup.object({
		name: yup.string().required("This field can not be empty"),
		email: yup.string().email().required("This field can not be empty"),
		subject: yup.string().required("This field can not be empty"),
		message: yup.string().max(500, "Maximum 500 characters").required("This field can not be empty"),
	});

	const onSubmit: SubmitHandler<FieldValues> = data => alert("message sent");

	const { handleSubmit, control } = useForm<FieldValues>({
		resolver: yupResolver(contactValidation),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});
	return (
		<section id="contact" className={styles.contact}>
			<div className={styles.wrapper}>
				<div className={styles.textContainer}>
					<h3>
						Get <span>in</span> touch
					</h3>
					<p>
						Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem
						ipsum amet madolor sit amet.
					</p>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<div className={styles.formContainer}>
						<div className={styles.top}>
							<TextInput name="name" control={control} />
							<TextInput name="email" control={control} />
							<TextInput name="subject" control={control} />
						</div>
						<div className={styles.bottom}>
							<TextArea name="message" control={control} />
						</div>
					</div>
					<Button variant="primary" type="submit">
						send message
					</Button>
				</form>
				<div className={styles.cardsContainer}>
					<ContactCard text="28 Green Tower, Street Name New" icon={<VscLocation />} />
					<ContactCard text="+ 2 012 345 678" icon={<AiOutlinePhone />} />
					<ContactCard text="fox@contact.com" icon={<AiOutlineMail />} />
				</div>
			</div>
		</section>
	);
};

export default Contact;
