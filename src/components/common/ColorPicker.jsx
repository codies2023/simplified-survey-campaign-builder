export default function ColorPicker({ label, value, onChange }) {
  return (
    <label className="field color">
      {label && <span>{label}</span>}
      <input
        type="color"
        value={value || "#000000"}
        onChange={(e) => onChange(e.target.value)}
      />
      <input value={value || ""} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
