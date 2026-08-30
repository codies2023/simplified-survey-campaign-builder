import Accordion from "../common/Accordion";
import TextStyleControls from "../common/TextStyleControls";
import { useSurvey } from "../../hooks/useSurvey";
export default function QuestionTitleStyling() {
  const { state, dispatch } = useSurvey(),
    v = state.styling.questionTitle;
  return (
    <Accordion title="Question Title Styling">
      <TextStyleControls
        value={v}
        onChange={(x) =>
          dispatch({ type: "UPDATE_STYLE", path: "questionTitle", value: x })
        }
      />
    </Accordion>
  );
}
