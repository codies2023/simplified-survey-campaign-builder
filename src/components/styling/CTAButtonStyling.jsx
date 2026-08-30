import Accordion from "../common/Accordion";
import ButtonStyleControls from "../common/ButtonStyleControls";
import { useSurvey } from "../../hooks/useSurvey";
export default function CTAButtonStyling() {
  const { state, dispatch } = useSurvey(),
    v = state.styling.ctaButton,
    set = (value) =>
      dispatch({ type: "UPDATE_STYLE", path: "ctaButton", value });
  return (
    <Accordion title="CTA Button Styling">
      <ButtonStyleControls value={v} onChange={set} />
    </Accordion>
  );
}
