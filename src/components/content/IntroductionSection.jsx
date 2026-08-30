import Accordion from "../common/Accordion";
import NumberInput from "../common/NumberInput";
import { useSurvey } from "../../hooks/useSurvey";
export default function IntroductionSection() {
  const { state, dispatch } = useSurvey();
  return (
    <Accordion title="Introduction Page" open>
      <NumberInput
        label="Number of Survey Pages"
        value={state.content.numberOfPages}
        min={1}
        onChange={(v) =>
          dispatch({ type: "UPDATE_SURVEY_PAGE_COUNT", value: v })
        }
      />
      <p className="hint">Each page represents one survey question.</p>
    </Accordion>
  );
}
