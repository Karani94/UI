const TextField = ({ label, inputProps, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-base text-gray-800">{label}</label>
      <input 
        className="bg-gray-200 py-2 px-3 border-2 ouline-none"
        {...inputProps}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;