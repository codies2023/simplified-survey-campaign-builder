import Accordion from "../common/Accordion";
import ColorPicker from "../common/ColorPicker";
import NumberInput from "../common/NumberInput";
import RangeInput from "../common/RangeInput";
import CornerRadiusControls from "../common/CornerRadiusControls";
import { useSurvey } from "../../hooks/useSurvey";
export default function AppearanceSettings() {
  const { state, dispatch } = useSurvey(),
    v = state.styling.appearance,
    set = (k, x) =>
      dispatch({ type: "UPDATE_STYLE", path: `appearance.${k}`, value: x });
  return (
    <Accordion title="Appearance" open>
      <ColorPicker
        label="Background Color"
        value={v.backgroundColor}
        onChange={(x) => set("backgroundColor", x)}
      />
      <small>Individual Corner Radius</small>
      <CornerRadiusControls
        value={v.radius}
        onChange={(x) => set("radius", x)}
      />
      <NumberInput
        label="Display Delay (seconds)"
        value={v.displayDelay}
        min={0}
        onChange={(x) => set("displayDelay", x)}
      />
      <ColorPicker
        label="Backdrop Color"
        value={v.backdropColor}
        onChange={(x) => set("backdropColor", x)}
      />
      <RangeInput
        label="Backdrop Opacity"
        value={v.backdropOpacity}
        onChange={(x) => set("backdropOpacity", x)}
      />
    </Accordion>
  );
}
