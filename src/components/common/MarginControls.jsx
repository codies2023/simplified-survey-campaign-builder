import NumberInput from "./NumberInput";
export default function MarginControls({ value = {}, onChange }) {
  return (
    <div className="grid4">
      {["top", "right", "bottom", "left"].map((k) => (
        <NumberInput
          key={k}
          label={k[0].toUpperCase() + k.slice(1)}
          value={value[k] || 0}
          onChange={(v) => onChange({ ...value, [k]: v })}
        />
      ))}
    </div>
  );
}
