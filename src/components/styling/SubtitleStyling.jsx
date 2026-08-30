import Accordion from "../common/Accordion";
import TextStyleControls from "../common/TextStyleControls";
import { useSurvey } from "../../hooks/useSurvey";
export default function SubtitleStyling() {
  const { state, dispatch } = useSurvey(),
    v = state.styling.subtitle;
  return (
    <Accordion title="Subtitle Styling">
      <TextStyleControls
        value={v}
        onChange={(x) =>
          dispatch({ type: "UPDATE_STYLE", path: "subtitle", value: x })
        }
      />
    </Accordion>
  );
}
