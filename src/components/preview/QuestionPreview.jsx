import { textStyle } from "../../utils/styleHelpers";
import OptionPreview from "./OptionPreview";
import CommentPreview from "./CommentPreview";
import PreviewButton from "./PreviewButton";
import { useSurvey } from "../../hooks/useSurvey";
export default function QuestionPreview({ question, index }) {
  const { state, dispatch } = useSurvey(),
    qs = state.content.questions;
  const next = () => {
    let target = index + 1;
    if (question.logic.enabled) {
      const c = question.logic.conditions.find(
        (x) => x.optionId === state.preview.selectedOptions[question.id],
      );
      const conditionalTarget = c ? Number(c.target) - 1 : null;
      if (
        Number.isInteger(conditionalTarget) &&
        conditionalTarget > index &&
        conditionalTarget < qs.length
      ) {
        target = conditionalTarget;
      }
    }
    if (target < qs.length)
      dispatch({ type: "SET_CURRENT_QUESTION", index: target });
    else if (state.content.thankYou.enabled)
      dispatch({ type: "SHOW_THANK_YOU" });
    else dispatch({ type: "SET_CURRENT_QUESTION", index: qs.length });
  };
  if (index >= qs.length)
    return (
      <div className="complete">
        <h2>Survey completed</h2>
        <p>Thank you for your response.</p>
      </div>
    );
  return (
    <>
      <div className="progress">
        Question {index + 1} of {qs.length}
      </div>
      <h2 style={textStyle(state.styling.questionTitle)}>{question.title}</h2>
      <p style={textStyle(state.styling.subtitle)}>{question.subtitle}</p>
      {question.options.map((o) => (
        <OptionPreview key={o.id} option={o} question={question} />
      ))}
      {question.additionalComments && <CommentPreview question={question} />}
      <div
        className="nav-row"
        style={{
          justifyContent:
            state.styling.ctaButton.alignment === "left"
              ? "flex-start"
              : state.styling.ctaButton.alignment === "right"
                ? "flex-end"
                : "center",
        }}
      >
        {index > 0 && (
          <button
            className="back-btn"
            onClick={() =>
              dispatch({ type: "SET_CURRENT_QUESTION", index: index - 1 })
            }
          >
            Back
          </button>
        )}
        <PreviewButton style={state.styling.ctaButton} onClick={next}>
          {question.buttonText}
        </PreviewButton>
      </div>
    </>
  );
}
