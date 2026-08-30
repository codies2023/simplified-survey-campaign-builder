import ColorPicker from "./ColorPicker";
import NumberInput from "./NumberInput";
import SelectInput from "./SelectInput";
import Toggle from "./Toggle";
import MarginControls from "./MarginControls";
export default function TextStyleControls({ value, onChange, margin = true }) {
  const set = (k, v) => {
    const next = { ...value, [k]: v };

    if (k === "color") next.textColor = v;
    if (k === "textColor") next.color = v;

    onChange(next);
  };

  return (
    <div className="control-stack">
      <ColorPicker
        label="Color"
        value={value.color ?? value.textColor ?? "#000000"}
        onChange={(v) => set("color", v)}
      />
      <div className="grid2">
        <SelectInput
          label="Font Family"
          value={value.fontFamily || "Inter"}
          onChange={(v) => set("fontFamily", v)}
          options={["Inter", "Arial", "Georgia", "Verdana"]}
        />
        <NumberInput
          label="Font Size"
          value={value.fontSize || 14}
          onChange={(v) => set("fontSize", v)}
        />
      </div>
      <div className="grid2">
        <NumberInput
          label="Font Weight"
          value={value.fontWeight || 400}
          onChange={(v) => set("fontWeight", v)}
          min={100}
          max={900}
          step={100}
        />
        <SelectInput
          label="Alignment"
          value={value.alignment || "left"}
          onChange={(v) => set("alignment", v)}
          options={["left", "center", "right"]}
        />
      </div>
      <div className="toggles">
        <Toggle
          label="Bold"
          checked={value.bold}
          onChange={(v) => set("bold", v)}
        />
        <Toggle
          label="Italic"
          checked={value.italic}
          onChange={(v) => set("italic", v)}
        />
        <Toggle
          label="Underline"
          checked={value.underline}
          onChange={(v) => set("underline", v)}
        />
      </div>
      {margin && (
        <>
          <small>Margins</small>
          <MarginControls
            value={value.margin}
            onChange={(v) => set("margin", v)}
          />
        </>
      )}
    </div>
  );
}
