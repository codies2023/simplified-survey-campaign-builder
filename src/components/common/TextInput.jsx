export default function TextInput({ label, value, onChange, ...p }) {
  return (
    <label className="field">
      {label && <span>{label}</span>}
      <input
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        {...p}
      />
    </label>
  );
}
