import Accordion from "../common/Accordion";
import TextStyleControls from "../common/TextStyleControls";
import { useSurvey } from "../../hooks/useSurvey";
export default function CommentStyling() {
  const { state, dispatch } = useSurvey(),
    v = state.styling.comments;
  return (
    <Accordion title="Additional Comment Styling">
      <TextStyleControls
        value={v}
        onChange={(x) =>
          dispatch({ type: "UPDATE_STYLE", path: "comments", value: x })
        }
      />
    </Accordion>
  );
}
