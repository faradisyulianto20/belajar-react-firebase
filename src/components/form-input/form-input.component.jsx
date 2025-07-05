const FormInput = ({label, ...otherProps}) => {
    return (
        <div>
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
                <input {...otherProps}/>
        </div>
    )
}

export default FormInput