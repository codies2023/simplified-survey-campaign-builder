import Toggle from "./Toggle";
import ColorPicker from "./ColorPicker";
import NumberInput from "./NumberInput";
import SelectInput from "./SelectInput";
import MarginControls from "./MarginControls";
import CornerRadiusControls from "./CornerRadiusControls";

export default function ButtonStyleControls({ value, onChange }) {
  const set = (key, nextValue) => onChange({ ...value, [key]: nextValue });
  const radius =
    typeof value.radius === "number"
      ? {
          tl: value.radius,
          tr: value.radius,
          bl: value.radius,
          br: value.radius,
        }
      : value.radius;

  return (
    <div className="control-stack">
      <Toggle
        label="Occupy Full Width"
        checked={value.fullWidth}
        onChange={(nextValue) => set("fullWidth", nextValue)}
      />
      <div className="grid3">
        <ColorPicker
          label="Border"
          value={value.borderColor}
          onChange={(nextValue) => set("borderColor", nextValue)}
        />
        <ColorPicker
          label="Text"
          value={value.textColor}
          onChange={(nextValue) => set("textColor", nextValue)}
        />
        <ColorPicker
          label="Background"
          value={value.backgroundColor}
          onChange={(nextValue) => set("backgroundColor", nextValue)}
        />
      </div>
      <div className="grid3">
        <NumberInput
          label="Font Size"
          value={value.fontSize}
          onChange={(nextValue) => set("fontSize", nextValue)}
        />
        <NumberInput
          label="Font Weight"
          value={value.fontWeight}
          min={100}
          max={900}
          step={100}
          onChange={(nextValue) => set("fontWeight", nextValue)}
        />
        <NumberInput
          label="Height"
          value={value.height}
          min={1}
          onChange={(nextValue) => set("height", nextValue)}
        />
        <NumberInput
          label="Width"
          value={value.width}
          min={1}
          onChange={(nextValue) => set("width", nextValue)}
        />
        <NumberInput
          label="Border Width"
          value={value.borderWidth}
          min={0}
          onChange={(nextValue) => set("borderWidth", nextValue)}
        />
        <SelectInput
          label="Alignment"
          value={value.alignment}
          onChange={(nextValue) => set("alignment", nextValue)}
          options={["left", "center", "right"]}
        />
      </div>
      <div className="toggles">
        <Toggle
          label="Bold"
          checked={value.bold}
          onChange={(nextValue) => set("bold", nextValue)}
        />
        <Toggle
          label="Italic"
          checked={value.italic}
          onChange={(nextValue) => set("italic", nextValue)}
        />
      </div>
      <small>Individual Corner Radius</small>
      <CornerRadiusControls
        value={radius}
        onChange={(nextValue) => set("radius", nextValue)}
      />
      <small>Margins</small>
      <MarginControls
        value={value.margin}
        onChange={(nextValue) => set("margin", nextValue)}
      />
    </div>
  );
}
