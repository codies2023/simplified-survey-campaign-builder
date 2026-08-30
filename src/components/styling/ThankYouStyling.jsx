import Accordion from "../common/Accordion";
import TextStyleControls from "../common/TextStyleControls";
import NumberInput from "../common/NumberInput";
import MarginControls from "../common/MarginControls";
import ButtonStyleControls from "../common/ButtonStyleControls";
import { useSurvey } from "../../hooks/useSurvey";

export default function ThankYouStyling() {
  const { state, dispatch } = useSurvey();
  const v = state.styling.thankYou;

  const set = (key, value) =>
    dispatch({
      type: "UPDATE_STYLE",
      path: `thankYou.${key}`,
      value,
    });

  return (
    <Accordion title="Thank You Page Styling">
      <b>Title</b>
      <TextStyleControls
        value={v.title}
        onChange={(value) => set("title", value)}
      />

      <b>Subtitle</b>
      <TextStyleControls
        value={v.subtitle}
        onChange={(value) => set("subtitle", value)}
      />

      <div className="grid2">
        <NumberInput
          label="Image Width"
          value={v.image.width}
          onChange={(value) => set("image", { ...v.image, width: value })}
        />
        <NumberInput
          label="Image Height"
          value={v.image.height}
          onChange={(value) => set("image", { ...v.image, height: value })}
        />
      </div>
      <small>Image Margins</small>
      <MarginControls
        value={v.image.margin}
        onChange={(value) => set("image", { ...v.image, margin: value })}
      />

      <b>Button</b>
      <ButtonStyleControls
        value={v.button}
        onChange={(value) => set("button", value)}
      />
    </Accordion>
  );
}
