export const Option = ({ name, label }) => {
  return (
    <>
      <label>{label}</label>
      <input
        className="w-full border border-slate-500"
        type="radio"
        name={name}
        id={name}
      />
    </>
  );
};
