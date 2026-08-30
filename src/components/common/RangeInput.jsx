export default function RangeInput({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) {
  return (
    <label className="field range">
      <span>
        {label}: <b>{value}</b>
      </span>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(+e.target.value)}
      />
    </label>
  );
}
