import { useSurvey } from "../../hooks/useSurvey";
import { textStyle } from "../../utils/styleHelpers";
export default function CommentPreview({ question }) {
  const { state, dispatch } = useSurvey(),
    s = state.styling.comments,
    textValue = { ...s, color: s.color ?? s.textColor ?? "#334155" };

  return (
    <textarea
      placeholder="Additional comments..."
      value={state.preview.comments[question.id] || ""}
      onChange={(e) =>
        dispatch({
          type: "UPDATE_COMMENT",
          questionId: question.id,
          value: e.target.value,
        })
      }
      style={{
        border: `${s.borderWidth}px solid ${s.borderColor}`,
        background: s.backgroundColor,
        ...textStyle(textValue),
      }}
    />
  );
}
