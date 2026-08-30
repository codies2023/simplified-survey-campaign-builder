import Accordion from "../common/Accordion";
import SelectInput from "../common/SelectInput";
import NumberInput from "../common/NumberInput";
import { useSurvey } from "../../hooks/useSurvey";
export default function OptionListStyling() {
  const { state, dispatch } = useSurvey(),
    v = state.styling.options,
    set = (k, x) =>
      dispatch({ type: "UPDATE_STYLE", path: `options.${k}`, value: x });
  return (
    <Accordion title="Option List Styling">
      <SelectInput
        label="Layout"
        value={v.layout}
        onChange={(x) => set("layout", x)}
        options={["radio", "checkbox", "filled", "alternative"]}
      />
      <div className="grid2">
        <NumberInput
          label="Option Height"
          value={v.optionHeight}
          onChange={(x) => set("optionHeight", x)}
        />
        <NumberInput
          label="Bullet Spacing"
          value={v.bulletSpacing}
          onChange={(x) => set("bulletSpacing", x)}
        />
        <NumberInput
          label="Option Spacing"
          value={v.optionSpacing}
          onChange={(x) => set("optionSpacing", x)}
        />
        <NumberInput
          label="Corner Radius"
          value={v.borderRadius}
          onChange={(x) => set("borderRadius", x)}
        />
      </div>
    </Accordion>
  );
}
