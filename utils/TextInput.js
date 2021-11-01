const TextInput = ({
    fieldName,
    register,
    errors,
    placeHolder,
    isRequired,
    maximLength,
    minimLength,
}) => {
    return (
        //input field
        <div className="form-field">
            <input
                placeholder={placeHolder}
                {...register(fieldName, {
                    required: {
                        value: isRequired,
                        message: "This is required",
                    },
                    maxLength: {
                        value: maximLength,
                        message: `Value must be maximum ${maximLength}`,
                    },
                    minLength: {
                        value: minimLength,
                        message: `Value must be minimum ${minimLength}`,
                    },
                })}
            />

            <p>
                {
                    //If error exists in the textField
                    errors[fieldName] && errors[fieldName].message
                }
            </p>
        </div>
    );
};

export default TextInput;
