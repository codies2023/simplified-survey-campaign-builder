export default function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
}) {
  return (
    <label className="field">
      {label && <span>{label}</span>}
      <input
        type="number"
        value={value ?? 0}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(+e.target.value)}
      />
    </label>
  );
}
