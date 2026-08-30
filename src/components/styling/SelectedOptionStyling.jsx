import Accordion from "../common/Accordion";
import TextStyleControls from "../common/TextStyleControls";
import ColorPicker from "../common/ColorPicker";
import NumberInput from "../common/NumberInput";
import { useSurvey } from "../../hooks/useSurvey";
export default function SelectedOptionStyling() {
  const { state, dispatch } = useSurvey(),
    v = state.styling.options.selected,
    set = (x) =>
      dispatch({ type: "UPDATE_STYLE", path: "options.selected", value: x });
  return (
    <Accordion title="Selected Option Styling">
      <ColorPicker
        label="Border Color"
        value={v.borderColor}
        onChange={(x) => set({ ...v, borderColor: x })}
      />
      <ColorPicker
        label="Background Color"
        value={v.backgroundColor}
        onChange={(x) => set({ ...v, backgroundColor: x })}
      />
      <NumberInput
        label="Border Width"
        value={v.borderWidth}
        onChange={(x) => set({ ...v, borderWidth: x })}
      />
      <TextStyleControls value={v} margin={false} onChange={set} />
    </Accordion>
  );
}
