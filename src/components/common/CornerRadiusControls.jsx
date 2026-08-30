import NumberInput from "./NumberInput";
export default function CornerRadiusControls({ value = {}, onChange }) {
  return (
    <div className="grid4">
      {[
        ["tl", "Top Left"],
        ["tr", "Top Right"],
        ["bl", "Bottom Left"],
        ["br", "Bottom Right"],
      ].map(([k, l]) => (
        <NumberInput
          key={k}
          label={l}
          value={value[k] || 0}
          onChange={(v) => onChange({ ...value, [k]: v })}
        />
      ))}
    </div>
  );
}
