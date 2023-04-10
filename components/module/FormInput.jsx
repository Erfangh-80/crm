const FormInput = ({ name, label, type, value, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default FormInput;
