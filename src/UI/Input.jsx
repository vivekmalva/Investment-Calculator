export default function Input({ id, label, ...props }) {
  return (
    <div className="">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} type="number" />
    </div>
  );
}
