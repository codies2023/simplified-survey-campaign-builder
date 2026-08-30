import Accordion from "../common/Accordion";
import Toggle from "../common/Toggle";
import ColorPicker from "../common/ColorPicker";
import NumberInput from "../common/NumberInput";
import SelectInput from "../common/SelectInput";
import MarginControls from "../common/MarginControls";
import { useSurvey } from "../../hooks/useSurvey";
export default function CrossButtonStyling() {
  const { state, dispatch } = useSurvey(),
    v = state.styling.crossButton,
    set = (k, x) =>
      dispatch({ type: "UPDATE_STYLE", path: `crossButton.${k}`, value: x });
  return (
    <Accordion title="Cross Button Styling">
      <Toggle
        label="Enable Close Button"
        checked={v.enabled}
        onChange={(x) => set("enabled", x)}
      />
      <SelectInput
        label="Predefined Style"
        value={v.style}
        onChange={(x) => set("style", x)}
        options={["circle", "square", "minimal"]}
      />
      <div className="grid2">
        <ColorPicker
          label="Cross Color"
          value={v.crossColor}
          onChange={(x) => set("crossColor", x)}
        />
        <ColorPicker
          label="Fill Color"
          value={v.fillColor}
          onChange={(x) => set("fillColor", x)}
        />
        <ColorPicker
          label="Stroke Color"
          value={v.strokeColor}
          onChange={(x) => set("strokeColor", x)}
        />
        <NumberInput
          label="Size"
          value={v.size}
          onChange={(x) => set("size", x)}
        />
      </div>
      <MarginControls value={v.margin} onChange={(x) => set("margin", x)} />
    </Accordion>
  );
}
