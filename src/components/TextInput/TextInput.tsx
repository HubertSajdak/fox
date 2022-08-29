import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import styles from "./TextInput.module.scss";

const TextInput = (props: UseControllerProps<FieldValues>) => {
	const { field, fieldState } = useController<FieldValues>(props);
	return (
		<div className={styles.textInput}>
			<input {...field} placeholder={props.name} onBlur={field.onBlur} onChange={field.onChange} />
			<div className={styles.focusBorder}></div>
			{fieldState.error && (
				<p style={{ color: "tomato", fontSize: "1.6rem", margin: "1rem 0" }}>{fieldState.error.message}</p>
			)}
		</div>
	);
};

export default TextInput;
