const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <label className='font-Hubballi'>{label}</label>
      <input autoComplete="true" {...otherProps} />
    </>
  );
};

export default FormInput;
