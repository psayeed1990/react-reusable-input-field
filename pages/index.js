import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import TextInput from "../utils/TextInput";

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                fieldName="textField"
                register={register}
                errors={errors}
                placeHolder="Text Field"
                isRequired={true}
                maximLength={20}
                minimLength={2}
            />

            <input type="submit" value="Submit to Console" />
        </form>
    );
}
